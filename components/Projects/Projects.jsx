"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import projectsList from "@/data/projectsList.json";
import "./Projects.css";

const ALL_CATEGORIES = [...new Set(projectsList.map((p) => p.category))];
const ALL_YEARS = [...new Set(projectsList.map((p) => p.year))];

export default function Projects() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleCategory = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const handleYearChange = (year) => {
        setSelectedYears(year === "all" ? [] : [year]);
    };

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
            project.tech.some((t) => t.toLowerCase().includes(search));
        return matchCategory && matchYear && matchSearch;
    });

    useEffect(() => {
        document.body.style.overflow = selectedProject ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

    const hasCollaborators =
        selectedProject &&
        selectedProject.collaborators.some((c) => c !== "");

    return (
        <>
            <div className="Projects">
                <section className="projects-menu">
                    <h1 className="menu-title">Mes Projets</h1>
                    <div className="containerSearchBar">
                        <p className="menu-description">
                            Découvrez une sélection de projets réalisés,
                            mettant en avant mes compétences en développement
                            web et design.
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
                                {ALL_CATEGORIES.map((category) => (
                                    <li
                                        key={category}
                                        onClick={() =>
                                            toggleCategory(category)
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
                                    onChange={(e) =>
                                        handleYearChange(e.target.value)
                                    }
                                    defaultValue="all"
                                >
                                    <option value="all">Toutes</option>
                                    {ALL_YEARS.map((year) => (
                                        <option value={year} key={year}>
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
                            onClick={() => setSelectedProject(project)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }
                            }}
                        >
                            <div className="project-picture">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                />
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
                                <p className="project-blurb">
                                    {project.blurb}
                                </p>
                                <div className="techTag">
                                    <ul>
                                        {project.tech.map((techItem) => (
                                            <li key={techItem}>{techItem}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="buttonCategory">
                                    <button
                                        type="button"
                                        className="project-link"
                                    >
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

            {selectedProject && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="modal"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                    >
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
                                <h2
                                    id="project-modal-title"
                                    className="modal-title"
                                >
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
                                            (techItem) => (
                                                <li key={techItem}>
                                                    {techItem}
                                                </li>
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
                                                                <span className="collab-icon">
                                                                    ↗
                                                                </span>
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

                        <div className="modal-footer">
                            {selectedProject.link === "" ? (
                                <Link
                                    className="modal-link"
                                    href="/underConstruction"
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
