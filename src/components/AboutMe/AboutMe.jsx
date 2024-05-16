import Waves from "../Waves/Waves.jsx";
import "./aboutMe.css";

export default function AboutMe() {
    return (
        <>
            <div className="aboutMe" id="aboutMe">
                <div className="description_container">
                    <img
                        className="logo"
                        src="../../src/assets/images/user-scan.svg"
                        alt="logo scan"
                    />
                    <div className="text_container">
                        <h2 className="description_title">Qui somme nous?</h2>

                        <p className="description">
                            Clément Berthier Développeur est votre solution pour
                            la création de vos projets web, offrant des services
                            sur mesure en développement web et application. Nous
                            vous accompagnons tout au long de votre projet en
                            mettant à votre disposition notre expertise et notre
                            passion afin de transformer vos idées en réalité.
                        </p>
                    </div>
                </div>
                <div className="aboutMe_container">
                    <img
                        className="logo"
                        src="../../src/assets/images/code.svg"
                        alt="logo </>"
                    />
                    <div className="info_container">
                        <h2 className="title">Nos technonogies principales:</h2>
                        <div className="tech_container">
                            <div className="firstSection">
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/HTML5.png"
                                    alt="HTML logo"
                                />
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/css3.svg"
                                    alt="CSS logo"
                                />
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/JavaScript.png"
                                    alt="Javascript logo"
                                />
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/TypeScript.png"
                                    alt="Typescript logo"
                                />
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/react.png"
                                    alt="React logo"
                                />
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/graphQL.png"
                                    alt="GraphQl logo"
                                />
                            </div>
                            <div className="secondSection">
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/postgre.png"
                                    alt="PostgreSQL logo"
                                />
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/node.svg"
                                    alt="Node.JS logo"
                                />
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/github.png"
                                    alt="Git logo"
                                />
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/Socket-io.png"
                                    alt="Socket.IO logo"
                                />
                                <img
                                    className="techLogo"
                                    src="../../src/assets/images/techLogo/Vite.png"
                                    alt="Vite logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Waves />
        </>
    );
}
