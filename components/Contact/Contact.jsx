"use client";

import { useState, useTransition } from "react";
import { sendContact } from "@/lib/actions/sendContact";
import { EMAIL_REGEX, PHONE_REGEX } from "@/lib/validation/contactRules";
import Modal from "./Modal.jsx";
import {
    MapPin,
    Mail,
    Phone,
    Send,
    AlertCircle,
    CheckCircle2,
    XCircle,
    ShieldCheck,
} from "lucide-react";

const EMPTY_FORM = {
    user_lastname: "",
    user_firstname: "",
    user_email: "",
    user_phone: "",
    object: "",
    message: "",
    honeypot: "",
    formStartTime: 0,
};

const SOCIAL_LINKS = [
    {
        href: "https://www.facebook.com/profile.php?id=61562316966767",
        icon: "/images/whitefacebook.svg",
        label: "Facebook",
    },
    {
        href: "https://www.instagram.com/clementberthier_dev/",
        icon: "/images/whiteinsta.svg",
        label: "Instagram",
    },
    {
        href: "https://www.linkedin.com/in/cl%C3%A9ment-berthier/",
        icon: "/images/whitelinkedin.svg",
        label: "LinkedIn",
    },
    {
        href: "https://github.com/ClementBerthier",
        icon: "/images/whitegithub.svg",
        label: "GitHub",
    },
];

function validateForm(formData) {
    const errors = {};
    if (!formData.user_email) {
        errors.user_email = "Veuillez renseigner votre adresse email";
    } else if (!EMAIL_REGEX.test(formData.user_email)) {
        errors.user_email = "Cette adresse email n'est pas valide";
    }
    if (formData.user_phone && !PHONE_REGEX.test(formData.user_phone)) {
        errors.user_phone = "Ce numéro de téléphone n'est pas valide";
    }
    if (!formData.object) {
        errors.object = "Veuillez renseigner un objet";
    }
    if (!formData.message) {
        errors.message = "Veuillez écrire votre message";
    }
    return errors;
}

