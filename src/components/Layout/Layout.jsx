import Home from "../Home/Home.jsx";
import Services from "../Services/Services.jsx";
import ContactBanner from "../ContactBanner/ContactBanner.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import AboutMe2 from "../AboutMe2/AboutMe2.jsx";

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
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={aboutMeRef}>
                <AboutMe2 />
            </div>
            <div ref={servicesRef}>
                <Services />
            </div>
            <ContactBanner />
            <div ref={contactRef}>
                <Contact />
            </div>
            {/* <Articles /> */}
            {/* <FAQs /> */}

            <Footer />
        </>
    );
}
