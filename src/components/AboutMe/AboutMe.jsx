import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./aboutMe.css";

export default function AboutMe() {
    const slideSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
    };
    return (
        <>
            <div className="aboutMe" id="aboutMe">
                <h1 className="aboutMe_title">À propos de nous</h1>
                <div className="description_container">
                    <img
                        className="logo"
                        src="../../src/assets/images/user-scan.svg"
                        alt="logo scan"
                    />
                    <div className="text_container">
                        <h2 className="description_title">Qui sommes nous?</h2>

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
                <Slider {...slideSettings} className="slider">
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/HTML5.png"
                            alt="HTML5 logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/css3.svg"
                            alt="css3 logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/JavaScript.png"
                            alt="JavaScript logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/typescript.svg"
                            alt="TypeScript logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/react.png"
                            alt="react logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/node.svg"
                            alt="node.JS logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/postgre.png"
                            alt="postgreSQL logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/graphQL.png"
                            alt="graphQL logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/github.png"
                            alt="github logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/Socket-io.png"
                            alt="socketIO logo"
                        />
                    </div>
                    <div className="slide_logo_container">
                        <img
                            className="slide_logo"
                            src="../../src/assets/images/techLogo/Vite.png"
                            alt="vite logo"
                        />
                    </div>
                </Slider>
                <div className="whiteboard"></div>
            </div>
        </>
    );
}
