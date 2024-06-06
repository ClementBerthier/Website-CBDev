import Home from "../Home/Home.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Services from "../Services/Services.jsx";
import ContactBanner from "../ContactBanner/ContactBanner.jsx";
import Contact from "../Contact/Contact.jsx";
import HomeLoader from "../HomeLoader/HomeLoader.jsx";

export default function Layout() {
    return (
        <>
            <HomeLoader />
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
