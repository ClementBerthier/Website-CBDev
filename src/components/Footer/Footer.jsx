import "./footer.css";
import facebook from "/images/whitefacebook.svg";
import instagram from "/images/whiteinsta.svg";
import linkedin from "/images/whitelinkedin.svg";
import github from "/images/whitegithub.svg";

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_container_section">
                <div className="footer">
                    <div className="footer_section">
                        <div>
                            <img
                                className="footer_logo"
                                src="/images/Logo_CBDev_white.png"
                                alt="logo entreprise"
                            />
                            <p className="motto">
                                Votre <span className="greenText">vision</span>,
                                notre{" "}
                                <span className="greenText">création</span>
                            </p>
                        </div>
                        <div>
                            <h3 className="footer_title">Suivez nous </h3>
                            <div className="footer_social_logo">
                                <a className="footer_link" href="">
                                    <img src={facebook} alt="logo facebook" />
                                </a>
                                <a className="footer_link" href="">
                                    <img src={instagram} alt="logo instagram" />
                                </a>
                                <a className="footer_link" href="">
                                    <img src={linkedin} alt="logo instagram" />
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
                </div>
                <div className="footer_navigation">
                    <div className="footer_navigation_section">
                        <h3 className="footer_navigation_title">Services</h3>
                        <div className="footer_navigation_link_container">
                            <a className="footer_navigation_link" href="">
                                Developpement de site
                            </a>
                            <a className="footer_navigation_link" href="">
                                Développement d{"'"}application
                            </a>
                            <a className="footer_navigation_link" href="">
                                Refonte & Maintenance
                            </a>
                            <a className="footer_navigation_link" href="">
                                SEO
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer_navigation second">
                    <div className="footer_navigation_section">
                        <h3 className="footer_navigation_title">Liens</h3>
                        <div className="footer_navigation_link_container">
                            <a className="footer_navigation_link" href="">
                                Accueil
                            </a>
                            <a className="footer_navigation_link" href="">
                                A propos
                            </a>
                            <a className="footer_navigation_link" href="">
                                Services
                            </a>
                            <a className="footer_navigation_link" href="">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer_detail_container">
                    <div className="footer_detail_section">
                        <h3 className="footer_detail_container_title">
                            Contact
                        </h3>
                        <div className="footer_detail_section_detail">
                            <div className="footer_detail">
                                <h3 className="footer_detail_title">
                                    Adresse:
                                </h3>
                                <p className="footer_detail_text">
                                    12 bis rue du Commandant Wauthier,
                                    <br /> Résidence l{"'"}
                                    Infante, Bat C Appt 32, <br />
                                    81100 Castres
                                </p>
                            </div>
                            <div className="footer_detail">
                                <h3 className="footer_detail_title">Email:</h3>
                                <p className="footer_detail_text">
                                    <a
                                        className="mailto"
                                        href="mailto:clementberthierdeveloppeur@gmail.com"
                                    >
                                        clementberthierdeveloppeur@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className="footer_detail">
                                <h3 className="footer_detail_title">
                                    Téléphone:
                                </h3>
                                <p className="footer_detail_text">
                                    07.88.45.37.78
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
