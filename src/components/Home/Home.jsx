import Header from "../Header/Header.jsx";
import HomePage from "/images/HomePage.png";
import SmallHomePage from "/images/SmallHomePage.png";
import Waves from "../Waves/Waves.jsx";
import "./home.css";
import { useEffect, useState } from "react";

export default function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 810);
    const [isLandscape, setIsLandscape] = useState(true);

    useEffect(() => {
        if (screen.orientation.type.startsWith("landscape")) {
            setIsLandscape(true);
        } else {
            setIsLandscape(false);
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 810);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
                                        src={SmallHomePage}
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
                                Clément Berthier{" "}
                                <span className="spanColor">Développeur</span>
                            </h2>
                            <h2 className="subTitle">
                                Votre <span className="spanColor">vision</span>,
                                notre
                                <span className="spanColor"> création</span>
                            </h2>
                            <p className="description">
                                Développement de site web et d{"'"}application
                                web
                            </p>
                        </div>
                    </div>
                    <Waves />
                </section>
            </div>
        </>
    );
}
