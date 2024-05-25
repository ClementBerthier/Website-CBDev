import "./services.css";

export default function Service() {
    return (
        <div className="services_container">
            <h2 className="title">Nos services</h2>
            <div className="services">
                <div className="services_box" id="firstBox">
                    <img
                        className="services_logo"
                        src="../../src/assets/images/laptop-dev-mode.svg"
                        alt="conception web logo"
                    />
                    <h2 className="services_title">Conception site web</h2>
                    <p className="services_text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, animi? Rerum iusto odio placeat nihil
                        laborum aut ea fugit natus, id tempora perferendis amet
                        blanditiis accusantium assumenda alias nesciunt quos.
                    </p>
                </div>
                <div className="services_box" id="secondBox">
                    <img
                        className="services_logo"
                        src="../../src/assets/images/application.svg"
                        alt="conception web logo"
                    />
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
                <div className="services_box" id="thirdBox">
                    <img
                        className="services_logo"
                        src="../../src/assets/images/tools.svg"
                        alt="conception web logo"
                    />
                    <h2 className="services_title">Refonte & Maintenance</h2>
                    <p className="services_text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, animi? Rerum iusto odio placeat nihil
                        laborum aut ea fugit natus, id tempora perferendis amet
                        blanditiis accusantium assumenda alias nesciunt quos.
                    </p>
                </div>
                <div className="services_box" id="fourthBox">
                    <img
                        className="services_logo"
                        src="../../src/assets/images/stats-report.svg"
                        alt="conception web logo"
                    />
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
