import { useState } from "react";
import "./header.css";
import { Link } from "react-scroll";

export default function Header() {
    const [Scrolled, setScrolled] = useState("header");

    const [isClicked, setIsClicked] = useState("home");

    //TODO : faire en sorte que les lien du header se colorise en fonction de la position de l'utilisateur, et se decolorise lorsqu'il quite la zone.

    const handleScroll = () => {
        if (window.scrollY > 271) {
            setScrolled("header  scrolled");
        } else {
            setScrolled("header ");
        }

        if (window.scrollY >= 0 && window.scrollY <= 1398) {
            setIsClicked("home");
        }

        if (window.scrollY >= 1399 && window.scrollY <= 2198) {
            setIsClicked("aboutMe");
        }

        if (window.scrollY >= 2199 && window.scrollY <= 3000) {
            setIsClicked("services");
        }

        if (window.scrollY >= 3001 && window.scrollY <= 4252) {
            setIsClicked("contact");
        }
    };

    window.addEventListener("scroll", handleScroll);

    console.log(window.scrollY, isClicked);

    return (
        <>
            <header className={Scrolled}>
                <div className="logo_container">
                    {
                        <img
                            className="logo"
                            src="/images/Logo_CBDev.svg"
                            alt="Logo_noir"
                        />
                    }
                </div>
                <nav className="navBar ">
                    <div className="navBar_items_container">
                        <Link
                            id="headerHome"
                            className={`navBar_items ${
                                isClicked === "home" ? "clicked" : "unclicked"
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
                            id="headerAboutMe"
                            className={`navBar_items ${
                                isClicked === "aboutMe" ? "clicked" : ""
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
                            id="headerServices"
                            className={`navBar_items ${
                                isClicked === "services" ? "clicked" : ""
                            }`}
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-390}
                            duration={500}
                        >
                            Services
                            <div className="borderLine"></div>
                        </Link>
                    </div>

                    <div className="navBar_items_container">
                        <Link
                            id="headerContact"
                            className={`navBar_items ${
                                isClicked === "contact" ? "clicked" : ""
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
        </>
    );
}
