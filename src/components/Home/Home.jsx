import Header from "../Header/Header";
import Picture from "../../assets/images/HomePage.png";
import "./home.css";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="home" id="home">
                    <div className="first_container">
                        <div className="picture_container">
                            <img
                                className="homePicture"
                                src={Picture}
                                alt="Desk Picture"
                            />
                        </div>
                        <div className="title_container">
                            <h1 className="title">
                                Clément Berthier{" "}
                                <span className="spanColor">Développeur</span>
                            </h1>
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
                    <div className="wave_container">
                        <svg
                            className="waves"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28"
                            preserveAspectRatio="none"
                            shapeRendering="auto"
                        >
                            <defs>
                                <path
                                    id="gentle-wave"
                                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                />
                            </defs>
                            <g className="parallax">
                                <use
                                    href="#gentle-wave"
                                    x="48"
                                    y="0"
                                    fill="rgba(255,255,255,0.7"
                                />
                                <use
                                    href="#gentle-wave"
                                    x="48"
                                    y="3"
                                    fill="rgba(255,255,255,0.5)"
                                />
                                <use
                                    href="#gentle-wave"
                                    x="48"
                                    y="5"
                                    fill="rgba(255,255,255,0.3)"
                                />
                                <use
                                    href="#gentle-wave"
                                    x="48"
                                    y="7"
                                    fill="#fff"
                                />
                            </g>
                        </svg>
                    </div>
                </section>
            </main>
        </>
    );
}
