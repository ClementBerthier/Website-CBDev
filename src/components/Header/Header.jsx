import { useState } from "react";
import "./header.css";
import { Link } from "react-scroll";

export default function Header() {
    const [Scrolled, setScrolled] = useState("header");

    const [isClicked, setIsclicked] = useState("");

    const [burgerIsClicked, setBurgerIsClicked] = useState(false);

    //TODO : faire en sorte que les lien du header se colorise en fonction de la position de l'utilisateur, et se decolorise lorsqu'il quite la zone.
    //Todo: faire en sorte que lorsque l'on clique sur un lien le h2 soit visible et non caché
    const handleScroll = () => {
        if (window.scrollY > 350) {
            setScrolled("header  scrolled");
        } else {
            setScrolled("header ");
        }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClick = (e) => {
        const id = e.target.id;
        setIsclicked(id);
    };

    return (
        <>
            {burgerIsClicked ? (
                <header className="headerBurger">
                    <div className="headerBurger_logo_container">
                        <img
                            className="headerBurger_logo"
                            src="/images/Logo_CBDev_white.svg"
                            alt="logo entreprise"
                        />
                    </div>

                    <div className="headerBurger_link_container">
                        <div className="headerBurger_section_link">
                            <a className="headerBurger_link" href="">
                                Home
                            </a>
                        </div>
                        <div className="headerBurger_section_link">
                            <a className="headerBurger_link" href="">
                                A propos
                            </a>
                        </div>
                        <div className="headerBurger_section_link">
                            <a className="headerBurger_link" href="">
                                Services
                            </a>
                        </div>
                        <div className="headerBurger_section_link">
                            <a className="headerBurger_link" href="">
                                Contact
                            </a>
                        </div>
                        <div className="headerBurger_section_link">
                            <a className="headerBurger_link" href="">
                                News
                            </a>
                        </div>
                        <div className="headerBurger_section_link">
                            <a className="headerBurger_link" href="">
                                Articles
                            </a>
                        </div>
                        <div className="headerBurger_section_link">
                            <a className="headerBurger_link" href="">
                                FAQs
                            </a>
                        </div>
                    </div>
                    <div className="headerBurger_button_container">
                        <button></button>
                    </div>
                </header>
            ) : (
                <header className={Scrolled}>
                    <div className="logo_container">
                        <img
                            className="logo"
                            src="/images/Logo_CBDev.svg"
                            alt="Logo_noir"
                        />
                    </div>
                    <nav className="navBar ">
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
                                id="headerAboutMe"
                                className={`navBar_items ${
                                    isClicked === "headerAboutMe"
                                        ? "clicked"
                                        : ""
                                }`}
                                to="aboutMe"
                                spy={true}
                                smooth={true}
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
                                    isClicked === "headerServices"
                                        ? "clicked"
                                        : ""
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

                        {/* <div className="navBar_items_container">
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
                </div> */}
                        <div className="navBar_items_container">
                            <Link
                                onClick={handleClick}
                                id="headerContact"
                                className={`navBar_items ${
                                    isClicked === "headerContact"
                                        ? "clicked"
                                        : ""
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
            )}
        </>
    );
}
