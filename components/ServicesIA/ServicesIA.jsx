"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../elements/Button/Button.jsx";
import services from "@/data/servicesIA.json";
import "./ServicesIA.css";

const IA_TABS = [
    { key: "automation_IA", label: "Automatisation IA" },
    { key: "agent_IA", label: "Agent IA" },
    { key: "support_IA", label: "Accompagnement IA" },
    { key: "GEO", label: "Optimisation GEO" },
];

const dataForKey = (key) => (key === "GEO" ? services.SEO : services[key]);

export default function ServicesIA() {
    const [activeKey, setActiveKey] = useState("automation_IA");
    const pictureContainerRef = useRef(null);
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        if (!pictureContainerRef.current) return;
        const { height, width } =
            pictureContainerRef.current.getBoundingClientRect();
        setIsPortrait(height > width);
    }, []);

    const jsonData = dataForKey(activeKey);

    return (
        <div className="ServicesIA">
            <div className="services_container">
                <h2 className="services_title">
                    Mes services en automatisation IA
                </h2>
                <div className="services_name_container">
                    {IA_TABS.map((tab) => (
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
                            alt="Icône d'automatisation IA"
                            loading="lazy"
                        />
                        <h3 className="text_title">{jsonData.title}</h3>

                        <p className="text">{jsonData.description}</p>

                        <Button
                            text="+"
                            href={`/servicesPageIA?section=${encodeURIComponent(jsonData.tag || activeKey)}`}
                        />
                    </div>

                    <div
                        className="description_picture_container"
                        ref={pictureContainerRef}
                    >
                        <img
                            className="picture"
                            src={
                                isPortrait
                                    ? jsonData.pictureMobile
                                    : jsonData.picture
                            }
                            alt="Illustration du service d'automatisation IA"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="goToServices">
                    <Button text="Autres services" href="/#services" />
                </div>
            </div>
        </div>
    );
}
