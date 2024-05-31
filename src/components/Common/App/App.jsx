//import { Route, Routes } from "react-router-dom";
import Home from "../../Desktop/Home/Home.jsx";
import AboutMe from "../../Desktop/AboutMe/AboutMe.jsx";
import "./App.css";
import Service from "../../Desktop/Services/Service.jsx";
import ContactBanner from "../../Desktop/ContactBanner/ContactBanner.jsx";
import Contact from "../../Desktop/Contact/Contact.jsx";
//import useMobileDetect from "../../../Hook/useMobileDetect.jsx";
//import Footer from "../Footer/Footer.jsx";
//import FAQs from "../FAQs/FAQs.jsx";
//import Articles from "../Articles/Articles.jsx";

export default function App() {
    //const isMobile = useMobileDetect();

    return (
        <>
            <div className="app_container_desktop">
                <Home />
                <AboutMe />
                <Service />
                <ContactBanner />
                {/* <Articles /> */}
                {/* <FAQs /> */}
                <Contact />
                {/* <Footer /> */}
            </div>
        </>
    );
}
