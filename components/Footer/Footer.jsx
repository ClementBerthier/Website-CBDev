import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

const SOCIAL_LINKS = [
    {
        href: "https://www.facebook.com/profile.php?id=61562316966767",
        icon: "/images/whitefacebook.svg",
        label: "facebook",
    },
    {
        href: "https://www.instagram.com/clementberthier_dev/",
        icon: "/images/whiteinsta.svg",
        label: "instagram",
    },
    {
        href: "https://www.linkedin.com/in/cl%C3%A9ment-berthier/",
        icon: "/images/whitelinkedin.svg",
        label: "linkedin",
    },
    {
        href: "https://github.com/ClementBerthier",
        icon: "/images/whitegithub.svg",
        label: "github",
    },
];

const WEB_SERVICES = [
    { section: "site", label: "Sites vitrines" },
    { section: "blog", label: "Blogs" },
    { section: "portfolio", label: "Portfolios" },
    { section: "CV", label: "CV" },
    { section: "evenement", label: "Sites d'événement" },
    { section: "application", label: "Application" },
    { section: "e_commerce", label: "E-commerce" },
    { section: "RM", label: "Refonte & Maintenance" },
    { section: "SEO", label: "SEO" },
];

const IA_SERVICES = [
    { section: "automation_IA", label: "Automatisation IA" },
    { section: "Agent IA", label: "Agent IA" },
    { section: "Accompagnement IA", label: "Accompagnement IA" },
    { section: "GEO", label: "GEO" },
];

const NAV_LINKS = [
    { href: "/#home", label: "Accueil" },
    { href: "/#services", label: "Services" },
    { href: "/projets", label: "Projets" },
    { href: "/#FAQs", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="footer_container">
            <div className="footer_container_section">
                <div className="footer_navigation_container">
                    <div className="footer_section">
                        <div className="footer_section_division">
                            <Image
                                className="footer_logo"
                                src="/images/Logo_CBDev_white.WebP"
                                alt="logo entreprise"
                                width={160}
                                height={160}
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
                                {SOCIAL_LINKS.map((social) => (
                                    <a
                                        key={social.label}
                                        className="footer_link"
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label={social.label}
                                    >
                                        <img
                                            src={social.icon}
                                            alt={`logo ${social.label}`}
                                        />
                                    </a>
                                ))}
                            </div>
                            <div className="legalMention_container">
                                <Link
                                    className="legalMention"
                                    href="/legalMention"
                                >
                                    Mentions légales
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer_navigation_first">
                        <div className="footer_navigation">
                            <div className="footer_navigation_section">
                                <h3 className="footer_navigation_title">
                                    Services
                                </h3>
                                <div className="footer_navigation_link_container">
                                    {WEB_SERVICES.map((service) => (
                                        <Link
                                            key={service.section}
                                            className="footer_navigation_link pointer"
                                            href={`/servicesPage?section=${service.section}`}
                                        >
                                            {service.label}
                                        </Link>
                                    ))}
                                    {IA_SERVICES.map((service) => (
                                        <Link
                                            key={service.section}
                                            className="footer_navigation_link pointer"
                                            href={`/servicesPageIA?section=${encodeURIComponent(service.section)}`}
                                        >
                                            {service.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="footer_navigation">
                            <div className="footer_navigation_section links_section">
                                <h3 className="footer_navigation_title">
                                    Liens
                                </h3>
                                <div className="footer_navigation_link_container">
                                    {NAV_LINKS.map((link) => (
                                        <Link
                                            key={link.href}
                                            className="footer_navigation_link pointer"
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_navigation">
                        <div className="footer_navigation_section section_contact">
                            <h3 className="footer_navigation_title">Contact</h3>
                            <div className="footer_navigation_link_container">
                                <div className="footer_navigation_link">
                                    <span className="footer_navigation_span_title">
                                        Adresse
                                    </span>
                                    <span className="adress_info">
                                        157 chemin de terre albine
                                        <br />
                                        81660 {`Pont-de-l'arn`}
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
                    CBDev. © 2024 - {new Date().getFullYear()} - Designé et
                    développé par Clément Berthier Développeur
                </p>
            </div>
        </footer>
    );
}
