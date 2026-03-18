import Footer from "../Footer/Footer.jsx";
import Headers from "../Header/Header.jsx";

import "./Projects.css";
import projectsList from "../../assets/projectsList.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Projects() {
    const allCategories = projectsList.map((project) => project.category);
    const uniqueCategories = [...new Set(allCategories)];

    const allYears = projectsList.map((project) => project.year);
    const uniqueYears = [...new Set(allYears)];

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategories(
            (prev) =>
                prev.includes(category)
                    ? prev.filter((c) => c !== category)
                    : [...prev, category]
        );
    };

    const handleYearClick = (year) => {
        setSelectedYears(year === "all" ? [] : [year]);
    };

    const [searchTerm, setSearchTerm] = useState("");
    const search = searchTerm.toLowerCase().trim();

    const filteredProjects = projectsList.filter((project) => {
        const matchCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(project.category);

        const matchYear =
            selectedYears.length === 0 || selectedYears.includes(project.year);

        const matchSearch =
            search === "" ||
            project.title.toLowerCase().includes(search) ||
            project.description.toLowerCase().includes(search) ||
            project.tech.some((techItem) =>
                techItem.toLowerCase().includes(search)
            );

        return matchCategory && matchYear && matchSearch;
    });

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

    const hasCollaborators =
        selectedProject &&
        selectedProject.collaborators.some((c) => c !== "");

    return (
        <>
            <Helmet>
                <title>Mes Réalisations Web & IA | Clément Berthier Développeur</title>
                <meta
                    name="description"
                    content="Découvrez mes réalisations en développement web et automatisation IA : sites vitrines, applications web et solutions IA sur mesure."
                />
                <link
                    rel="canonical"
                    href="https://www.clementberthierdeveloppeur.fr/projets"
                />
                <meta property="og:title" content="Mes Réalisations Web & IA | Clément Berthier Développeur" />
                <meta property="og:description" content="Découvrez mes réalisations en développement web et automatisation IA : sites vitrines, applications web et solutions IA sur mesure." />
                <meta property="og:url" content="https://www.clementberthierdeveloppeur.fr/projets" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Accueil",
                                "item": "https://www.clementberthierdeveloppeur.fr/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Projets",
                                "item": "https://www.clementberthierdeveloppeur.fr/projets"
                            }
                        ]
                    })}
                </script>
            </Helmet>
            <Headers />
            <div className="Projects">
                <section className="projects-menu">
                    <h1 className="menu-title">Mes Projets</h1>
                    <div className="containerSearchBar">
                        <p className="menu-description">
                            Découvrez une sélection de projets réalisés, mettant
                            en avant mes compétences en développement web et
                            design.
                        </p>
                        <input
                            className="searchBar"
                            placeholder="Rechercher un projet, une techno..."
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="searchBar">
                        <div className="tabBar">
                            <ul>
                                {uniqueCategories.map((category, index) => (
                                    <li
                                        key={index}
                                        onClick={() =>
                                            handleCategoryClick(category)
                                        }
                                        className={
                                            selectedCategories.includes(
                                                category
                                            )
                                                ? "tabItem tabItem--active"
                                                : "tabItem"
                                        }
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="sort">
                            <div className="sortByYear">
                                <label htmlFor="year">Année:</label>
                                <select
                                    name="year"
                                    id="year"
                                    default="Toutes"
                                    onChange={(e) =>
                                        handleYearClick(e.target.value)
                                    }
                                >
                                    <option value="all">Toutes</option>
                                    {uniqueYears.map((year, index) => (
                                        <option value={year} key={index}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="projects-list">
                    {filteredProjects.map((project) => (
                        <div
                            className="project"
                            key={project.id}
                            id={project.id}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-picture">
                                <img src={project.image} alt={project.title} loading="lazy" />
                            </div>
                            <div className="project-infos">
                                <div className="titleYear">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    <span className="project-year">
                                        {project.year}
                                    </span>
                                </div>
                                <p className="project-blurb">{project.blurb}</p>
                                <div className="techTag">
                                    <ul>
                                        {project.tech.map((techItem, index) => (
                                            <li key={index}>{techItem}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="buttonCategory">
                                    <button className="project-link">
                                        En savoir plus
                                    </button>
                                    <span className="category">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
            <Footer />

            {selectedProject && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Hero image */}
                        <div className="modal-hero">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                            />
                            <div className="modal-hero-overlay">
                                <div className="modal-hero-meta">
                                    <span className="modal-category">
                                        {selectedProject.category}
                                    </span>
                                    <span className="modal-year">
                                        {selectedProject.year}
                                    </span>
                                </div>
                                <h2 className="modal-title">
                                    {selectedProject.title}
                                </h2>
                            </div>
                            <button
                                className="modal-close"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Fermer"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Corps */}
                        <div className="modal-body">
                            <p className="modal-description">
                                {selectedProject.description}
                            </p>

                            <div className="modal-sections">
                                <div className="modal-tech">
                                    <p className="modal-section-label">
                                        Technologies
                                    </p>
                                    <ul>
                                        {selectedProject.tech.map(
                                            (techItem, index) => (
                                                <li key={index}>{techItem}</li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {hasCollaborators && (
                                    <div className="modal-collaborators">
                                        <p className="modal-section-label">
                                            Collaborateurs
                                        </p>
                                        <ul>
                                            {selectedProject.collaborators.map(
                                                (collab, index) =>
                                                    collab !== "" && (
                                                        <li key={index}>
                                                            <a
                                                                href={
                                                                    selectedProject
                                                                        .collaboratorsLinks[
                                                                        index
                                                                    ]
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <span className="collab-icon">↗</span>
                                                                {collab}
                                                            </a>
                                                        </li>
                                                    )
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="modal-footer">
                            {selectedProject.link === "" ? (
                                <Link
                                    className="modal-link"
                                    to="/underConstruction"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Voir le site →
                                </Link>
                            ) : (
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="modal-link"
                                >
                                    Voir le site →
                                </a>
                            )}
                            <button
                                className="modal-btn-close"
                                onClick={() => setSelectedProject(null)}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
