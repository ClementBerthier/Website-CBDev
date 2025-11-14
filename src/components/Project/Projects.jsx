import Footer from "../Footer/Footer.jsx";
import Headers from "../Header/Header.jsx";

import "./Projects.css";
import projectsList from "../../assets/projectsList.json";
import { useState } from "react";

export default function Projects() {
    const allCategories = projectsList.map((project) => project.category);
    const uniqueCategories = [...new Set(allCategories)];

    const allYears = projectsList.map((project) => project.year);
    const uniqueYears = [...new Set(allYears)];

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);

    const handleCategoryClick = (category) => {
        setSelectedCategories(
            (prev) =>
                prev.includes(category)
                    ? prev.filter((c) => c !== category) // déjà sélectionnée → on enlève
                    : [...prev, category] // pas encore → on ajoute
        );
    };

    const handleYearClick = (year) => {
        setSelectedYears(
            year === "all" ? [] : [year] // "all" réinitialise la sélection
        );
    };
    console.log("selectedYears:", selectedYears);

    const filteredProjects = projectsList.filter((project) => {
        // Si aucune catégorie n'est sélectionnée → ça match tout
        const matchCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(project.category);

        // Si aucune année n'est sélectionnée → ça match tout
        const matchYear =
            selectedYears.length === 0 || selectedYears.includes(project.year);

        // On garde le projet seulement si les deux conditions sont vraies
        return matchCategory && matchYear;
    });
    return (
        <>
            <Headers />
            <div className="Projects">
                <section className="projects-menu">
                    <h2 className="menu-title">Mes Projets</h2>
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
                        >
                            <div className="project-picture">
                                <img src={project.image} alt="" />
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
                                        Voir le site
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
        </>
    );
}
