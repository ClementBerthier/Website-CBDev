import About from "@/components/About/About";
import Testimonials from "@/components/Testimonials/Testimonials";
import testimonials from "@/data/testimonials.json";

const SITE_URL = "https://www.clementberthierdeveloppeur.fr";

export const metadata = {
    title: "À propos — Clément Berthier, Développeur Web freelance",
    description:
        "Découvrez le parcours, les compétences et les valeurs de Clément Berthier, développeur web et automatisation IA freelance à Castres et Mazamet (Tarn). Plus de 4 ans d'expérience auprès des TPE/PME et indépendants.",
    alternates: {
        canonical: "/a-propos",
    },
    openGraph: {
        title: "À propos — Clément Berthier, Développeur Web freelance",
        description:
            "Découvrez le parcours, les compétences et les valeurs de Clément Berthier, développeur web et automatisation IA freelance à Castres et Mazamet (Tarn).",
        url: "/a-propos",
    },
};

const ratingsWithValue = testimonials.filter(
    (t) => typeof t.rating === "number"
);
const averageRating =
    ratingsWithValue.length > 0
        ? (
              ratingsWithValue.reduce((sum, t) => sum + t.rating, 0) /
              ratingsWithValue.length
          ).toFixed(1)
        : null;

const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Clément Berthier",
            givenName: "Clément",
            familyName: "Berthier",
            jobTitle: "Développeur Web & Automatisation IA",
            description:
                "Développeur web freelance à Castres et Mazamet (Tarn). Spécialisé dans la création de sites vitrines, e-commerce, applications web et solutions d'automatisation IA pour TPE/PME.",
            url: `${SITE_URL}/a-propos`,
            image: `${SITE_URL}/images/avatar_dev.AVIF`,
            email: "clementberthierdeveloppeur@gmail.com",
            telephone: "+33788453778",
            address: {
                "@type": "PostalAddress",
                streetAddress: "157 chemin de terre albine",
                postalCode: "81660",
                addressLocality: "Pont-de-l'Arn",
                addressRegion: "Occitanie",
                addressCountry: "FR",
            },
            knowsAbout: [
                "Développement Web",
                "React",
                "Next.js",
                "JavaScript",
                "Node.js",
                "PostgreSQL",
                "Docker",
                "Git",
                "GitHub",
                "Automatisation IA",
                "Agents IA",
                "n8n",
                "SEO",
                "Sites vitrines",
                "E-commerce",
            ],
            worksFor: {
                "@type": "LocalBusiness",
                "@id": `${SITE_URL}/#business`,
                name: "Clément Berthier Développeur",
                url: SITE_URL,
            },
            sameAs: [
                "https://www.facebook.com/profile.php?id=61562316966767",
                "https://www.instagram.com/clementberthier_dev/",
                "https://www.linkedin.com/in/cl%C3%A9ment-berthier/",
                "https://github.com/ClementBerthier",
            ],
            mainEntityOfPage: `${SITE_URL}/a-propos`,
        },
        {
            "@type": "LocalBusiness",
            "@id": `${SITE_URL}/#business`,
            ...(averageRating && {
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: averageRating,
                    reviewCount: ratingsWithValue.length,
                    bestRating: 5,
                    worstRating: 1,
                },
            }),
            review: testimonials.map((t) => ({
                "@type": "Review",
                author: {
                    "@type": "Person",
                    name: t.author,
                },
                reviewBody: t.text,
                ...(t.rating && {
                    reviewRating: {
                        "@type": "Rating",
                        ratingValue: t.rating,
                        bestRating: 5,
                        worstRating: 1,
                    },
                }),
                ...(t.date && { datePublished: t.date }),
            })),
        },
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
                    name: "À propos",
                    item: `${SITE_URL}/a-propos`,
                },
            ],
        },
    ],
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema),
                }}
            />
            <About />
            <Testimonials testimonials={testimonials} />
        </>
    );
}
