//import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import ServicesPage from "../ServicesPage/ServicesPage.jsx";
import HomeLoader from "../HomeLoader/HomeLoader.jsx";
//import useMobileDetect from "../../../Hook/useMobileDetect.jsx";
//import Footer from "../Footer/Footer.jsx";
//import FAQs from "../FAQs/FAQs.jsx";
//import Articles from "../Articles/Articles.jsx";

export default function App() {
    return (
        <>
            <HomeLoader />
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/servicesPage" element={<ServicesPage />} />
            </Routes>
        </>
    );
}
