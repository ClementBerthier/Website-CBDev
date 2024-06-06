import { useNavigate } from "react-router-dom";
import "./services.css";

//TODO: mettre le vrai texte dans les service box

export default function Service() {
    const navigation = useNavigate();

    const handleClick = (e) => {
        const id = e.target.id;
        navigation("/servicesPage", { state: { id } });
    };
    return (
        <div className="services_container">
            <h2 className="title">Nos services</h2>
            <div className="services">
                <div
                    className="services_box topLeft"
                    id="ConceptionSite"
                    onClick={handleClick}
                >
                    <img
                        className="services_logo"
                        src="/images/laptop-dev-mode.svg"
                        alt="conception web logo"
                        id="ConceptionSite"
                        onClick={handleClick}
                    />
                    <h2
                        className="services_title"
                        id="ConceptionSite"
                        onClick={handleClick}
                    >
                        Conception de sites web
                    </h2>
                    <p
                        className="services_text"
                        id="ConceptionSite"
                        onClick={handleClick}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, animi? Rerum iusto odio placeat nihil
                        laborum aut ea fugit natus, id tempora perferendis amet
                        blanditiis accusantium assumenda alias nesciunt quos.
                    </p>
                </div>
                <div
                    className="services_box topRight"
                    id="ConceptionApp"
                    onClick={handleClick}
                >
                    <img
                        className="services_logo"
                        src="/images/application.svg"
                        alt="conception web logo"
                        id="ConceptionApp"
                        onClick={handleClick}
                    />
                    <h2
                        className="services_title"
                        id="ConceptionApp"
                        onClick={handleClick}
                    >
                        Conception d{"'"}applications web
                    </h2>
                    <p
                        className="services_text"
                        id="ConceptionApp"
                        onClick={handleClick}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, animi? Rerum iusto odio placeat nihil
                        laborum aut ea fugit natus, id tempora perferendis amet
                        blanditiis accusantium assumenda alias nesciunt quos.
                    </p>
                </div>
                <div
                    className="services_box bottomLeft"
                    id="Refonte"
                    onClick={handleClick}
                >
                    <img
                        className="services_logo"
                        src="/images/tools.svg"
                        alt="conception web logo"
                        id="Refonte"
                        onClick={handleClick}
                    />
                    <h2
                        className="services_title"
                        id="Refonte"
                        onClick={handleClick}
                    >
                        Refonte & Maintenance
                    </h2>
                    <p className="services_text" id="Refonte">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, animi? Rerum iusto odio placeat nihil
                        laborum aut ea fugit natus, id tempora perferendis amet
                        blanditiis accusantium assumenda alias nesciunt quos.
                    </p>
                </div>
                <div
                    className="services_box bottomRight"
                    id="SEO"
                    onClick={handleClick}
                >
                    <img
                        className="services_logo"
                        src="/images/stats-report.svg"
                        alt="conception web logo"
                        id="SEO"
                        onClick={handleClick}
                    />
                    <h2
                        className="services_title"
                        id="SEO"
                        onClick={handleClick}
                    >
                        Optimisation du référencement SEO
                    </h2>
                    <p className="services_text" id="SEO" onClick={handleClick}>
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