export default function Contact() {
    const [formData, setFormData] = useState(() => ({
        ...EMPTY_FORM,
        formStartTime: Date.now(),
    }));
    const [errors, setErrors] = useState({});
    const [resultModal, setResultModal] = useState(null);
    const [consentOpen, setConsentOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        setConsentOpen(true);
    };

    const handleConsentAccepted = () => {
        setConsentOpen(false);
        startTransition(async () => {
            const result = await sendContact(formData);
            if (result.ok) {
                setFormData({ ...EMPTY_FORM, formStartTime: Date.now() });
                setResultModal({
                    type: "success",
                    title: "Message envoyé",
                    content:
                        "Votre message a bien été envoyé. Je vous réponds dans les plus brefs délais.",
                });
            } else {
                setResultModal({
                    type: "error",
                    title: "Erreur d'envoi",
                    content:
                        result.error ??
                        "Une erreur est survenue. Veuillez réessayer dans quelques instants.",
                });
            }
        });
    };

    const fieldClass = (field) =>
        `w-full rounded-xl border-2 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-300 transition-colors focus:outline-none focus:ring-4 ${
            errors[field]
                ? "border-rose-300 focus:border-rose-500 focus:ring-rose-500/10"
                : "border-ink-100 focus:border-brand-500 focus:ring-brand-500/10"
        }`;

    const errorMsg = (field) =>
        errors[field] ? (
            <p
                id={`${field}-error`}
                className="mt-1.5 flex items-center gap-1.5 text-sm text-rose-600"
            >
                <AlertCircle size={14} />
                {errors[field]}
            </p>
        ) : null;

    return (
        <>
            {/* Result modal — success or server error */}
            <Modal
                open={resultModal !== null}
                title={resultModal?.title ?? ""}
                icon={
                    resultModal?.type === "success" ? (
                        <CheckCircle2 size={28} className="text-emerald-600" />
                    ) : (
                        <XCircle size={28} className="text-rose-600" />
                    )
                }
                onClose={() => setResultModal(null)}
                actions={
                    <button
                        type="button"
                        onClick={() => setResultModal(null)}
                        className="rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-6 py-2.5 text-sm font-semibold !text-white shadow-md transition-all hover:shadow-lg hover:brightness-110"
                    >
                        Fermer
                    </button>
                }
            >
                <p>{resultModal?.content}</p>
            </Modal>

            {/* RGPD consent modal */}
            <Modal
                open={consentOpen}
                title="Confirmation d'envoi"
                icon={<ShieldCheck size={28} className="text-brand-600" />}
                onClose={() => setConsentOpen(false)}
                actions={
                    <>
                        <button
                            type="button"
                            onClick={() => setConsentOpen(false)}
                            className="rounded-full border-2 border-ink-200 bg-white px-6 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-ink-300"
                        >
                            Annuler
                        </button>
                        <button
                            type="button"
                            onClick={handleConsentAccepted}
                            className="rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-6 py-2.5 text-sm font-semibold !text-white shadow-md transition-all hover:shadow-lg hover:brightness-110"
                        >
                            Accepter et envoyer
                        </button>
                    </>
                }
            >
                <p>
                    En envoyant ce formulaire, vous acceptez que vos données
                    soient traitées pour répondre à votre demande, conformément
                    à notre politique de confidentialité.
                </p>
            </Modal>

            <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/50 py-24 sm:py-32">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl"
                />

                <div className="relative mx-auto max-w-7xl px-6">
                    {/* Header */}
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
                            <Mail size={14} />
                            Contact
                        </span>
                        <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(2rem,3.5vw,3rem)]">
                            Discutons de{" "}
                            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                                votre projet
                            </span>
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-ink-500">
                            Un message, un appel, un café — choisissez ce qui
                            vous convient.
                        </p>
                    </div>

                    {/* Grid : info + form */}
                    <div className="mt-16 grid gap-8 lg:grid-cols-5">
                        {/* Coordonnées */}
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-700 to-brand-900 p-8 text-white lg:col-span-2 lg:p-10">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl"
                            />
                            <div className="relative">
                                <h3 className="font-display text-2xl font-bold">
                                    Mes coordonnées
                                </h3>
                                <p className="mt-2 text-white/70">
                                    N&apos;hésitez pas à me contacter
                                    directement.
                                </p>

                                <div className="mt-8 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white/60">
                                                Adresse
                                            </p>
                                            <p className="mt-0.5 text-base leading-relaxed">
                                                157 chemin de terre albine
                                                <br />
                                                81660 Pont-de-l&apos;arn
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white/60">
                                                Email
                                            </p>
                                            <a
                                                href="mailto:clementberthierdeveloppeur@gmail.com"
                                                className="mt-0.5 block break-all text-base transition-colors hover:text-brand-200"
                                            >
                                                clementberthierdeveloppeur@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white/60">
                                                Téléphone
                                            </p>
                                            <a
                                                href="tel:+33788453778"
                                                className="mt-0.5 block text-base transition-colors hover:text-brand-200"
                                            >
                                                07.88.45.37.78
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-white/10 pt-8">
                                    <p className="text-sm font-semibold text-white/60">
                                        Réseaux sociaux
                                    </p>
                                    <div className="mt-3 flex gap-3">
                                        {SOCIAL_LINKS.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                aria-label={social.label}
                                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
                                            >
                                                <img
                                                    src={social.icon}
                                                    alt=""
                                                    aria-hidden="true"
                                                    width={20}
                                                    height={20}
                                                    className="h-5 w-5"
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="rounded-3xl border border-ink-100 bg-white p-8 shadow-sm lg:col-span-3 lg:p-10"
                        >
                            {/* Honeypot anti-bot */}
                            <input
                                type="text"
                                name="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                            />

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="lastname"
                                        className="mb-1.5 block text-sm font-semibold text-ink-700"
                                    >
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="user_lastname"
                                        placeholder="Votre nom"
                                        value={formData.user_lastname}
                                        onChange={handleChange}
                                        maxLength={50}
                                        autoComplete="family-name"
                                        className={fieldClass("user_lastname")}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="firstname"
                                        className="mb-1.5 block text-sm font-semibold text-ink-700"
                                    >
                                        Prénom
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="user_firstname"
                                        placeholder="Votre prénom"
                                        value={formData.user_firstname}
                                        onChange={handleChange}
                                        maxLength={50}
                                        autoComplete="given-name"
                                        className={fieldClass("user_firstname")}
                                    />
                                </div>
                            </div>

                            <div className="mt-5">
                                <label
                                    htmlFor="mail"
                                    className="mb-1.5 block text-sm font-semibold text-ink-700"
                                >
                                    Email <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="mail"
                                    name="user_email"
                                    placeholder="vous@exemple.com"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    aria-invalid={!!errors.user_email}
                                    aria-describedby={
                                        errors.user_email
                                            ? "user_email-error"
                                            : undefined
                                    }
                                    className={fieldClass("user_email")}
                                />
                                {errorMsg("user_email")}
                            </div>

                            <div className="mt-5">
                                <label
                                    htmlFor="phone"
                                    className="mb-1.5 block text-sm font-semibold text-ink-700"
                                >
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="user_phone"
                                    placeholder="06 12 34 56 78"
                                    value={formData.user_phone}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    aria-invalid={!!errors.user_phone}
                                    aria-describedby={
                                        errors.user_phone
                                            ? "user_phone-error"
                                            : undefined
                                    }
                                    className={fieldClass("user_phone")}
                                />
                                {errorMsg("user_phone")}
                            </div>

                            <div className="mt-5">
                                <label
                                    htmlFor="textarea_object"
                                    className="mb-1.5 block text-sm font-semibold text-ink-700"
                                >
                                    Objet <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="textarea_object"
                                    name="object"
                                    placeholder="Quel est le sujet de votre message ?"
                                    value={formData.object}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.object}
                                    aria-describedby={
                                        errors.object ? "object-error" : undefined
                                    }
                                    className={fieldClass("object")}
                                />
                                {errorMsg("object")}
                            </div>

                            <div className="mt-5">
                                <label
                                    htmlFor="textarea_message"
                                    className="mb-1.5 block text-sm font-semibold text-ink-700"
                                >
                                    Message <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                    id="textarea_message"
                                    name="message"
                                    placeholder="Parlez-moi de votre projet..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={
                                        errors.message
                                            ? "message-error"
                                            : undefined
                                    }
                                    className={`resize-none ${fieldClass("message")}`}
                                />
                                {errorMsg("message")}
                            </div>

                            <p className="mt-3 text-xs text-ink-400">
                                <span className="text-rose-500">*</span> Champs
                                obligatoires
                            </p>

                            <button
                                type="submit"
                                disabled={isPending}
                                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-7 py-3.5 font-semibold !text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            >
                                {isPending ? "Envoi..." : "Envoyer le message"}
                                <Send
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
