import "./Technologies.css";
import technologiesData from "../../assets/technologies.json";
import { useState } from "react";

export default function Technologies() {
    const [active, setActive] = useState("active");
    const [logoClicked, setLogoClicked] = useState(1);

    const [currentTechnology, setCurrentTechnology] = useState({
        id: "",
        tag: "",
        name: "",
        path: "",
        url: "",
        description: "",
    });

    const handleClickLogo = (e) => {
        const id = e.target.id;
        setLogoClicked(Number(id));

        const technologyClicked = technologiesData.find(
            (technology) => technology.id === Number(id)
        );

        setCurrentTechnology({ ...technologyClicked });
    };

    console.log(currentTechnology);

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
                                <img
                                    className="description_logo_human"
                                    src={currentTechnology.url}
                                    alt="logo human version"
                                />
                            </div>
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
