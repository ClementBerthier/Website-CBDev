import "./Services.css";
import services from "../../assets/services.json";
import { useState } from "react";
import Button from "../elements/Button/Button.jsx";

//TODO: ajouter les liens pour les boutons plus d'infos
//TODO: faire un montage de l'image du site pour le rendu dans service picture

export default function Services2() {
    const [isSite, setIsSite] = useState(true);
    const [isRM, setIsRM] = useState(false);
    const [jsonData, setJsonData] = useState(services.site);
    const [activeSite, setActiveSite] = useState("active");
    const [activeAppli, setActiveAppli] = useState("");
    const [activeEco, setActiveEco] = useState("");
    const [activeRM, setActiveRM] = useState("");
    const [activeSEO, setActiveSEO] = useState("");

    const handleClickClass = (e) => {
        const dataElement = e.target.id;

        console.log(e.target.id);
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
                                <span>{jsonData.firstSpan}</span>,{" "}
                                <span>{jsonData.secondSpan}</span>,{" "}
                                <span>{jsonData.thirdSpan}</span>,{" "}
                                <span>{jsonData.fourthSpan}</span>,{" "}
                                <span>{jsonData.fifthSpan}</span>{" "}
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
