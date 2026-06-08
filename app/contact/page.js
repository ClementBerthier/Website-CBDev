import ContactPage from "@/components/ContactPage/ContactPage";

export const metadata = {
    title: "Contact — Développeur Web à Castres, Mazamet et Tarn",
    description:
        "Contactez Clément Berthier, développeur web freelance basé entre Castres et Mazamet (Pont-de-l'Arn, 81). Sites vitrines, e-commerce, automatisation IA. Intervention dans le Tarn et à distance.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact — Clément Berthier Développeur",
        description:
            "Discutons de votre projet web ou d'automatisation. Premier échange offert et sans engagement.",
        url: "/contact",
    },
};

const SITE_URL = "https://www.clementberthierdeveloppeur.fr";

const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: `${SITE_URL}/`,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Contact",
                    item: `${SITE_URL}/contact`,
                },
            ],
        },
        {
            "@type": "LocalBusiness",
            "@id": `${SITE_URL}/#business`,
        },
        {
            "@type": "ContactPage",
            url: `${SITE_URL}/contact`,
            name: "Contact — Clément Berthier Développeur",
            description:
                "Page de contact de Clément Berthier, développeur web freelance à Castres et Mazamet (Tarn).",
            mainEntity: {
                "@id": `${SITE_URL}/#business`,
            },
        },
    ],
};

export default function Contact() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactSchema),
                }}
            />
            <ContactPage />
        </>
    );
}
