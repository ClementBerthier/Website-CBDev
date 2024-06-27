import { useEffect, useState } from "react";
import "./Header.css";
import Button from "../elements/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

//TODO: ajouter les chemin de chaque liens
//TODO: ajouter le chemin du bouton contact
//TODO: ajouter le burger menu

export default function Header2() {
    const navigate = useNavigate();

    const [burgerOpen, setBurgerOpen] = useState(false);
    const [hiddenClass, setHiddenClass] = useState("");
    const [crossClass, setCrossClass] = useState("");

    const openBurger = () => {
        setBurgerOpen(!burgerOpen);
    };

    useEffect(() => {
        if (burgerOpen) {
            setHiddenClass("hidden");
            setCrossClass("cross");
        } else {
            setHiddenClass("");
            setCrossClass("");
        }
    }, [burgerOpen]);

    const handleClickNavigate = (e) => {
        e.preventDefault();
        const destinationId = e.target.id;
        navigate("/", { state: { id: destinationId } });
        console.log(destinationId);
    };

    return (
        <div className="Header">
            <div className="header_banner">
                <div className="header_banner_container">
                    <div className="banner_phone">
                        <img
                            className="phone_logo"
                            src="/images/phone_logo_white.svg"
                            alt="logo téléphone"
                        />
                        <p className="phone_number">{"(+33) 7.88.45.37.78"}</p>
                    </div>
                    <div className="banner_mail">
                        <img
                            className="mail_logo"
                            src="/images/mail_logo_white.svg"
                            alt="logo mail"
                        />
                        <a
                            className="mailto mail_adress"
                            href="mailto:clementberthierdeveloppeur@gmail.com"
                        >
                            clementberthierdeveloppeur@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="header_navigation">
                <div className="header_navigation_container">
                    <div className="section_links">
                        <a className="logo_container" href="">
                            <img
                                id="home"
                                className="company_logo"
                                src="/images/Logo_CBDev.png"
                                alt="logo entreprise"
                                onClick={handleClickNavigate}
                            />
                        </a>
                        <div className="links_container">
                            <a
                                className="link"
                                href="/"
                                id="home"
                                onClick={handleClickNavigate}
                            >
                                Accueil
                            </a>
                            <a
                                className="link"
                                href="/"
                                id="services"
                                onClick={handleClickNavigate}
                            >
                                Services
                            </a>
                            <a
                                className="link"
                                href="/"
                                id="FAQs"
                                onClick={handleClickNavigate}
                            >
                                FAQ
                            </a>
                            <a
                                className="link"
                                href="/"
                                id="technologies"
                                onClick={handleClickNavigate}
                            >
                                Technologies
                            </a>
                            <a
                                className="link"
                                href="/"
                                id="contact"
                                onClick={handleClickNavigate}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="section_contact">
                        <Button href="/" text="Contact" id="contact"></Button>
                        <div
                            className="burger_button_container"
                            onClick={openBurger}
                        >
                            <div
                                className={`burger_button_bar ${hiddenClass}`}
                            ></div>
                            <div
                                className={`burger_button_bar ${crossClass}`}
                            ></div>
                            <div
                                className={`burger_button_bar ${hiddenClass}`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
