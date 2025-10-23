import Footer from "../Footer/Footer.jsx";
import Headers from "../Header/Header.jsx";
import "./Projects.css";

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
                    <div className="project">
                        <div className="project-picture">
                            <img src="" alt="" />
                        </div>
                        <div className="project-infos">
                            <div className="titleYear">
                                <h3 className="project-title">title</h3>
                                <span className="project-year">year</span>
                            </div>
                            <p className="project-blurb">blurb</p>
                            <div className="techTag">
                                <ul>
                                    <li>tech</li>
                                </ul>
                            </div>
                            <div className="buttonCategory">
                                <button className="project-link">voir</button>
                                <span className="category">categoru</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
