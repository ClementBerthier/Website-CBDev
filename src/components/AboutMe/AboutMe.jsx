import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./aboutMe.css";

//TODO: mettre les liens de frontend et backend

export default function AboutMe() {
    const slideSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000,
        slidesToShow: 4,
        cssEase: "linear",
    };

    return (
        <>
            <div className="aboutMe" id="aboutMe">
                <div className="aboutMe_container">
                    <h2 className="aboutMe_title">À propos de nous</h2>
                    <div className="banner_container">
                        <div className="description_container firstDescription">
                            <img
                                className="logo"
                                src="/images/user-scan.svg"
                                alt="logo scan"
                            />
                            <div className="text_container">
                                <div className="description ">
                                    <p className="paragraph">
                                        <span className="spanTitle">
                                            Qui suis-je ?
                                        </span>
                                        <br />
                                        <br />
                                        Je m{"'"}appelle Clément Berthier, je
                                        suis un développeur spécialisé dans la
                                        création de projets web sur mesure.
                                        Passioné par mon métier, je travaille
                                        autant côté <span>Frontend</span> que{" "}
                                        <span>Backend</span> pour vous offrir
                                        des solutions complètes et adaptées à
                                        vos besoins.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="description_container secondDescription">
                            <img
                                className="logo"
                                src="/images/code.svg"
                                alt="logo scan"
                            />
                            <div className="text_container">
                                <div className="description ">
                                    <p className="paragraph">
                                        <span className="spanTitle">
                                            Que faisons nous ?
                                        </span>
                                        <br />
                                        <br />
                                        Clément Berthier Développeur est votre
                                        solution pour la création de vos projets
                                        web. En tant que professionnel
                                        indépendant, je mets à votre disposition
                                        mon expertise et mon expérience dans le
                                        développement web et d{"'"}applications.
                                        Je m{"'"}engage à vous accompagner à
                                        chaque étape de votre projet, en mettant
                                        mon savoir-faire et ma passion au
                                        service de vos idées pour les réaliser.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="technoTitle">Nos technologies</h3>
                    <Slider {...slideSettings} className="slider">
                        <div className="slide_logo_container">
                            <a
                                href="https://developer.mozilla.org/fr/docs/Web/HTML"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation HTML5"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/HTML5.png"
                                    alt="HTML5 logo"
                                />
                            </a>
                        </div>
                        <div className="slide_logo_container">
                            <a
                                href="https://developer.mozilla.org/fr/docs/Web/CSS"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation CSS3"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/css3.svg"
                                    alt="css3 logo"
                                />
                            </a>
                        </div>
                        <div className="slide_logo_container">
                            <a
                                href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation JavaScript"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/JavaScript.png"
                                    alt="JavaScript logo"
                                />
                            </a>
                        </div>
                        <div className="slide_logo_container">
                            <a
                                href="https://www.typescriptlang.org/docs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation TypeScript"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/typescript.svg"
                                    alt="TypeScript logo"
                                />
                            </a>
                        </div>
                        <div className="slide_logo_container">
                            <a
                                href="https://fr.react.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation ReactJS"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/react.png"
                                    alt="react logo"
                                />
                            </a>
                        </div>
                        <div className="slide_logo_container">
                            <a
                                href="https://nodejs.org/docs/latest/api/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation NodeJS"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/node.svg"
                                    alt="nodeJS logo"
                                />
                            </a>
                        </div>
                        <div className="slide_logo_container">
                            <a
                                href="https://www.postgresql.org/docs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation postgreSQL"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/postgre.png"
                                    alt="postgreSQL logo"
                                />
                            </a>
                        </div>
                        <div className="slide_logo_container">
                            <a
                                href="https://graphql.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation graphQL"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/graphQL.png"
                                    alt="graphQL logo"
                                />
                            </a>
                        </div>
                        <div className="slide_logo_container">
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation github"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/github.png"
                                    alt="github logo"
                                />
                            </a>
                        </div>
                        <div className="slide_logo_container">
                            <a
                                href="https://socket.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation Socket.io"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/Socket-io.png"
                                    alt="SocketIO logo"
                                />
                            </a>
                        </div>
                        <div className="slide_logo_container">
                            <a
                                href="https://vitejs.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Documentation Vite"
                            >
                                <img
                                    className="slide_logo"
                                    src="/images/techLogo/Vite.png"
                                    alt="Vite logo"
                                />
                            </a>
                        </div>
                    </Slider>
                    <div className="whiteboard"></div>
                </div>
            </div>
        </>
    );
}
