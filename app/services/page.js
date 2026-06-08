import ServicesIndex from "@/components/ServicesIndex/ServicesIndex";
import services from "@/data/services.json";

const SITE_URL = "https://www.clementberthierdeveloppeur.fr";

export const metadata = {
    title: "Services web — Sites, e-commerce, automatisation IA | Tarn",
    description:
        "Création de sites vitrines, e-commerce, applications web, refonte, SEO local et automatisation IA pour TPE/PME. Développeur freelance à Castres et Mazamet (Tarn).",
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Services web — Clément Berthier Développeur",
        description:
            "Six services web pour les artisans, indépendants et TPE/PME du Tarn et de l'Occitanie.",
        url: "/services",
    },
};

const servicesSchema = {
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
                    name: "Services",
                    item: `${SITE_URL}/services`,
                },
            ],
        },
        {
            "@type": "CollectionPage",
            url: `${SITE_URL}/services`,
            name: "Services web — Clément Berthier Développeur",
            description:
                "Six services web pour les artisans, indépendants et TPE/PME du Tarn et de l'Occitanie.",
            mainEntity: {
                "@type": "ItemList",
                itemListElement: services.map((service, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: service.title,
                    url: `${SITE_URL}/services/${service.slug}`,
                })),
            },
        },
    ],
};

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(servicesSchema),
                }}
            />
            <ServicesIndex services={services} />
        </>
    );
}
