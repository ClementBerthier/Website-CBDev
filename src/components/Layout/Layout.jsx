//import Home from "../Home/Home.jsx";
import Services from "../Services/Services.jsx";
import ContactBanner from "../ContactBanner/ContactBanner.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import FAQs from "../FAQs/FAQs.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "../Header/Header.jsx";
import Home from "../Home/Home.jsx";
import Technologies from "../Technos/Technologies.jsx";

export default function Layout() {
    const location = useLocation();
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        if (location.state) {
            if (location.state.scrollTo === "home") {
                homeRef.current.scrollIntoView({ behavior: "smooth" });
            } else if (location.state.scrollTo === "aboutMe") {
                aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
            } else if (location.state.scrollTo === "services") {
                servicesRef.current.scrollIntoView({ behavior: "smooth" });
            } else if (location.state.scrollTo === "contact") {
                contactRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <div>
                <Header />
            </div>
            <div ref={homeRef}>
                <Home />
            </div>

            <div ref={servicesRef}>
                <Services />
            </div>
            <div>
                <FAQs />
            </div>
            <div>
                <ContactBanner />
            </div>
            <div>
                <Technologies />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>

            <Footer />
        </>
    );
}
