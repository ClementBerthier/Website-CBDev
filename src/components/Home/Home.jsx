import Header from "../Header/Header";
import Picture from "../../assets/images/HomePage.png";
import "./home.css";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="home">
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
                            Développement de site web et d{"'"}application web
                        </p>
                    </div>
                    <div className="wave_container">
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                    </div>
                </section>
            </main>
        </>
    );
}
