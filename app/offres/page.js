import Offers from "@/components/Offers/Offers";
import packs from "@/data/packs.json";

export const metadata = {
    title: "Offres et Tarifs — Sites web et automatisation IA | Tarn",
    description:
        "5 offres clés en main par Clément Berthier, développeur freelance à Castres et Mazamet (Tarn) : Pack One Page (299€), Pack Artisan (790€), Pack TPE/PME (990€), Automatisation IA, Sur Mesure.",
    alternates: {
        canonical: "/offres",
    },
    openGraph: {
        title: "Offres et Tarifs — Clément Berthier Développeur",
        description:
            "Cinq formules pensées pour les indépendants, artisans et TPE/PME. Du site one page à l'application sur mesure, en passant par l'automatisation IA.",
        url: "/offres",
    },
};

const SITE_URL = "https://www.clementberthierdeveloppeur.fr";

const offersSchema = {
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
                    name: "Offres",
                    item: `${SITE_URL}/offres`,
                },
            ],
        },
        {
            "@type": "OfferCatalog",
            name: "Offres Clément Berthier Développeur",
            url: `${SITE_URL}/offres`,
            itemListElement: packs
                .filter((pack) => typeof pack.price === "number")
                .map((pack) => ({
                    "@type": "Offer",
                    name: pack.name,
                    description: pack.tagline,
                    price: pack.price,
                    priceCurrency: "EUR",
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        price: pack.price,
                        priceCurrency: "EUR",
                        valueAddedTaxIncluded: false,
                    },
                    url: `${SITE_URL}/offres#${pack.id}`,
                    seller: {
                        "@type": "LocalBusiness",
                        "@id": `${SITE_URL}/#business`,
                    },
                })),
        },
    ],
};

export default function OffersPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(offersSchema),
                }}
            />
            <Offers />
        </>
    );
}
