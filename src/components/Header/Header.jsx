import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-scroll";

//TODO: regler le probleme du clcik sur le burger menu, il est compliquer de le fermé car la div n'est pas centré

export default function Header() {
    const [Scrolled, setScrolled] = useState("header");
    const [headerBurgerScrolled, setHeaderBurgerScrolled] =
        useState("headerBurger");

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 271) {
            setScrolled("header scrolled");
        } else {
            setScrolled("header ");
        }

        if (!isBurgerOpen && window.scrollY > 231) {
            setHeaderBurgerScrolled("headerBurger scrolled");
        } else {
            setHeaderBurgerScrolled("headerBurger");
        }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClick = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <>
            {isMobile ? (
                <>
                    <header className={headerBurgerScrolled}>
                        <div className="headerBurger_logo_container">
                            {!isBurgerOpen ? (
                                <img
                                    className="headerBurger_logo"
                                    src="../images/Logo_CBDev.svg"
                                    alt="logo entreprise"
                                />
                            ) : null}
                        </div>

                        <div
                            className="headerBurger_button"
                            onClick={handleClick}
                        >
                            <span
                                className={`burger-bar ${
                                    isBurgerOpen ? "open" : "close"
                                } `}
                            ></span>
                        </div>
                    </header>
                    {isBurgerOpen ? (
                        <div className="headerBurgerOpen_container ">
                            <div className="headerBurgerOpen_logo_container">
                                <img
                                    className="headerBurgerOpen_logo"
                                    src="../images/Logo_CBDev_white.svg"
                                    alt="logo entreprise"
                                />
                            </div>
                            <div className="headerBurgerOpen_link_container">
                                <Link
                                    className="link"
                                    id="headerHome"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={handleClick}
                                >
                                    Accueil
                                </Link>
                                <Link
                                    className="link"
                                    id="headerAboutMe"
                                    to="aboutMe"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={handleClick}
                                >
                                    A Propos
                                </Link>
                                <Link
                                    className="link"
                                    id="hearderServices"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-390}
                                    duration={500}
                                    onClick={handleClick}
                                >
                                    Services
                                </Link>
                                <Link
                                    className="link"
                                    id="headerContact"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-250}
                                    duration={500}
                                    onClick={handleClick}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    ) : null}
                </>
            ) : (
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
                                className="navBar_items"
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
                                className="navBar_items"
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
                                id="hearderServices"
                                className="navBar_items"
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
                                className="navBar_items"
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
