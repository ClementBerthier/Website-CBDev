import Home from "../Home/Home.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Services from "../Services/Services.jsx";
import ContactBanner from "../ContactBanner/ContactBanner.jsx";
import Contact from "../Contact/Contact.jsx";

export default function Layout() {
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
