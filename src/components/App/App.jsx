//import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Services from "../Services/Services.jsx";
import ContactBanner from "../ContactBanner/ContactBanner.jsx";
import Contact from "../Contact/Contact.jsx";
//import useMobileDetect from "../../../Hook/useMobileDetect.jsx";
//import Footer from "../Footer/Footer.jsx";
//import FAQs from "../FAQs/FAQs.jsx";
//import Articles from "../Articles/Articles.jsx";

export default function App() {
    //const isMobile = useMobileDetect();

    return (
        <>
            <Home />
            <AboutMe />
            <Services />
            <ContactBanner />
            {/* <Articles /> */}
            {/* <FAQs /> */}
            <Contact />
            {/* <Footer /> */}
        </>
    );
}
