import { useState } from "react";
import "./header.css";
import { Link } from "react-scroll";

export default function Header() {
    const [Scrolled, setScrolled] = useState("header");

    const [isClicked, setIsclicked] = useState("");

    //TODO : faire en sorte que les lien du header se colorise en fonction de la position de l'utilisateur, et se decolorise lorsqu'il quite la zone.

    const handleScroll = () => {
        if (window.scrollY > 350) {
            setScrolled("header scrolled");
        } else {
            setScrolled("header");
        }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClick = (e) => {
        const id = e.target.id;
        setIsclicked(id);
    };

    return (
        <header className={Scrolled}>
            <div className="logo_container">
                <img
                    className="logo"
                    src="../../src/assets/images/Logo_CBDev.svg "
                    alt="Logo_noir"
                />
            </div>
            <nav className="navBar">
                <div className="navBar_items_container">
                    <Link
                        onClick={handleClick}
                        id="headerHome"
                        className={`navBar_items ${
                            isClicked === "headerHome" ? "clicked" : ""
                        }`}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Home
                        <div className="borderLine"></div>
                    </Link>
                </div>
                <div className="navBar_items_container">
                    <Link
                        onClick={handleClick}
                        id="headerMenu"
                        className={`navBar_items ${
                            isClicked === "headerMenu" ? "clicked" : ""
                        }`}
                        to="menu"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Menu
                        <div className="borderLine"></div>
                    </Link>
                </div>
                <div className="navBar_items_container">
                    <Link
                        onClick={handleClick}
                        id="headerAboutMe"
                        className={`navBar_items ${
                            isClicked === "headerAboutMe" ? "clicked" : ""
                        }`}
                        to="aboutMe"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        A propos
                        <div className="borderLine"></div>
                    </Link>
                </div>
                <div className="navBar_items_container">
                    <Link
                        onClick={handleClick}
                        id="headerServices"
                        className={`navBar_items ${
                            isClicked === "headerServices" ? "clicked" : ""
                        }`}
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Services
                        <div className="borderLine"></div>
                    </Link>
                </div>
                <div className="navBar_items_container">
                    <Link
                        onClick={handleClick}
                        id="headerTechnos"
                        className={`navBar_items ${
                            isClicked === "headerTechnos" ? "clicked" : ""
                        }`}
                        to="technos"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Technos
                        <div className="borderLine"></div>
                    </Link>
                </div>
                <div className="navBar_items_container">
                    <Link
                        onClick={handleClick}
                        id="headerArticles"
                        className={`navBar_items ${
                            isClicked === "headerArticles" ? "clicked" : ""
                        }`}
                        to="articles"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Articles
                        <div className="borderLine"></div>
                    </Link>
                </div>
                <div className="navBar_items_container">
                    <Link
                        onClick={handleClick}
                        id="headerNews"
                        className={`navBar_items ${
                            isClicked === "headerNews" ? "clicked" : ""
                        }`}
                        to="news"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        News
                        <div className="borderLine"></div>
                    </Link>
                </div>
                <div className="navBar_items_container">
                    <Link
                        onClick={handleClick}
                        id="headerFAQs"
                        className={`navBar_items ${
                            isClicked === "headerFAQs" ? "clicked" : ""
                        }`}
                        to="FAQs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        FAQs
                        <div className="borderLine"></div>
                    </Link>
                </div>
                <div className="navBar_items_container">
                    <Link
                        onClick={handleClick}
                        id="headerContact"
                        className={`navBar_items ${
                            isClicked === "headerContact" ? "clicked" : ""
                        }`}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact
                        <div className="borderLine"></div>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
