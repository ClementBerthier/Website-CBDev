import { useState } from "react";
import "./services.css";

export default function Service() {
    const [firstBoxIsHovered, setfirstBoxIsHovered] = useState(false);
    const [secondBoxIsHovered, setsecondBoxIsHovered] = useState(false);
    const [thirdBoxIsHovered, setthirdBoxIsHovered] = useState(false);
    const [fourthBoxIsHovered, setfourthBoxIsHovered] = useState(false);

    const handleMouseEnter = (event) => {
        if (event.target.id === "firstBox") {
            setfirstBoxIsHovered(true);
        }
        if (event.target.id === "secondBox") {
            setsecondBoxIsHovered(true);
        }

        if (event.target.id === "thirdBox") {
            setthirdBoxIsHovered(true);
        }

        if (event.target.id === "fourthBox") {
            setfourthBoxIsHovered(true);
        }
    };

    const handleMouseLeave = (event) => {
        if (event.target.id === "firstBox") {
            setfirstBoxIsHovered(false);
        }
        if (event.target.id === "secondBox") {
            setsecondBoxIsHovered(false);
        }

        if (event.target.id === "thirdBox") {
            setthirdBoxIsHovered(false);
        }

        if (event.target.id === "fourthBox") {
            setfourthBoxIsHovered(false);
        }
    };

    return (
        <div className="services_container">
            <h2 className="title">Nos services</h2>
            <div className="services">
                <div
                    className="services_box"
                    id="firstBox"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {firstBoxIsHovered ? (
                        <img
                            className="services_logo"
                            src="../../src/assets/images/whiteLaptop.svg"
                            alt="white conception web logo"
                        />
                    ) : (
                        <img
                            className="services_logo"
                            src="../../src/assets/images/laptop-dev-mode.svg"
                            alt="conception web logo"
                        />
                    )}
                    <h2 className="services_title">Conception site web</h2>
                    <p className="services_text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, animi? Rerum iusto odio placeat nihil
                        laborum aut ea fugit natus, id tempora perferendis amet
                        blanditiis accusantium assumenda alias nesciunt quos.
                    </p>
                </div>
                <div
                    className="services_box"
                    id="secondBox"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {secondBoxIsHovered ? (
                        <img
                            className="services_logo"
                            src="../../src/assets/images/whiteDevelopper.svg"
                            alt="white conception appli logo"
                        />
                    ) : (
                        <img
                            className="services_logo"
                            src="../../src/assets/images/application.svg"
                            alt="conception web logo"
                        />
                    )}
                    <h2 className="services_title">
                        Conception application web
                    </h2>
                    <p className="services_text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, animi? Rerum iusto odio placeat nihil
                        laborum aut ea fugit natus, id tempora perferendis amet
                        blanditiis accusantium assumenda alias nesciunt quos.
                    </p>
                </div>
                <div
                    className="services_box"
                    id="thirdBox"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {thirdBoxIsHovered ? (
                        <img
                            className="services_logo"
                            src="../../src/assets/images/whiteTool.svg"
                            alt="white refonte & maintenance logo"
                        />
                    ) : (
                        <img
                            className="services_logo"
                            src="../../src/assets/images/tools.svg"
                            alt="conception web logo"
                        />
                    )}
                    <h2 className="services_title">Refonte & Maintenance</h2>
                    <p className="services_text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, animi? Rerum iusto odio placeat nihil
                        laborum aut ea fugit natus, id tempora perferendis amet
                        blanditiis accusantium assumenda alias nesciunt quos.
                    </p>
                </div>
                <div
                    className="services_box"
                    id="fourthBox"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {fourthBoxIsHovered ? (
                        <img
                            className="services_logo"
                            src="../../src/assets/images/whiteReport.svg"
                            alt="white optimisation SEO logo"
                        />
                    ) : (
                        <img
                            className="services_logo"
                            src="../../src/assets/images/stats-report.svg"
                            alt="conception web logo"
                        />
                    )}
                    <h2 className="services_title">
                        Optimisation du référencement SEO
                    </h2>
                    <p className="services_text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, animi? Rerum iusto odio placeat nihil
                        laborum aut ea fugit natus, id tempora perferendis amet
                        blanditiis accusantium assumenda alias nesciunt quos.
                    </p>
                </div>
            </div>
        </div>
    );
}
