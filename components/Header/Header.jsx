"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../elements/Button/Button.jsx";
import "./Header.css";

const NAV_LINKS = [
    { href: "/#home", label: "Accueil" },
    { href: "/#services", label: "Services" },
    { href: "/projets", label: "Projets" },
    { href: "/#FAQs", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
];

export default function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => setBurgerOpen((open) => !open);
    const closeBurger = () => setBurgerOpen(false);

    const hiddenClass = burgerOpen ? "hidden" : "";
    const crossClass = burgerOpen ? "cross" : "";
    const burgerMenuClass = burgerOpen ? "burgerMenu" : "burgerHidden";

    return (
        <>
            <header className="Header">
                <div className="header_banner">
                    <div className="header_banner_container">
                        <div className="banner_phone">
                            <img
                                className="phone_logo"
                                src="/images/phone_logo_white.svg"
                                alt="logo téléphone"
                            />
                            <p className="phone_number">(+33) 7.88.45.37.78</p>
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
                            <Link
                                className="logo_container"
                                href="/"
                                aria-label="Accueil"
                            >
                                <Image
                                    className="company_logo"
                                    src="/images/Logo_CBDev.WebP"
                                    alt="logo entreprise"
                                    width={96}
                                    height={96}
                                    priority
                                />
                            </Link>
                            <nav className="links_container">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        className="link"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="section_contact">
                            <Button href="/#contact" text="Contact" />
                            <button
                                type="button"
                                className="burger_button_container"
                                onClick={toggleBurger}
                                aria-label={
                                    burgerOpen
                                        ? "Fermer le menu"
                                        : "Ouvrir le menu"
                                }
                                aria-expanded={burgerOpen}
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
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={burgerMenuClass}>
                <nav className="links_container">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            className="link"
                            href={link.href}
                            onClick={closeBurger}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
