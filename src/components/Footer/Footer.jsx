import "./footer.css";
import facebook from "/images/whitefacebook.svg";
import instagram from "/images/whiteinsta.svg";
import linkedin from "/images/whitelinkedin.svg";
import github from "/images/whitegithub.svg";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_container_section">
                <div className="footer_navigation_container">
                    <div className="footer_section">
                        <div className="footer_section_division">
                            <img
                                className="footer_logo"
                                src="/images/Logo_CBDev_white.png"
                                alt="logo entreprise"
                            />
                            <p className="motto">
                                Votre <span className="mottoText">vision</span>,
                                notre{" "}
                                <span className="mottoText">création</span>
                            </p>
                        </div>
                        <div className="footer_section_division_second">
                            <h3 className="footer_title">Suivez nous </h3>
                            <div className="footer_social_logo">
                                <a className="footer_link" href="">
                                    <img src={facebook} alt="logo facebook" />
                                </a>
                                <a className="footer_link" href="">
                                    <img src={instagram} alt="logo instagram" />
                                </a>
                                <a
                                    className="footer_link"
                                    href="https://www.linkedin.com/in/cl%C3%A9ment-berthier/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="linkedin"
                                >
                                    <img src={linkedin} alt="logo linkedin" />
                                </a>
                                <a
                                    className="footer_link"
                                    href="https://github.com/ClementBerthier"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="github"
                                >
                                    <img src={github} alt="logo github" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer_navigation_first">
                        <div className="footer_navigation">
                            <div className="footer_navigation_section ">
                                <h3 className="footer_navigation_title">
                                    Services
                                </h3>
                                <div className="footer_navigation_link_container">
                                    <a
                                        className="footer_navigation_link pointer"
                                        href=""
                                    >
                                        {"> "}Site
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href=""
                                    >
                                        {"> "}Application
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href=""
                                    >
                                        {"> "}E-commerce
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href=""
                                    >
                                        {"> "}Refonte
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href=""
                                    >
                                        {"> "}Maintenance
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href=""
                                    >
                                        {"> "}SEO
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_navigation ">
                            <div className="footer_navigation_section links_section">
                                <h3 className="footer_navigation_title">
                                    Liens
                                </h3>
                                <div className="footer_navigation_link_container">
                                    <Link
                                        id="headerHome"
                                        className="footer_navigation_link pointer"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        {"> "}Accueil
                                    </Link>
                                    <Link
                                        id="headerAboutMe"
                                        className="footer_navigation_link pointer"
                                        to="aboutMe"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        {"> "}Services
                                    </Link>
                                    <Link
                                        id="hearderServices"
                                        className="footer_navigation_link pointer"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={-229}
                                        duration={500}
                                    >
                                        {"> "}Services
                                    </Link>
                                    <Link
                                        id="headerContact"
                                        className="footer_navigation_link pointer"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-250}
                                        duration={500}
                                    >
                                        {"> "}Contact{" "}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_navigation ">
                        <div className="footer_navigation_section section_contact">
                            <h3 className="footer_navigation_title">Contact</h3>
                            <div className="footer_navigation_link_container">
                                <div className="footer_navigation_link">
                                    <span className="footer_navigation_span_title">
                                        Adresse
                                    </span>
                                    <span className="adress_info">
                                        12 bis rue du Commandant Wauthier,
                                        <br />
                                        Résidence l{"'"}Infante, Bat C Appt 32,
                                        <br />
                                        81100 Castres
                                    </span>
                                </div>
                                <div className="footer_navigation_link">
                                    <span className="footer_navigation_span_title">
                                        Email
                                    </span>
                                    <a
                                        className="mailto adress_info"
                                        href="mailto:clementberthierdeveloppeur@gmail.com"
                                    >
                                        clementberthierdeveloppeur@gmail.com
                                    </a>
                                </div>
                                <div className="footer_navigation_link">
                                    <span className="footer_navigation_span_title">
                                        Téléphone
                                    </span>
                                    <span className="adress_info">
                                        07.88.45.37.78
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_credit_container">
                <p className="footer_credit">
                    CBDev. © 2024 - Designé et développé par Clément Berthier
                    Développeur
                </p>
            </div>
        </div>
    );
}
