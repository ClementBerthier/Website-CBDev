//import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import "./App.css";
import Service from "../Services/Service.jsx";
import ContactBanner from "../ContactBanner/ContactBanner.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
//import FAQs from "../FAQs/FAQs.jsx";
//import Articles from "../Articles/Articles.jsx";

function App() {
    return (
        <div className="app_container">
            <Home />
            <AboutMe />
            <Service />
            <ContactBanner />
            {/*  <Articles />
             <FAQs
             */}
            <Contact />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
