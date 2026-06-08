import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const SOCIAL_LINKS = [
    {
        href: "https://www.facebook.com/profile.php?id=61562316966767",
        icon: "/images/whitefacebook.svg",
        label: "Facebook",
    },
    {
        href: "https://www.instagram.com/clementberthier_dev/",
        icon: "/images/whiteinsta.svg",
        label: "Instagram",
    },
    {
        href: "https://www.linkedin.com/in/cl%C3%A9ment-berthier/",
        icon: "/images/whitelinkedin.svg",
        label: "LinkedIn",
    },
    {
        href: "https://github.com/ClementBerthier",
        icon: "/images/whitegithub.svg",
        label: "GitHub",
    },
];

const SERVICES = [
    { href: "/services/sites-vitrines", label: "Sites vitrines" },
    { href: "/services/applications-web", label: "Applications web" },
    { href: "/services/e-commerce", label: "E-commerce" },
    { href: "/services/refonte-maintenance", label: "Refonte & maintenance" },
    { href: "/services/seo-local", label: "SEO local" },
    { href: "/services/automatisation-ia", label: "Automatisation" },
];

const NAV_LINKS = [
    { href: "/#home", label: "Accueil" },
    { href: "/offres", label: "Offres" },
    { href: "/templates", label: "Templates" },
    { href: "/projets", label: "Projets" },
    { href: "/a-propos", label: "À propos" },
    { href: "/#FAQs", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-ink-900 text-white">
            {/* Gradient top border */}
            <div className="h-0.5 w-full bg-gradient-to-r from-brand-500 via-brand-700 to-brand-900" />

            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                    {/* Branding */}
                    <div className="lg:col-span-3">
                        <Image
                            src="/images/Logo_CBDev_white.WebP"
                            alt="Clément Berthier Développeur"
                            width={120}
                            height={120}
                            className="h-14 w-auto"
                        />
                        <p className="mt-5 font-display text-lg text-white/80">
                            Votre{" "}
                            <span className="font-bold text-white">
                                vision
                            </span>
                            , notre{" "}
                            <span className="font-bold text-white">
                                création
                            </span>
                        </p>

                        <div className="mt-6 flex gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={social.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
                                >
                                    <img
                                        src={social.icon}
                                        alt=""
                                        aria-hidden="true"
                                        width={20}
                                        height={20}
                                        className="h-5 w-5"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                            Services
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {SERVICES.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="text-sm text-white/70 transition-colors hover:text-brand-300"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2">
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                            Liens
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 transition-colors hover:text-brand-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                            Contact
                        </h3>
                        <ul className="mt-5 space-y-4">
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin
                                    size={16}
                                    className="mt-0.5 shrink-0 text-brand-300"
                                />
                                <span className="leading-relaxed text-white">
                                    157 chemin de terre albine
                                    <br />
                                    81660 Pont-de-l&apos;arn
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Mail
                                    size={16}
                                    className="mt-0.5 shrink-0 text-brand-300"
                                />
                                <a
                                    href="mailto:clementberthierdeveloppeur@gmail.com"
                                    className="text-white transition-colors hover:text-brand-300"
                                >
                                    clementberthierdeveloppeur@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Phone
                                    size={16}
                                    className="mt-0.5 shrink-0 text-brand-300"
                                />
                                <a
                                    href="tel:+33788453778"
                                    className="text-white transition-colors hover:text-brand-300"
                                >
                                    07.88.45.37.78
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-white/50 sm:flex-row">
                    <p>
                        © 2024 - {new Date().getFullYear()} Clément Berthier
                        Développeur. Tous droits réservés.
                    </p>
                    <Link
                        href="/mentions-legales"
                        className="transition-colors hover:text-white"
                    >
                        Mentions légales
                    </Link>
                </div>
            </div>
        </footer>
    );
}
