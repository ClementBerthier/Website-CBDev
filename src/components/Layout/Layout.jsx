import Home from "../Home/Home.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Services from "../Services/Services.jsx";
import ContactBanner from "../ContactBanner/ContactBanner.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Layout() {
    const location = useLocation();
    const homeRef = useRef(null);

    useEffect(() => {
        if (location.state) {
            if (location.state.id === "home") {
                homeRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <div ref={homeRef}>
                <Home />
            </div>
            <div>
                <AboutMe />
            </div>
            <div>
                <Services />
            </div>
            <div>
                {" "}
                <Contact />
            </div>
            <ContactBanner />
            {/* <Articles /> */}
            {/* <FAQs /> */}

            <Footer />
        </>
    );
}
