import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import services from "@/data/services.json";

const SITE_URL = "https://www.clementberthierdeveloppeur.fr";

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) {
        return {};
    }
    return {
        title: service.metaTitle,
        description: service.metaDescription,
        alternates: {
            canonical: `/services/${service.slug}`,
        },
        openGraph: {
            title: service.metaTitle,
            description: service.metaDescription,
            url: `/services/${service.slug}`,
        },
        keywords: service.keywords,
    };
}

export default async function ServicePage({ params }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) {
        notFound();
    }

    const serviceSchema = {
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
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: service.title,
                        item: `${SITE_URL}/services/${service.slug}`,
                    },
                ],
            },
            {
                "@type": "Service",
                name: service.title,
                description: service.metaDescription,
                serviceType: service.title,
                url: `${SITE_URL}/services/${service.slug}`,
                provider: {
                    "@type": "LocalBusiness",
                    "@id": `${SITE_URL}/#business`,
                },
                areaServed: [
                    { "@type": "AdministrativeArea", name: "Tarn" },
                    { "@type": "AdministrativeArea", name: "Occitanie" },
                ],
                offers: {
                    "@type": "Offer",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <ServiceDetail service={service} services={services} />
        </>
    );
}
