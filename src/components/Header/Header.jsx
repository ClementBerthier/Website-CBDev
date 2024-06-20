import { useEffect, useState } from "react";
import "./Header.css";

//TODO: ajouter les chemin de chaque liens
//TODO: ajouter le chemin du bouton contact
//TODO: ajouter le burger menu

export default function Header2() {
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
                                className="company_logo"
                                src="/images/Logo_CBDev.png"
                                alt="logo entreprise"
                            />
                        </a>
                        <div className="links_container">
                            <a className="link" href="">
                                Accueil
                            </a>
                            <a className="link" href="">
                                Services
                            </a>
                            <a className="link" href="">
                                Portfolio
                            </a>
                            <a className="link" href="">
                                Articles
                            </a>
                            <a className="link" href="">
                                FAQ
                            </a>
                        </div>
                    </div>
                    <div className="section_contact">
                        <a className="contact_link" href="">
                            Contact
                        </a>
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
