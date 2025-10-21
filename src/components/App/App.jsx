import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import ServicesPage from "../ServicesPage/ServicesPage.jsx";
import HomeLoader from "../HomeLoader/HomeLoader.jsx";
import LegalMention from "../LegalMention/LegalMention.jsx";
import Projects from "../Project/Projects.jsx";
import { useEffect, useState } from "react";

export default function App() {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsFirstLoad(false), 2000); // durée du loader
        return () => clearTimeout(timer);
    }, []);

    if (isFirstLoad) return <HomeLoader />;
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/servicesPage" element={<ServicesPage />} />
                <Route path="/legalMention" element={<LegalMention />} />
                <Route path="/projets" element={<Projects />}></Route>
            </Routes>
        </>
    );
}
