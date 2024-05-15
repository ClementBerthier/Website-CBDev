import { useState } from "react";
import "./header.css";

export default function Header() {
    const [Scrolled, setScrolled] = useState("header");

    const handleScroll = () => {
        if (window.scrollY > 350) {
            setScrolled("header scrolled");
        } else {
            setScrolled("header");
        }
    };

    console.log(window.scrollY);

    window.addEventListener("scroll", handleScroll);

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
                    <a className="navBar_items" href="/">
                        Home
                    </a>
                    <div className="borderLine"></div>
                </div>
                <div className="navBar_items_container">
                    <a className="navBar_items" href="Menu">
                        Menu
                    </a>
                    <div className="borderLine"></div>
                </div>
                <div className="navBar_items_container">
                    <a className="navBar_items" href="/aboutMe">
                        A Propos
                    </a>
                    <div className="borderLine"></div>
                </div>
                <div className="navBar_items_container">
                    <a className="navBar_items" href="Services">
                        Services
                    </a>
                    <div className="borderLine"></div>
                </div>
                <div className="navBar_items_container">
                    <a className="navBar_items" href="Technos">
                        Technos
                    </a>
                    <div className="borderLine "></div>
                </div>
                <div className="navBar_items_container">
                    <a className="navBar_items" href="Articles">
                        Articles
                    </a>
                    <div className="borderLine "></div>
                </div>
                <div className="navBar_items_container">
                    <a className="navBar_items" href="News">
                        News
                    </a>
                    <div className="borderLine"></div>
                </div>
                <div className="navBar_items_container">
                    <a className="navBar_items" href="FAQs">
                        FAQs
                    </a>
                    <div className="borderLine"></div>
                </div>
                <div className="navBar_items_container">
                    <a className="navBar_items" href="Contact">
                        Contact
                    </a>
                    <div className="borderLine"></div>
                </div>
            </nav>
        </header>
    );
}
