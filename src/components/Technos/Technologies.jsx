import "./Technologies.css";
import technologiesData from "../../assets/technologies.json";

export default function Technologies() {
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
                                        className="technologies_list_item"
                                        key={index}
                                        id={technology.id}
                                    >
                                        <img
                                            className="technologies_logo"
                                            src={technology.path}
                                            alt={technology.name}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="technologies_description_container">
                            <span className="description_name">HTML5</span>
                            <span className="description_tag">front/back</span>
                            <div className="description_logo_container">
                                <img
                                    className="description_logo_dev"
                                    src="/images/techLogo/HTML5.png"
                                    alt="technology logo"
                                />
                                <img
                                    className="description_logo_human"
                                    src="/images/techLogo/HTML5.png"
                                    alt="logo human version"
                                />
                            </div>
                            <p className="description_text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Minima officiis similique
                                illum? Quae consequatur distinctio facilis.
                                Libero distinctio deserunt assumenda qui,
                                aspernatur fugit quasi, tempora rem quaerat
                                voluptatum odio cumque. Lorem, ipsum dolor sit a
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
