import Templates from "@/components/Templates/Templates";

export const metadata = {
    title: "Modèles de sites web — Démos artisans, TPE, one page",
    description:
        "Naviguez dans des sites complets de démonstration pour vous projeter avant de commander. Modèles one page, sites vitrines et portfolios artisans à Castres, Mazamet (Tarn) et au-delà.",
    alternates: {
        canonical: "/templates",
    },
    openGraph: {
        title: "Templates — Clément Berthier Développeur",
        description:
            "Galerie de sites complets de démonstration pour vous projeter avant de commander votre site.",
        url: "/templates",
    },
};

const SITE_URL = "https://www.clementberthierdeveloppeur.fr";

const templatesSchema = {
    "@context": "https://schema.org",
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
            name: "Templates",
            item: `${SITE_URL}/templates`,
        },
    ],
};

export default function TemplatesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(templatesSchema),
                }}
            />
            <Templates />
        </>
    );
}
