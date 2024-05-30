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
                                Clément Berthier <br />
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

/*


.home {
    z-index: 1;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    .first_container {
        position: relative;
        .picture_container {
            .homePicture {
                width: 100%;
                height: 100vh;
                object-fit: cover;
            }
        }
        .title_container {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            .title {
                font-size: 5vw;
                font-weight: 700;
                text-align: center;
                text-shadow: 0 0 3rem rgba(0, 0, 0, 0.398);
            }
            .subTitle {
                font-size: 2.9vw;
                font-weight: 500;
                text-align: center;
                text-shadow: 0 0 1rem rgba(0, 0, 0, 0.398);
                margin: 0.6em 0;
            }
            .description {
                font-size: 1.3vw;
                font-weight: 200;
                text-align: center;
                text-shadow: 0 0 1rem rgba(0, 0, 0, 0.398);
            }
            .spanColor {
                color: #2e5339;
            }
        }
    }
}

*/

/*
.home {
    z-index: 1;
    width: 100vw;
    background-color: rgb(255, 255, 255);
    .first_container {
        position: relative;
        .picture_container {
            .homePicture {
                width: 100%;
                object-fit: cover;
            }
        }
        .title_container {
            width: 100%;
            position: absolute;
            top: 38%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            .title {
                font-size: 4vw;
                font-weight: 700;
                text-align: center;
                margin: 1.5rem 0;

                text-shadow: 0 0 3rem rgba(0, 0, 0, 0.398);
            }
            .subTitle {
                font-size: 2.5vw;
                font-weight: 500;
                text-align: center;
                text-shadow: 0 0 1rem rgba(0, 0, 0, 0.398);
                margin: 0.5em 0;
            }
            .description {
                font-size: 1.2vw;
                font-weight: 200;
                text-align: center;
                text-shadow: 0 0 1rem rgba(0, 0, 0, 0.398);
            }
            .spanColor {
                color: #2e5339;
            }
        }
    }
}


*/

/* 
.home {
    z-index: 1;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    .first_container {
        position: relative;
        .picture_container {
            .homePicture {
                width: 100%;
                height: 100vh;
                object-fit: cover;
            }
        }
        .title_container {
            width: 100%;
            position: absolute;
            top: 32%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            .title {
                font-size: 5vw;
                font-weight: 700;
                text-align: center;
                text-shadow: 0 0 3rem rgba(0, 0, 0, 0.398);
            }
            .subTitle {
                font-size: 2.5vw;
                font-weight: 500;
                text-align: center;
                text-shadow: 0 0 1rem rgba(0, 0, 0, 0.398);
                padding: 3.5em 0 1rem 0;
            }
            .description {
                font-size: 1.3vw;
                font-weight: 200;
                text-align: center;
                text-shadow: 0 0 1rem rgba(0, 0, 0, 0.398);
            }
            .spanColor {
                color: #2e5339;
            }
        }
    }
}

*/
