import About from "@/components/About/About";

export const metadata = {
    title: "À propos — Clément Berthier, Développeur Web freelance",
    description:
        "Découvrez le parcours, les compétences et les valeurs de Clément Berthier, développeur web et automatisation IA freelance à Mazamet (Tarn). Plus de [X] ans d'expérience auprès des TPE/PME et indépendants.",
    alternates: {
        canonical: "/a-propos",
    },
    openGraph: {
        title: "À propos — Clément Berthier, Développeur Web freelance",
        description:
            "Découvrez le parcours, les compétences et les valeurs de Clément Berthier, développeur web et automatisation IA freelance à Mazamet (Tarn).",
        url: "/a-propos",
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://www.clementberthierdeveloppeur.fr/#person",
            name: "Clément Berthier",
            givenName: "Clément",
            familyName: "Berthier",
            jobTitle: "Développeur Web & Automatisation IA",
            description:
                "Développeur web freelance à Mazamet (Tarn). Spécialisé dans la création de sites vitrines, e-commerce, applications web et solutions d'automatisation IA pour TPE/PME.",
            url: "https://www.clementberthierdeveloppeur.fr/a-propos",
            image: "https://www.clementberthierdeveloppeur.fr/images/avatar_dev.AVIF",
            email: "clementberthierdeveloppeur@gmail.com",
            telephone: "+33788453778",
            address: {
                "@type": "PostalAddress",
                streetAddress: "157 chemin de terre albine",
                postalCode: "81660",
                addressLocality: "Pont-de-l'arn",
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
                "Automatisation IA",
                "Agents IA",
                "n8n",
                "SEO",
                "Sites vitrines",
                "E-commerce",
            ],
            worksFor: {
                "@type": "ProfessionalService",
                "@id": "https://www.clementberthierdeveloppeur.fr/#business",
                name: "Clément Berthier Développeur",
                url: "https://www.clementberthierdeveloppeur.fr",
            },
            sameAs: [
                "https://www.facebook.com/profile.php?id=61562316966767",
                "https://www.instagram.com/clementberthier_dev/",
                "https://www.linkedin.com/in/cl%C3%A9ment-berthier/",
                "https://github.com/ClementBerthier",
            ],
            mainEntityOfPage:
                "https://www.clementberthierdeveloppeur.fr/a-propos",
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
                    name: "À propos",
                    item: "https://www.clementberthierdeveloppeur.fr/a-propos",
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
        </>
    );
}
