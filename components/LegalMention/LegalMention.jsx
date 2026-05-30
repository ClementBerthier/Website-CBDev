"use client";

import { useState } from "react";
import legalMention from "@/data/legalMention.json";
import "./LegalMention.css";

const OPTIONS = [
    { value: 0, label: "Mentions légales" },
    { value: 1, label: "CGU" },
    { value: 2, label: "CGV" },
    { value: 3, label: "Politique de confidentialité" },
];

export default function LegalMention() {
    const [activeIndex, setActiveIndex] = useState(0);
    const jsonData = legalMention[activeIndex];

    const handleChange = (e) => {
        setActiveIndex(Number(e.target.value));
    };

    const handleReturnTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="LegalMention">
            <div className="legalMention_banner_title">
                <h1 className="legalMention_title">{jsonData.title}</h1>
                <p className="legalMention_little_description">
                    {jsonData.description}
                </p>
                <div>
                    <label htmlFor="article-selector-top" className="srOnly">
                        Choisir un document légal
                    </label>
                    <select
                        id="article-selector-top"
                        className="articleSelector"
                        value={activeIndex}
                        onChange={handleChange}
                    >
                        {OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="legalMention_content_container">
                <div className="legalMention_content">
                    <ul className="articles_list">
                        {jsonData.articlesList.map((article, index) => (
                            <li className="article_list_item" key={index}>
                                <h2 className="item_title">{article.title}</h2>
                                <p className="item_text">{article.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bottomFooterPage">
                    <label htmlFor="article-selector-bottom" className="srOnly">
                        Choisir un document légal
                    </label>
                    <select
                        id="article-selector-bottom"
                        className="articleSelector"
                        value={activeIndex}
                        onChange={handleChange}
                    >
                        {OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <button
                        type="button"
                        className="returnTopButton"
                        onClick={handleReturnTop}
                        title="Retour haut de page"
                        aria-label="Retour haut de page"
                    >
                        <img
                            className="returnTop"
                            src="/images/arrow-down.svg"
                            alt=""
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
