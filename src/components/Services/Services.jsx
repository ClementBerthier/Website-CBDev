import "./Services.css";
import services from "../../assets/services.json";
import { useEffect, useState } from "react";
import Button from "../elements/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

//TODO: faire un montage de l'image du site pour le rendu dans service picture
//TODO: Maintenir l'etat du hover si click sur precedent

export default function Services2() {
    const navigate = useNavigate();
    const [isSite, setIsSite] = useState(true);
    const [isRM, setIsRM] = useState(false);
    const [jsonData, setJsonData] = useState(services.site);
    const [activeSite, setActiveSite] = useState("active");
    const [activeAppli, setActiveAppli] = useState("");
    const [activeEco, setActiveEco] = useState("");
    const [activeRM, setActiveRM] = useState("");
    const [activeSEO, setActiveSEO] = useState("");
    const [dataElement, setDataElement] = useState("");

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
            setDataElement("site");
        }

        window.scrollTo(0, sessionStorage.getItem("scrollPosition"));
    }, []);

    useEffect(() => {
        if (dataElement === "site") {
            setJsonData(services.site);
            setIsSite(true);
            setActiveSite("active");
        } else {
            setIsSite(false);
            setActiveSite("");
        }

        if (dataElement === "application") {
            setJsonData(services.application);
            setActiveAppli("active");
        } else {
            setActiveAppli("");
        }

        if (dataElement === "e_commerce") {
            setJsonData(services.e_commerce);
            setActiveEco("active");
        } else {
            setActiveEco("");
        }

        if (dataElement === "R&M") {
            setJsonData(services.RM);
            setIsRM(true);
            setActiveRM("active");
        } else {
            setIsRM(false);
            setActiveRM("");
        }

        if (dataElement === "SEO") {
            setJsonData(services.SEO);
            setActiveSEO("active");
        } else {
            setActiveSEO("");
        }
    }, [dataElement]);

    const handleClickLink = (e) => {
        const name = e.target.id;
        navigate("/servicesPage", { state: { name: name } });
    };

    return (
        <div className="Services">
            <div className="services_container">
                <h2 className="services_title">
                    Mes services en developpement web
                </h2>
                <div className="services_name_container">
                    <div
                        className={`services_name ${activeSite}`}
                        id="site"
                        onClick={handleClickClass}
                    >
                        Conception de site
                    </div>
                    <div
                        className={`services_name ${activeAppli}`}
                        id="application"
                        onClick={handleClickClass}
                    >
                        Développement d{"'"}application
                    </div>
                    <div
                        className={`services_name ${activeEco}`}
                        id="e_commerce"
                        onClick={handleClickClass}
                    >
                        E-commerce
                    </div>
                    <div
                        className={`services_name ${activeRM}`}
                        id="R&M"
                        onClick={handleClickClass}
                    >
                        Refonte & Maintenance
                    </div>
                    <div
                        className={`services_name ${activeSEO}`}
                        id="SEO"
                        onClick={handleClickClass}
                    >
                        Optimisation SEO
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

                        {isSite ? (
                            <p className="text">
                                <span id="site" onClick={handleClickLink}>
                                    {jsonData.firstSpan}
                                </span>
                                ,{" "}
                                <span id="blog" onClick={handleClickLink}>
                                    {jsonData.secondSpan}
                                </span>
                                ,{" "}
                                <span id="portfolio" onClick={handleClickLink}>
                                    {jsonData.thirdSpan}
                                </span>
                                ,{" "}
                                <span id="CV" onClick={handleClickLink}>
                                    {jsonData.fourthSpan}
                                </span>
                                ,{" "}
                                <span id="evenement" onClick={handleClickLink}>
                                    {jsonData.fifthSpan}
                                </span>{" "}
                                {jsonData.description}
                            </p>
                        ) : (
                            <p className="text">{jsonData.description}</p>
                        )}

                        <Button
                            text="+"
                            id={jsonData.id}
                            name={jsonData.name}
                            type="button"
                        ></Button>
                    </div>
                    {isRM ? (
                        <div className="description_picture_container">
                            <div className="picture_container">
                                <img
                                    className="oldPicture"
                                    src={jsonData.oldPicture}
                                    alt="ancien site"
                                />
                            </div>
                            <div className="picture_container--2">
                                <img
                                    className="newPicture"
                                    src={jsonData.newPicture}
                                    alt="nouveau site"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="description_picture_container">
                            <img
                                className="picture"
                                src={jsonData.picture}
                                alt="picture description service"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
