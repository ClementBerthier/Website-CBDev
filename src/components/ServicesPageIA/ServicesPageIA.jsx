import "./ServicesPageIA.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Button from "../elements/Button/Button.jsx";
import article from "../../assets/articlesIA.json";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dropdown, Popup } from "semantic-ui-react";

export default function ServicesPageIA() {
    const [jsonData, setJsonData] = useState(null);
    const data = useLocation();
    const [dataName, setDataName] = useState(data.state.name);

    console.log("dataname", dataName);
    useEffect(() => {
        if (dataName) {
            if (dataName === "automation_IA") {
                setJsonData(article[0]);
            } else if (dataName === "Agent IA") {
                setJsonData(article[1]);
            } else if (dataName === "Accompagnement IA") {
                setJsonData(article[2]);
            } else if (dataName === "GEO") {
                setJsonData(article[3]);
            }
        }
    }, [dataName]);

    const option = [
        {
            key: "automation_IA",
            text: "Automatisation IA",
            value: "automation_IA",
        },
        { key: "agent_IA", text: "Agent IA", value: "Agent IA" },
        {
            key: "support_IA",
            text: "Accompagnement IA",
            value: "Accompagnement IA",
        },
        { key: "GEO", text: "GEO", value: "GEO" },
    ];

    const handleChangeArticleSelector = (e, value) => {
        setDataName(value.value);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleClickReturnTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <Header />
            {jsonData ? (
                <>
                    <div className="ServicePageIA">
                        <div className="servicePage_banner_title">
                            <h2 className="service_title">{jsonData.title}</h2>
                            <span className="tagService">{jsonData.tag}</span>
                            <p className="service_little_description">
                                {jsonData.description}
                            </p>
                            <div>
                                <Dropdown
                                    className="articleSelector"
                                    placeholder={jsonData.title}
                                    options={option}
                                    onChange={handleChangeArticleSelector}
                                    selection
                                />
                            </div>
                        </div>
                        <div className="servicePage_content_container">
                            <div className="servicePage_content">
                                <div className="introduction">
                                    <h2 className="introduction_title">
                                        Introduction
                                    </h2>
                                    <p className="introduction_text">
                                        {jsonData.introText}
                                    </p>
                                </div>
                                <div className="description">
                                    <h2 className="description_service_title">
                                        {jsonData.descriptionTitle}
                                    </h2>
                                    <p className="description_service_text">
                                        {jsonData.descriptionText}
                                    </p>
                                </div>
                                <div className="feature">
                                    <h2 className="feature_title">
                                        {jsonData.featureTitle}
                                    </h2>

                                    <p className="feature_text">
                                        {jsonData.featureText}
                                    </p>

                                    <ul className="feature_list">
                                        {jsonData.featureList.map(
                                            (feature, index) => (
                                                <li
                                                    className="feature_list_item"
                                                    key={index}
                                                >
                                                    <h3 className="item_title">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="item_text">
                                                        {feature.text}
                                                    </p>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="example">
                                    <h3 className="example_title">
                                        {jsonData.exampleTitle}
                                    </h3>
                                    <p className="example_text">
                                        {jsonData.exampleText}
                                    </p>
                                    {jsonData.creditName !== null ? (
                                        <>
                                            <img
                                                className="example_video"
                                                autoPlay
                                                src={jsonData.videoSRC}
                                            />
                                            <span className="credit">
                                                Crédit images:{" "}
                                                {jsonData.creditName}
                                                <a href={jsonData.link}>
                                                    Lien
                                                </a>{" "}
                                            </span>{" "}
                                        </>
                                    ) : null}
                                </div>
                                <div className="conclusion">
                                    <h2 className="conclusion_title">
                                        Conclusion
                                    </h2>
                                    <p className="conclusion_text">
                                        {jsonData.conclusionText}
                                    </p>
                                </div>
                                <div className="bottomServicePage">
                                    <Dropdown
                                        className="articleSelector"
                                        placeholder={jsonData.title}
                                        options={option}
                                        onChange={handleChangeArticleSelector}
                                        selection
                                    />
                                    <Popup
                                        content="Retour haut de page"
                                        size="huge"
                                        trigger={
                                            <img
                                                className="returnTop"
                                                src="/images/arrow-down.svg"
                                                alt="flèche retour top page"
                                                onClick={handleClickReturnTop}
                                            />
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="promotionnal_banner_container">
                        <div className="promotionnal_banner ">
                            <h2 className="promotionnal_banner_title">
                                {jsonData.promotionnalTitle}
                            </h2>
                            <p className="promotionnal_banner_text">
                                N{"'"}hésitez pas a me contacter.
                            </p>
                            <div className="button_contact">
                                <Button text="Contact" id="contact" />
                            </div>
                        </div>
                    </div>
                </>
            ) : null}

            <Footer />
        </>
    );
}
