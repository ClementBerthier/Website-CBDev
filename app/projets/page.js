import Projects from "@/components/Projects/Projects";

export const metadata = {
    title: "Mes Réalisations Web & IA",
    description:
        "Découvrez mes réalisations en développement web et automatisation IA : sites vitrines, applications web et solutions IA sur mesure.",
    alternates: {
        canonical: "/projets",
    },
    openGraph: {
        title: "Mes Réalisations Web & IA | Clément Berthier Développeur",
        description:
            "Découvrez mes réalisations en développement web et automatisation IA : sites vitrines, applications web et solutions IA sur mesure.",
        url: "/projets",
    },
};

export default function ProjectsPage() {
    return <Projects />;
}
