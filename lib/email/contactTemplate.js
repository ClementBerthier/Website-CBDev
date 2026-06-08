function escapeHtml(str) {
    return String(str ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const SITE_URL = "https://www.clementberthierdeveloppeur.fr";
const BRAND_GRADIENT_DARK =
    "linear-gradient(135deg, #1e90ff 0%, #4682b4 50%, #0606c2 100%)";
const BRAND_GRADIENT_LIGHT =
    "linear-gradient(135deg, #98d2e6 0%, #1e90ff 100%)";

export function buildContactEmailHtml({
    fullName,
    email,
    phone,
    object,
    message,
}) {
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : null;
    const safeObject = escapeHtml(object);
    const safeMessage = escapeHtml(message);
    const replyHref = `mailto:${safeEmail}?subject=${encodeURIComponent(`Re: ${object}`)}`;

    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nouveau message du site</title>
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background-color:#f9fafe;color:#1e293b;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f9fafe;">
        <tr>
            <td align="center" style="padding:40px 20px;">

                <!-- MAIN CARD -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);">

                    <!-- Header -->
                    <tr>
                        <td style="background:${BRAND_GRADIENT_DARK};padding:32px 32px 28px;text-align:center;">
                            <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:rgba(255,255,255,0.85);text-transform:uppercase;letter-spacing:1.5px;">Contact formulaire</p>
                            <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">Nouveau message reçu</h1>
                        </td>
                    </tr>

                    <!-- Sender info -->
                    <tr>
                        <td style="padding:32px 32px 0;">
                            <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Expéditeur</p>
                            <p style="margin:0 0 6px;font-size:18px;font-weight:700;color:#0f172a;">${safeName}</p>
                            <p style="margin:0;font-size:14px;color:#475569;">
                                <a href="mailto:${safeEmail}" style="color:#1e90ff;text-decoration:none;">${safeEmail}</a>${
                                    safePhone
                                        ? `<br /><span style="color:#94a3b8;">${safePhone}</span>`
                                        : ""
                                }
                            </p>
                        </td>
                    </tr>

                    <!-- Object -->
                    <tr>
                        <td style="padding:24px 32px 0;">
                            <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Objet</p>
                            <p style="margin:0;font-size:16px;font-weight:600;color:#0f172a;line-height:1.4;">${safeObject}</p>
                        </td>
                    </tr>

                    <!-- Message -->
                    <tr>
                        <td style="padding:24px 32px 32px;">
                            <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Message</p>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f9fafe;border-radius:8px;border-left:3px solid #1e90ff;">
                                <tr>
                                    <td style="padding:20px;">
                                        <p style="margin:0;font-size:15px;line-height:1.6;color:#1e293b;white-space:pre-wrap;">${safeMessage}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- CTA -->
                    <tr>
                        <td style="padding:0 32px 36px;text-align:center;">
                            <a href="${replyHref}" style="display:inline-block;padding:14px 28px;background:${BRAND_GRADIENT_LIGHT};color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:999px;">
                                Répondre directement →
                            </a>
                        </td>
                    </tr>

                </table>

                <!-- Footer -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px;">
                    <tr>
                        <td style="padding:24px 20px;text-align:center;">
                            <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5;">
                                Reçu via le formulaire de contact de
                                <a href="${SITE_URL}" style="color:#1e90ff;text-decoration:none;">clementberthierdeveloppeur.fr</a>
                            </p>
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>
</body>
</html>`;
}

export function buildContactEmailText({
    fullName,
    email,
    phone,
    object,
    message,
}) {
    return [
        `═══════════════════════════════════════════`,
        `  Nouveau message du formulaire de contact`,
        `═══════════════════════════════════════════`,
        ``,
        `EXPÉDITEUR`,
        `  ${fullName}`,
        `  ${email}`,
        phone ? `  ${phone}` : null,
        ``,
        `OBJET`,
        `  ${object}`,
        ``,
        `MESSAGE`,
        `  ${message.split("\n").join("\n  ")}`,
        ``,
        `───────────────────────────────────────────`,
        `Reçu via clementberthierdeveloppeur.fr`,
    ]
        .filter((line) => line !== null)
        .join("\n");
}
