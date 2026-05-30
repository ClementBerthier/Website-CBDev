"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Button from "../elements/Button/Button.jsx";
import articles from "@/data/articles.json";
import "./ServicesPage.css";

const SECTION_OPTIONS = [
    { value: "site", label: "Site vitrine" },
    { value: "blog", label: "Blog" },
    { value: "portfolio", label: "Portfolio" },
    { value: "CV", label: "CV" },
    { value: "evenement", label: "Evenement" },
    { value: "application", label: "Application" },
    { value: "e_commerce", label: "E-commerce" },
    { value: "RM", label: "R&M" },
    { value: "SEO", label: "SEO" },
];

const sectionToIndex = (section) => {
    const index = SECTION_OPTIONS.findIndex((opt) => opt.value === section);
    return index >= 0 ? index : 0;
};

export default function ServicesPage() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentSection = searchParams.get("section") ?? "site";
    const jsonData = articles[sectionToIndex(currentSection)];

    const handleSectionChange = (e) => {
        const newSection = e.target.value;
        router.push(`${pathname}?section=${newSection}`, { scroll: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleReturnTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="ServicePage">
                <div className="servicePage_banner_title">
                    <h1 className="service_title">{jsonData.title}</h1>
                    <span className="tagService">{jsonData.tag}</span>
                    <p className="service_little_description">
                        {jsonData.description}
                    </p>
                    <div>
                        <label htmlFor="section-top" className="srOnly">
                            Choisir un service
                        </label>
                        <select
                            id="section-top"
                            className="articleSelector"
                            value={currentSection}
                            onChange={handleSectionChange}
                        >
                            {SECTION_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="servicePage_content_container">
                    <div className="servicePage_content">
                        <div className="introduction">
                            <h2 className="introduction_title">Introduction</h2>
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
                                {jsonData.featureList.map((feature, index) => (
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
                                ))}
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
                                        muted
                                        playsInline
                                        src={jsonData.videoSRC}
                                    />
                                    <span className="credit">
                                        Crédit vidéo: {jsonData.creditName}
                                        <a
                                            href={jsonData.link}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            Lien
                                        </a>
                                    </span>
                                </>
                            ) : null}
                        </div>
                        <div className="conclusion">
                            <h2 className="conclusion_title">Conclusion</h2>
                            <p className="conclusion_text">
                                {jsonData.conclusionText}
                            </p>
                        </div>
                        <div className="bottomServicePage">
                            <label htmlFor="section-bottom" className="srOnly">
                                Choisir un service
                            </label>
                            <select
                                id="section-bottom"
                                className="articleSelector"
                                value={currentSection}
                                onChange={handleSectionChange}
                            >
                                {SECTION_OPTIONS.map((opt) => (
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
            </div>
            <div className="promotionnal_banner_container">
                <div className="promotionnal_banner">
                    <h2 className="promotionnal_banner_title">
                        {jsonData.promotionnalTitle}
                    </h2>
                    <p className="promotionnal_banner_text">
                        N{"'"}hésitez pas a me contacter.
                    </p>
                    <div className="button_contact">
                        <Button text="Contact" href="/#contact" />
                    </div>
                </div>
            </div>
        </>
    );
}
