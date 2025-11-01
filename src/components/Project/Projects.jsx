import Footer from "../Footer/Footer.jsx";
import Headers from "../Header/Header.jsx";
import "./Projects.css";
import projectsList from "../../assets/projectsList.json";

export default function Projects() {
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
                                <li>Tous</li>
                                <li>Toussdsdsdsd</li>
                            </ul>
                        </div>
                        <div className="sort">
                            <div className="sortByYear">
                                <label htmlFor="year">Année:</label>
                                <select name="year" id="year">
                                    <option value="date">Toutes</option>{" "}
                                </select>
                            </div>
                            <div className="sortOldNew">
                                <label htmlFor="OldNew">Tri:</label>
                                <select name="OldNew" id="OldNew">
                                    <option value="new">Plus Récents</option>{" "}
                                    <option value="old">Plus Ancien</option>{" "}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="projects-list">
                    {projectsList.map((project) => (
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
