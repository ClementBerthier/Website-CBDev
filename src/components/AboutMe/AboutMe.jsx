import { Popup } from "semantic-ui-react";
import Waves from "../Waves/Waves.jsx";
import "./aboutMe.css";

export default function AboutMe() {
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
                        <h2 className="description_title">Qui somme nous?</h2>

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
                <div className="aboutMe_container">
                    <img
                        className="logo"
                        src="../../src/assets/images/code.svg"
                        alt="logo </>"
                    />
                    <div className="info_container">
                        <h2 className="title">Nos technonogies principales:</h2>
                        <div className="tech_container">
                            <div className="firstSection">
                                <Popup
                                    trigger={
                                        <a
                                            href="https://developer.mozilla.org/fr/docs/Web/HTML"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/HTML5.png"
                                                alt="HTML logo"
                                            />
                                        </a>
                                    }
                                    content="HTML5"
                                    inverted
                                ></Popup>
                                <Popup
                                    trigger={
                                        <a
                                            href="https://developer.mozilla.org/fr/docs/Web/CSS"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/css3.svg"
                                                alt="CSS logo"
                                            />
                                        </a>
                                    }
                                    content="CSS3"
                                    inverted
                                ></Popup>
                                <Popup
                                    trigger={
                                        <a
                                            href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/JavaScript.png"
                                                alt="Javascript logo"
                                            />
                                        </a>
                                    }
                                    content="JavaScript"
                                    inverted
                                ></Popup>
                                <Popup
                                    trigger={
                                        <a
                                            href="https://www.typescriptlang.org/docs/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/TypeScript.png"
                                                alt="Typescript logo"
                                            />
                                        </a>
                                    }
                                    content="TypeScript"
                                    inverted
                                ></Popup>
                                <Popup
                                    trigger={
                                        <a
                                            href="https://react.dev/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/react.png"
                                                alt="React logo"
                                            />
                                        </a>
                                    }
                                    content="React.JS"
                                    inverted
                                ></Popup>
                                <Popup
                                    trigger={
                                        <a
                                            href="https://graphql.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/graphQL.png"
                                                alt="GraphQl logo"
                                            />
                                        </a>
                                    }
                                    content="GraphQL"
                                    inverted
                                ></Popup>
                            </div>
                            <div className="secondSection">
                                <Popup
                                    trigger={
                                        <a
                                            href="https://www.postgresql.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/postgre.png"
                                                alt="PostgreSQL logo"
                                            />
                                        </a>
                                    }
                                    content="PostgreSQL"
                                    inverted
                                ></Popup>
                                <Popup
                                    trigger={
                                        <a
                                            href="https://nodejs.org/en"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/node.svg"
                                                alt="Node.JS logo"
                                            />
                                        </a>
                                    }
                                    content="Node.JS"
                                    inverted
                                ></Popup>
                                <Popup
                                    trigger={
                                        <a
                                            href="https://github.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/github.png"
                                                alt="Git logo"
                                            />
                                        </a>
                                    }
                                    content="GitHub"
                                    inverted
                                ></Popup>
                                <Popup
                                    trigger={
                                        <a
                                            href="https://socket.io/fr/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/Socket-io.png"
                                                alt="Socket.IO logo"
                                            />
                                        </a>
                                    }
                                    content="Socket.IO"
                                    inverted
                                ></Popup>
                                <Popup
                                    trigger={
                                        <a
                                            href="https://vitejs.dev/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="techLogo"
                                                src="../../src/assets/images/techLogo/Vite.png"
                                                alt="Vite logo"
                                            />
                                        </a>
                                    }
                                    content="Vite"
                                    inverted
                                ></Popup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Waves />
        </>
    );
}
