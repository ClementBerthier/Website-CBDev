import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import legalMention from "../../assets/legalMention.json";
import "./LegalMention.css";
import { useState } from "react";
import { Dropdown, Popup } from "semantic-ui-react";

//TODO: check the bug of the dropdown, the choice is not the same on each dropdown when we change the value

export default function LegalMention() {
    const [jsonData, setJsonData] = useState(legalMention[0]);

    const option = [
        { key: "Mentions légales", text: "Mentions légales", value: "ML" },
        { key: "CGU", text: "CGU", value: "CGU" },
        { key: "CGV", text: "CGV", value: "CGV" },
        {
            key: "Politique de confidentienlité",
            text: "Politique de confidentialité",
            value: "PC",
        },
    ];

    const handleChangeArticleSelector = (e, value) => {
        if (value.value === "ML") {
            setJsonData(legalMention[0]);
        } else if (value.value === "CGU") {
            setJsonData(legalMention[1]);
        } else if (value.value === "CGV") {
            setJsonData(legalMention[2]);
        } else if (value.value === "PC") {
            setJsonData(legalMention[3]);
        }
    };
    const handleClickReturnTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <Header />
            <div className="LegalMention">
                <div className="legalMention_banner_title">
                    <h2 className="legalMention_title">{jsonData.title}</h2>
                    <p className="legalMention_little_description">
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
                <div className="legalMention_content_container">
                    <div className="legalMention_content">
                        <ul className="articles_list">
                            {jsonData.articlesList.map((article, index) => (
                                <li className="article_list_item" key={index}>
                                    <h3 className="item_title">
                                        {article.title}
                                    </h3>
                                    <p className="item_text">{article.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bottomFooterPage">
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

            <Footer />
        </>
    );
}
