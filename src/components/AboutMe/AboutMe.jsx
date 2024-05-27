import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./aboutMe.css";

export default function AboutMe() {
    const slideSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 5000,
        slidesToShow: 4,
        cssEase: "linear",
    };

    return (
        <>
            <div className="aboutMe" id="aboutMe">
                <h2 className="aboutMe_title">À propos de nous</h2>
                <div className="banner_container">
                    <div className="description_container">
                        <img
                            className="logo"
                            src="/images/user-scan.svg"
                            alt="logo scan"
                        />
                        <div className="text_container">
                            <h2 className="description_title">Qui suis-je?</h2>

                            <p className="description">
                                Je m{"'"}appelle Clément Berthier, je suis un
                                développeur spécialisé dans la création de
                                projets web sur mesure. Passioné par mon métier,
                                je travaille autant coté <span>Frontend</span>{" "}
                                que <span>Backend</span> pour vous offrir des
                                solutions complètes et adaptées à vos besoins.
                            </p>
                        </div>
                    </div>
                    <div className="description_container">
                        <img
                            className="logo"
                            src="/images/code.svg"
                            alt="logo scan"
                        />
                        <div className="text_container">
                            <h2 className="description_title">
                                Que faisons nous?
                            </h2>

                            <p className="description">
                                Clément Berthier Développeur est votre solution
                                pour la création de vos projets web. En tant que
                                professionnel indépendant, je mets à votre
                                disposition mon expertise et mon expérience dans
                                le développement web et d{"'"}applications. Je m
                                {"'"}engage à vous accompagner à chaque étape de
                                votre projet, en mettant mon savoir-faire et ma
                                passion au service de vos idées pour les
                                transformer en réalité.
                            </p>
                        </div>
                    </div>
                </div>
                <Slider {...slideSettings} className="slider">
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/HTML5.png"
                            alt="HTML5 logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/css3.svg"
                            alt="css3 logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/JavaScript.png"
                            alt="JavaScript logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/typescript.svg"
                            alt="TypeScript logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/react.png"
                            alt="react logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/node.svg"
                            alt="node.JS logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/postgre.png"
                            alt="postgreSQL logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/graphQL.png"
                            alt="graphQL logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/github.png"
                            alt="github logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/Socket-io.png"
                            alt="socketIO logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="/images/techLogo/Vite.png"
                            alt="vite logo"
                        />
                    </div>
                </Slider>
                <div className="whiteboard"></div>
            </div>
        </>
    );
}
