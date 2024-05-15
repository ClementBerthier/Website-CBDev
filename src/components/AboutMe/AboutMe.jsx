import "./aboutMe.css";

export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="description_container">
                <h2 className="description_title">Qui somme nous?</h2>

                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem ipsum doloremque error fugit id voluptatem illum? Quam
                    provident veniam accusantium a cupiditate culpa excepturi,
                    laudantium voluptate officiis magnam nihil quia.
                </p>
            </div>
            <div className="aboutMe_container">
                <h2 className="title">Notre principales technonogies</h2>
                <div className="tech_container">
                    <div className="firstSection">
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/HTML5.png"
                            alt="HTML logo"
                        />
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/css3.svg"
                            alt="CSS logo"
                        />
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/JavaScript.png"
                            alt="Javascript logo"
                        />
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/TypeScript.png"
                            alt="Typescript logo"
                        />
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/react.png"
                            alt="React logo"
                        />
                    </div>
                    <div className="secondSection">
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/postgre.png"
                            alt="PostgreSQL logo"
                        />
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/node.svg"
                            alt="Node.JS logo"
                        />
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/graphQL.png"
                            alt="GraphQl logo"
                        />
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/github.png"
                            alt="Git logo"
                        />
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/Socket-io.png"
                            alt="Socket.IO logo"
                        />
                        <img
                            className="techLogo"
                            src="../../src/assets/images/techLogo/Vite.png"
                            alt="Vite logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
