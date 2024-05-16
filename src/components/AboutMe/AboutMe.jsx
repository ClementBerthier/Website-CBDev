import "./aboutMe.css";

export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="whiteBanner"></div>
            <div className="description_container">
                <h2 className="description_title">Qui somme nous?</h2>

                <p className="description">
                    Clément Berthier Développeur est votre solution pour la
                    création de vos projets web, offrant des services sur mesure
                    en développement web et application. Nous vous accompagnons
                    tout au long de votre projet en mettant à votre disposition
                    notre expertise et notre passion afin de transformer vos
                    idées en réalité.
                </p>
            </div>
            <div className="aboutMe_container">
                <h2 className="title">Notre principales technonogies</h2>
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
                            src="../../src/assets/images/techLogo/graphQL.png"
                            alt="GraphQl logo"
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
            <div className="whiteBanner"></div>
        </div>
    );
}
