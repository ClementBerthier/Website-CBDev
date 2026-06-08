"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { headers } from "next/headers";
import {
    buildContactEmailHtml,
    buildContactEmailText,
} from "@/lib/email/contactTemplate";
import { PHONE_REGEX } from "@/lib/validation/contactRules";

// Best-effort in-memory rate limit. Not reliable across Vercel cold instances —
// stops naive single-IP scripts, not a determined attacker. Migrate to Upstash
// if real spam appears.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const MIN_FORM_FILL_MS = 2000;
const ipAttempts = new Map();

function isRateLimited(ip) {
    const now = Date.now();
    const cutoff = now - RATE_LIMIT_WINDOW_MS;
    const recent = (ipAttempts.get(ip) ?? []).filter((t) => t > cutoff);
    if (recent.length >= RATE_LIMIT_MAX_ATTEMPTS) {
        ipAttempts.set(ip, recent);
        return true;
    }
    recent.push(now);
    ipAttempts.set(ip, recent);
    if (ipAttempts.size > 1000) {
        for (const [key, timestamps] of ipAttempts) {
            if (timestamps.every((t) => t <= cutoff)) ipAttempts.delete(key);
        }
    }
    return false;
}

async function getClientIp() {
    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0].trim();
    return headersList.get("x-real-ip") ?? "unknown";
}

const ContactSchema = z.object({
    user_lastname: z.string().max(50, "Le nom est trop long").optional(),
    user_firstname: z.string().max(50, "Le prénom est trop long").optional(),
    user_email: z.string().email("Adresse email invalide"),
    user_phone: z
        .string()
        .max(20, "Numéro de téléphone trop long")
        .refine(
            (val) => val === "" || PHONE_REGEX.test(val),
            "Numéro de téléphone invalide"
        )
        .optional(),
    object: z
        .string()
        .min(1, "L'objet est requis")
        .max(150, "L'objet est trop long"),
    message: z
        .string()
        .min(1, "Le message est requis")
        .max(5000, "Le message est trop long"),
    honeypot: z.string().optional(),
    formStartTime: z.number().optional(),
});

export async function sendContact(formData) {
    const result = ContactSchema.safeParse(formData);

    if (!result.success) {
        return {
            ok: false,
            error: result.error.errors[0]?.message ?? "Données invalides",
        };
    }

    const data = result.data;

    if (data.honeypot && data.honeypot.length > 0) {
        console.warn("sendContact - honeypot triggered");
        return { ok: true };
    }

    if (
        typeof data.formStartTime === "number" &&
        Date.now() - data.formStartTime < MIN_FORM_FILL_MS
    ) {
        console.warn("sendContact - form submitted too fast (bot suspected)");
        return { ok: true };
    }

    const ip = await getClientIp();
    if (isRateLimited(ip)) {
        console.warn("sendContact - rate limit hit:", ip);
        return {
            ok: false,
            error: "Trop de tentatives. Merci de réessayer dans quelques minutes.",
        };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const fullName =
        [data.user_firstname, data.user_lastname].filter(Boolean).join(" ") ||
        "Anonyme";

    const emailPayload = {
        fullName,
        email: data.user_email,
        phone: data.user_phone || null,
        object: data.object,
        message: data.message,
    };

    try {
        await transporter.sendMail({
            from: `"Site CBDev" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_TO_EMAIL,
            replyTo: data.user_email,
            subject: `[Contact site] ${data.object}`,
            text: buildContactEmailText(emailPayload),
            html: buildContactEmailHtml(emailPayload),
        });
        return { ok: true };
    } catch (err) {
        console.error("sendContact - SMTP error:", err);
        return {
            ok: false,
            error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        };
    }
}
