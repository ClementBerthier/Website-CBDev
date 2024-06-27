import "./Technologies.css";
import technologiesData from "../../assets/technologies.json";
import { useState } from "react";

export default function Technologies() {
    const active = "active";
    const [logoClicked, setLogoClicked] = useState(1);

    const [currentTechnology, setCurrentTechnology] = useState({
        id: 1,
        tag: "Frontend",
        name: "HTML5",
        path: "/images/techLogo/HTML5.png",
        url: "https://developer.mozilla.org/fr/docs/Web/HTML",
        description:
            "HTML5 est un langage informatique qui permet de créer la structure et le contenu des pages web. Imaginez le comme le squelette de votre site ou chaque os représente un élément de votre page, tels que les titres, les paragraphes, les images, les vidéos, etc...",
    });

    const handleClickLogo = (e) => {
        const id = e.target.id;
        setLogoClicked(Number(id));

        const technologyClicked = technologiesData.find(
            (technology) => technology.id === Number(id)
        );

        setCurrentTechnology({ ...technologyClicked });
    };

    return (
        <div className="Technologies">
            <div className="technologies_container">
                <h2 className="technologies_title">
                    Quelles sont mes technologies ?
                </h2>
                <p className="technologies_subtitle">
                    Voici les principales technologies et langages avec lesquels
                    je travaille et comment ils fonctionnent au sein d{"'"}un
                    site ou d{"'"}une application web
                </p>
                <div className="technologies_board_container">
                    <div className="technologies_context_container">
                        <p className="context">
                            Pour mieux se représenter le fonctionnement de votre
                            site, imaginons ensemble que votre projet web soit
                            en fait un corps humain. Cliquez sur chaque petit
                            logo pour en apprendre un peu plus sur eux.
                        </p>
                    </div>
                    <div className="technologies_board">
                        <div className="technologies_list_container">
                            <ul className="technologies_list">
                                {technologiesData.map((technology, index) => (
                                    <li
                                        className={`technologies_list_item ${
                                            logoClicked === technology.id
                                                ? active
                                                : ""
                                        }`}
                                        key={index}
                                        id={technology.id}
                                        onClick={handleClickLogo}
                                    >
                                        <img
                                            id={technology.id}
                                            className="technologies_logo"
                                            src={technology.path}
                                            alt={technology.name}
                                            onClick={handleClickLogo}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="technologies_description_container">
                            <span className="description_name">
                                {currentTechnology.name}
                            </span>
                            <span className="description_tag">
                                {currentTechnology.tag}
                            </span>
                            <div className="description_logo_container">
                                <img
                                    className="description_logo_dev"
                                    src={currentTechnology.path}
                                    alt="technology logo"
                                />
                            </div>
                            <a
                                href={currentTechnology.url}
                                className="documentation"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Documentation
                            </a>
                            <p className="description_text">
                                {currentTechnology.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
