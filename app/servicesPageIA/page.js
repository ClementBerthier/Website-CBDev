import { Suspense } from "react";
import ServicesPageIA from "@/components/ServicesPageIA/ServicesPageIA";

export const metadata = {
    title: "Automatisation IA & Agents IA | Clément Berthier Développeur, Tarn",
    description:
        "Solutions d'automatisation IA sur mesure dans le Tarn. Agents IA, automatisation de processus et optimisation GEO pour booster la productivité de votre entreprise.",
    alternates: {
        canonical: "/servicesPageIA",
    },
    openGraph: {
        title: "Automatisation IA & Agents IA | Clément Berthier Développeur, Tarn",
        description:
            "Solutions d'automatisation IA sur mesure dans le Tarn. Agents IA, automatisation de processus et optimisation GEO pour booster la productivité de votre entreprise.",
        url: "/servicesPageIA",
    },
};

const serviceIASchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Automatisation IA & Agents IA",
            description:
                "Solutions d'automatisation IA sur mesure. Agents IA, automatisation de processus et optimisation GEO pour booster la productivité de votre entreprise.",
            provider: {
                "@type": "ProfessionalService",
                name: "Clément Berthier Développeur",
                url: "https://www.clementberthierdeveloppeur.fr",
            },
            areaServed: {
                "@type": "AdministrativeArea",
                name: "Occitanie",
            },
            serviceType: "Automatisation IA",
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
                    name: "Automatisation IA",
                    item: "https://www.clementberthierdeveloppeur.fr/servicesPageIA",
                },
            ],
        },
    ],
};

export default function ServicesPageIARoute() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceIASchema),
                }}
            />
            <Suspense fallback={null}>
                <ServicesPageIA />
            </Suspense>
        </>
    );
}
