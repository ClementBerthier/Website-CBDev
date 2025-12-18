import "./ServicesIA.css";
import services from "../../assets/servicesIA.json";
import { useEffect, useRef, useState } from "react";
import Button from "../elements/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

export default function ServicesIA() {
    const navigate = useNavigate();
    const [jsonData, setJsonData] = useState(services.automation_IA);
    const [activeSite, setActiveSite] = useState("active");
    const [activeAppli, setActiveAppli] = useState("");
    const [activeEco, setActiveEco] = useState("");
    const [activeGEO, setActiveGEO] = useState("");
    const [dataElement, setDataElement] = useState("");

    const divPictureRef = useRef(null);

    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        if (!divPictureRef.current) return;

        const { height, width } = divPictureRef.current.getBoundingClientRect();
        setIsPortrait(height > width);
        console.log("isportrait", isPortrait);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickClass = (e) => {
        sessionStorage.setItem("dataElement", e.target.id);
        setDataElement(e.target.id);

        sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    useEffect(() => {
        const previousDataElement = sessionStorage.getItem("dataElement");
        if (previousDataElement) {
            setDataElement(previousDataElement);
        } else {
            setDataElement("automation_IA");
        }

        window.scrollTo(0, sessionStorage.getItem("scrollPosition"));
    }, []);

    useEffect(() => {
        if (dataElement === "automation_IA") {
            setJsonData(services.automation_IA);
            setActiveSite("active");
        } else {
            setActiveSite("");
        }

        if (dataElement === "agent_IA") {
            setJsonData(services.agent_IA);
            setActiveAppli("active");
        } else {
            setActiveAppli("");
        }

        if (dataElement === "support_IA") {
            setJsonData(services.support_IA);
            setActiveEco("active");
        } else {
            setActiveEco("");
        }

        if (dataElement === "GEO") {
            setJsonData(services.SEO);
            setActiveGEO("active");
        } else {
            setActiveGEO("");
        }
    }, [dataElement]);

    const handleClickTop = (e) => {
        e.preventDefault();
        navigate("/", { state: { id: e.target.id } });
    };

    return (
        <div className="ServicesIA">
            <div className="services_container">
                <h2 className="services_title">
                    Mes services en automatisation IA
                </h2>
                <div className="services_name_container">
                    <div
                        className={`services_name ${activeSite}`}
                        id="automation_IA"
                        onClick={handleClickClass}
                    >
                        Automatisation IA
                    </div>
                    <div
                        className={`services_name ${activeAppli}`}
                        id="agent_IA"
                        onClick={handleClickClass}
                    >
                        Agent IA
                    </div>
                    <div
                        className={`services_name ${activeEco}`}
                        id="support_IA"
                        onClick={handleClickClass}
                    >
                        Accompagnement IA
                    </div>

                    <div
                        className={`services_name ${activeGEO}`}
                        id="GEO"
                        onClick={handleClickClass}
                    >
                        Optimisation GEO
                    </div>
                </div>
                <div className="services_description_container">
                    <div className="description_text_container">
                        <img
                            className="logo"
                            src={jsonData.logo}
                            alt="symbol code"
                        />
                        <h3 className="text_title">{jsonData.title}</h3>

                        <p className="text">{jsonData.description}</p>

                        <Button
                            text="+"
                            id={jsonData.tag}
                            name={jsonData.name}
                            type="button"
                        ></Button>
                    </div>

                    <div
                        className="description_picture_container"
                        ref={divPictureRef}
                    >
                        {isPortrait ? (
                            <img
                                className="picture"
                                src={jsonData.pictureMobile}
                                alt="picture description serviceIA"
                            />
                        ) : (
                            <img
                                className="picture"
                                src={jsonData.picture}
                                alt="picture description serviceIA"
                            />
                        )}
                    </div>
                </div>
                <div className="goToServices">
                    <Button
                        text="Autres services"
                        type="button"
                        id="servicesIA"
                        onClick={handleClickTop}
                    ></Button>
                </div>
            </div>
        </div>
    );
}
