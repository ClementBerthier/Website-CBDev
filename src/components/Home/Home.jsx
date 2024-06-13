import Header from "../Header/Header.jsx";
import HomePage from "/images/HomePage.jpg";
import SmallHomePage from "/images/SmallHomePage.png";
import Waves from "../Waves/Waves.jsx";
import "./home.css";
import { useEffect, useState } from "react";

export default function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 810);
    const [isLandscape, setIsLandscape] = useState(true);

    const [orientation, setOrientation] = useState(
        window.matchMedia("(orientation: landscape)").matches
            ? "landscape"
            : "portrait"
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 810);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleOrientationChange = () => {
            const newOrientation = window.matchMedia("(orientation: landscape)")
                .matches
                ? "landscape"
                : "portrait";
            setOrientation(newOrientation);
            executeCodeForOrientation(newOrientation);
        };

        const mediaQuery = window.matchMedia("(orientation: landscape)");
        mediaQuery.addEventListener("change", handleOrientationChange);

        // Exécuter le code pour l'orientation initiale au chargement de la page
        executeCodeForOrientation(orientation);

        // Nettoyer l'écouteur d'événements lors du démontage du composant
        return () => {
            mediaQuery.removeEventListener("change", handleOrientationChange);
        };
    }, [orientation]);

    const executeCodeForOrientation = (orientation) => {
        if (orientation === "landscape") {
            setIsLandscape(true);
        } else {
            setIsLandscape(false);
        }
    };

    return (
        <>
            <Header />
            <div>
                <section className="home" id="home">
                    <div className="first_container">
                        <div className="picture_container">
                            {isMobile ? (
                                !isLandscape ? (
                                    <img
                                        className="homePicture"
                                        src={HomePage}
                                        alt="Desk Picture"
                                    />
                                ) : (
                                    <img
                                        className="homePicture"
                                        src={HomePage}
                                        alt="Desk Picture"
                                    />
                                )
                            ) : (
                                <img
                                    className="homePicture"
                                    src={HomePage}
                                    alt="Desk Picture"
                                />
                            )}
                        </div>
                        <div className="title_container">
                            <h2 className="title">
                                Clément Berthier <br />
                                <span className="spanColor">Développeur</span>
                            </h2>
                            <h2 className="subTitle">
                                Votre <span className="spanColor">vision</span>,
                                notre
                                <span className="spanColor"> création</span>
                            </h2>
                        </div>
                    </div>
                    <div className="whitefade"></div>
                    <Waves />
                </section>
            </div>
        </>
    );
}
