import "./App.css";
import { Route, Routes, Switch } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import ServicesPage from "../ServicesPage/ServicesPage.jsx";
import HomeLoader from "../HomeLoader/HomeLoader.jsx";
import LegalMention from "../LegalMention/LegalMention.jsx";

export default function App() {
    return (
        <>
            <HomeLoader />
            <Routes>
                <Switch>
                    <Route path="/" element={<Layout />} />
                    <Route path="/servicesPage" element={<ServicesPage />} />
                    <Route path="/legalMention" element={<LegalMention />} />
                </Switch>
            </Routes>
        </>
    );
}
