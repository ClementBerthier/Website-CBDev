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
    const servicesRef = useRef(null);
    const FAQsRef = useRef(null);
    const technologiesRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        if (location.state) {
            const options = {
                block: "center",
                behavior: "smooth",
            };
            if (location.state.id === "home") {
                homeRef.current.scrollIntoView(options);
            } else if (location.state.id === "services") {
                servicesRef.current.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
            } else if (location.state.id === "FAQs") {
                FAQsRef.current.scrollIntoView(options);
            } else if (location.state.id === "technologies") {
                technologiesRef.current.scrollIntoView({
                    block: "end",
                    behavior: "smooth",
                });
            } else if (location.state.id === "contact") {
                contactRef.current.scrollIntoView(options);
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
            <div ref={technologiesRef}>
                <Technologies />
            </div>
            <div>
                <ContactBanner />
            </div>
            <div ref={FAQsRef}>
                <FAQs />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>

            <Footer />
        </>
    );
}
