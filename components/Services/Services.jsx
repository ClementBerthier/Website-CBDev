"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../elements/Button/Button.jsx";
import services from "@/data/services.json";
import "./Services.css";

const SERVICE_TABS = [
    { key: "site", label: "Conception de site" },
    { key: "application", label: "Développement d'application" },
    { key: "e_commerce", label: "E-commerce" },
    { key: "RM", label: "Refonte & Maintenance" },
    { key: "SEO", label: "Optimisation SEO" },
];

const SITE_SUBLINKS = [
    { key: "site", spanField: "firstSpan" },
    { key: "blog", spanField: "secondSpan" },
    { key: "portfolio", spanField: "thirdSpan" },
    { key: "CV", spanField: "fourthSpan" },
    { key: "evenement", spanField: "fifthSpan" },
];

export default function Services() {
    const [activeKey, setActiveKey] = useState("site");
    const jsonData = services[activeKey];
    const isSite = activeKey === "site";
    const isRM = activeKey === "RM";

    return (
        <div className="Services">
            <div className="services_container">
                <h2 className="services_title">
                    Mes services en developpement web
                </h2>
                <div className="services_name_container">
                    {SERVICE_TABS.map((tab) => (
                        <div
                            key={tab.key}
                            className={`services_name ${activeKey === tab.key ? "active" : ""}`}
                            role="button"
                            tabIndex={0}
                            onClick={() => setActiveKey(tab.key)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setActiveKey(tab.key);
                                }
                            }}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>
                <div className="services_description_container">
                    <div className="description_text_container">
                        <img
                            className="logo"
                            src={jsonData.logo}
                            alt="Icône de développement web"
                            loading="lazy"
                        />
                        <h3 className="text_title">{jsonData.title}</h3>

                        {isSite ? (
                            <p className="text">
                                {SITE_SUBLINKS.map((sub, i) => (
                                    <span key={sub.key}>
                                        <Link
                                            href={`/servicesPage?section=${sub.key}`}
                                        >
                                            {jsonData[sub.spanField]}
                                        </Link>
                                        {i < SITE_SUBLINKS.length - 1
                                            ? ", "
                                            : " "}
                                    </span>
                                ))}
                                {jsonData.description}
                            </p>
                        ) : (
                            <p className="text">{jsonData.description}</p>
                        )}

                        <Button
                            text="+"
                            href={`/servicesPage?section=${jsonData.name}`}
                        />
                    </div>
                    {isRM ? (
                        <div className="description_picture_container">
                            <div className="picture_container">
                                <img
                                    className="oldPicture"
                                    src={jsonData.oldPicture}
                                    alt="ancien site"
                                    loading="lazy"
                                />
                            </div>
                            <div className="picture_container--2">
                                <img
                                    className="newPicture"
                                    src={jsonData.newPicture}
                                    alt="nouveau site"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="description_picture_container">
                            <img
                                className="picture"
                                src={jsonData.picture}
                                alt="Illustration du service de développement web"
                                loading="lazy"
                            />
                        </div>
                    )}
                </div>
                <div className="goToServices">
                    <Button text="Autres services" href="/#services" />
                </div>
            </div>
        </div>
    );
}
