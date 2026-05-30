import { Suspense } from "react";
import ServicesPage from "@/components/ServicesPage/ServicesPage";

export const metadata = {
    title: "Création de Sites Web sur mesure | Clément Berthier Développeur, Tarn",
    description:
        "Développeur web freelance dans le Tarn. Création de sites vitrines, portfolios, blogs, sites e-commerce et applications web sur mesure adaptés à vos besoins.",
    alternates: {
        canonical: "/servicesPage",
    },
    openGraph: {
        title: "Création de Sites Web sur mesure | Clément Berthier Développeur, Tarn",
        description:
            "Développeur web freelance dans le Tarn. Création de sites vitrines, portfolios, blogs, sites e-commerce et applications web sur mesure adaptés à vos besoins.",
        url: "/servicesPage",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Développement Web sur mesure",
            description:
                "Création de sites vitrines, portfolios, blogs, sites e-commerce et applications web sur mesure adaptés à vos besoins.",
            provider: {
                "@type": "ProfessionalService",
                name: "Clément Berthier Développeur",
                url: "https://www.clementberthierdeveloppeur.fr",
            },
            areaServed: {
                "@type": "AdministrativeArea",
                name: "Occitanie",
            },
            serviceType: "Développement Web",
            offers: {
                "@type": "Offer",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
            },
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://www.clementberthierdeveloppeur.fr/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Développement Web",
                    item: "https://www.clementberthierdeveloppeur.fr/servicesPage",
                },
            ],
        },
    ],
};

export default function ServicesPageRoute() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <Suspense fallback={null}>
                <ServicesPage />
            </Suspense>
        </>
    );
}
