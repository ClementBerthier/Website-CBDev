import "./services.css";

export default function Service() {
    return (
        <div className="services_container">
            <h2 className="title">Nos services</h2>
            <div className="services">
                <div className="service_box_section">
                    <div className="services_box topLeft" id="firstBox">
                        <img
                            className="services_logo"
                            src="/images/laptop-dev-mode.svg"
                            alt="conception web logo"
                        />
                        <h2 className="services_title">
                            Conception de sites web
                        </h2>
                        <p className="services_text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Fugiat, animi? Rerum iusto odio placeat nihil
                            laborum aut ea fugit natus, id tempora perferendis
                            amet blanditiis accusantium assumenda alias nesciunt
                            quos.
                        </p>
                    </div>
                    <div className="services_box topRight" id="secondBox">
                        <img
                            className="services_logo"
                            src="/images/application.svg"
                            alt="conception web logo"
                        />
                        <h2 className="services_title">
                            Conception d{"'"}applications web
                        </h2>
                        <p className="services_text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Fugiat, animi? Rerum iusto odio placeat nihil
                            laborum aut ea fugit natus, id tempora perferendis
                            amet blanditiis accusantium assumenda alias nesciunt
                            quos.
                        </p>
                    </div>
                </div>
                <div className="service_box_section">
                    <div className="services_box bottomLeft" id="thirdBox">
                        <img
                            className="services_logo"
                            src="/images/tools.svg"
                            alt="conception web logo"
                        />
                        <h2 className="services_title">
                            Refonte & Maintenance
                        </h2>
                        <p className="services_text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Fugiat, animi? Rerum iusto odio placeat nihil
                            laborum aut ea fugit natus, id tempora perferendis
                            amet blanditiis accusantium assumenda alias nesciunt
                            quos.
                        </p>
                    </div>
                    <div className="services_box bottomRight" id="fourthBox">
                        <img
                            className="services_logo"
                            src="/images/stats-report.svg"
                            alt="conception web logo"
                        />
                        <h2 className="services_title">
                            Optimisation du référencement SEO
                        </h2>
                        <p className="services_text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Fugiat, animi? Rerum iusto odio placeat nihil
                            laborum aut ea fugit natus, id tempora perferendis
                            amet blanditiis accusantium assumenda alias nesciunt
                            quos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
