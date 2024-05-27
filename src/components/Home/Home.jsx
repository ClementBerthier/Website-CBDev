import Header from "../Header/Header";
import Picture from "/images/HomePage.png";
import Waves from "../Waves/Waves.jsx";
import "./home.css";

export default function Home() {
    return (
        <>
            <Header />
            <div>
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
