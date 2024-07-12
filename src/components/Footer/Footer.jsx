import "./footer.css";
import facebook from "/images/whitefacebook.svg";
import instagram from "/images/whiteinsta.svg";
import linkedin from "/images/whitelinkedin.svg";
import github from "/images/whitegithub.svg";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    const homePageNav = ["home", "services", "technologies", "FAQs", "contact"];
    const servicePageNav = [
        "site",
        "blog",
        "portfolio",
        "CV",
        "evenement",
        "application",
        "e_commerce",
        "RM",
        "SEO",
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleClickNavigate = (e) => {
        e.preventDefault();
        const destinationId = e.target.id;
        if (destinationId === "legalMention") {
            navigate("/legalMention");
            scrollToTop();
        } else if (homePageNav.includes(destinationId)) {
            navigate("/", { state: { id: destinationId } });
        } else if (servicePageNav.includes(destinationId)) {
            const currentPath = window.location.pathname;
            if (currentPath === "/servicesPage") {
                navigate("/refresh", { replace: true });
                setTimeout(() => {
                    navigate("/servicesPage", {
                        state: { name: destinationId },
                    });
                }, 0);
            } else {
                navigate("/servicesPage", { state: { name: destinationId } });
            }
        }
    };

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
                                <a
                                    className="footer_link"
                                    href="https://www.facebook.com/profile.php?id=61562316966767"
                                    rel="noreferrer noopener"
                                    target="_blank"
                                    aria-label="facebook"
                                >
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
                            <div className="legalMention_container">
                                <span
                                    className="legalMention"
                                    id="legalMention"
                                    onClick={handleClickNavigate}
                                >
                                    Mentions légales
                                </span>
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
                                        href="/servicesPage"
                                        id="site"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}Sites vitrine
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/servicesPage"
                                        id="blog"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}Blogs
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/servicesPage"
                                        id="portfolio"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}Portfolios
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/servicesPage"
                                        id="CV"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}CV
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/servicesPage"
                                        id="evenement"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}Sites d{"'"}évènement
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/servicesPage"
                                        id="application"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}Application
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/servicesPage"
                                        id="e_commerce"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}E-commerce
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/servicesPage"
                                        id="RM"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}Refonte & Maintenance
                                    </a>

                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/servicesPage"
                                        id="SEO"
                                        onClick={handleClickNavigate}
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
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/"
                                        id="home"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}Accueil
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/"
                                        id="services"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}Services
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/"
                                        id="technologies"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}Technologies
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/"
                                        id="FAQs"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}FAQ
                                    </a>
                                    <a
                                        className="footer_navigation_link pointer"
                                        href="/"
                                        id="contact"
                                        onClick={handleClickNavigate}
                                    >
                                        {"> "}Contact
                                    </a>
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
