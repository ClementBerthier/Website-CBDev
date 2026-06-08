import Projects from "@/components/Projects/Projects";
import projectsList from "@/data/projectsList.json";

const SITE_URL = "https://www.clementberthierdeveloppeur.fr";

export const metadata = {
    title: "Mes Réalisations — Sites web, applications & projets IA",
    description:
        "Portfolio de Clément Berthier, développeur web freelance à Castres et Mazamet (Tarn). Sites vitrines, e-commerce, applications web sur mesure et solutions d'automatisation IA pour TPE/PME.",
    alternates: {
        canonical: "/projets",
    },
    openGraph: {
        title: "Mes Réalisations — Sites web, applications & projets IA",
        description:
            "Portfolio de Clément Berthier, développeur web freelance à Castres et Mazamet (Tarn). Sites vitrines, applications web sur mesure et automatisation IA.",
        url: "/projets",
    },
};

const projectsSchema = {
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
                    name: "Projets",
                    item: `${SITE_URL}/projets`,
                },
            ],
        },
        {
            "@type": "CollectionPage",
            url: `${SITE_URL}/projets`,
            name: "Réalisations Clément Berthier Développeur",
            description:
                "Portfolio des projets web et automatisation IA réalisés par Clément Berthier, développeur freelance à Castres et Mazamet (Tarn).",
            mainEntity: {
                "@type": "ItemList",
                itemListElement: projectsList.map((project, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    item: {
                        "@type": "CreativeWork",
                        name: project.title,
                        description: project.blurb,
                        url: project.link,
                        image: `${SITE_URL}${project.image}`,
                        dateCreated: project.year,
                        author: {
                            "@type": "Person",
                            "@id": `${SITE_URL}/#person`,
                        },
                    },
                })),
            },
        },
    ],
};

export default function ProjectsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(projectsSchema),
                }}
            />
            <Projects />
        </>
    );
}
