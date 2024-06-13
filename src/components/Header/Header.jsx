import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-scroll";

export default function Header() {
    const [Scrolled, setScrolled] = useState("header");
    const [nameOfLogo, setNameOfLogo] = useState("Logo_CBDev.svg");
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
        if (window.scrollY > 1) {
            setScrolled("header scrolled");
            setNameOfLogo("Logo_CBDev_white.png");
        } else {
            setScrolled("header ");
            setNameOfLogo("Logo_CBDev_darkPurple.png");
        }

        if (!isBurgerOpen && window.scrollY > 1) {
            setHeaderBurgerScrolled("headerBurger scrolled");
        } else {
            setHeaderBurgerScrolled("headerBurger");
        }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClick = () => {
        console.log("click");
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
                                    src={`/images/${nameOfLogo}`}
                                    alt="logo entreprise"
                                />
                            ) : null}
                        </div>

                        <div
                            className="headerBurgerShape"
                            onClick={handleClick}
                        ></div>
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
                                    src="../images/Logo_CBDev_white.png"
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
                                    offset={-40}
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
                                    offset={-165}
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
                                    offset={-130}
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
                    <div className="container">
                        <div className="logo_container">
                            {
                                <img
                                    className="logo"
                                    src={`/images/Logo_CBDev_white.png`}
                                    alt="Logo"
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
                                    Accueil
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
                                    offset={-229}
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
                                    offset={-220}
                                    duration={500}
                                >
                                    Contact
                                    <div className="borderLine"></div>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>
            )}
        </>
    );
}
