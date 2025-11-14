import "./ServicesPage.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Button from "../elements/Button/Button.jsx";
import article from "../../assets/articles.json";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dropdown, Popup } from "semantic-ui-react";

export default function ServicesPage() {
    const [jsonData, setJsonData] = useState(null);
    const data = useLocation();
    const [dataName, setDataName] = useState(data.state.name);

    useEffect(() => {
        if (dataName) {
            if (dataName === "site") {
                setJsonData(article[0]);
            } else if (dataName === "blog") {
                setJsonData(article[1]);
            } else if (dataName === "portfolio") {
                setJsonData(article[2]);
            } else if (dataName === "CV") {
                setJsonData(article[3]);
            } else if (dataName === "evenement") {
                setJsonData(article[4]);
            } else if (dataName === "application") {
                setJsonData(article[5]);
            } else if (dataName === "e_commerce") {
                setJsonData(article[6]);
            } else if (dataName === "RM") {
                setJsonData(article[7]);
            } else if (dataName === "SEO") {
                setJsonData(article[8]);
            }
        }
    }, [dataName]);

    const option = [
        { key: "site", text: "Site vitrine", value: "site" },
        { key: "blog", text: "Blog", value: "blog" },
        { key: "portfolio", text: "Portfolio", value: "portfolio" },
        { key: "CV", text: "CV", value: "CV" },
        { key: "evenement", text: "Evenement", value: "evenement" },
        { key: "application", text: "Application", value: "application" },
        { key: "e_commerce", text: "E-commerce", value: "e_commerce" },
        { key: "RM", text: "R&M", value: "RM" },
        { key: "SEO", text: "SEO", value: "SEO" },
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
                    <div className="ServicePage">
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
                                            <video
                                                className="example_video"
                                                autoPlay
                                                loop
                                                playsInline
                                                src={jsonData.videoSRC}
                                                type="video/webm"
                                            />
                                            <span className="credit">
                                                Crédit vidéo:{" "}
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
