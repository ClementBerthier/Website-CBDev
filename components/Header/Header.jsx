"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

const NAV_LINKS = [
    { href: "/#home", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/services/sites-vitrines", label: "Services" },
    { href: "/offres", label: "Offres" },
    { href: "/templates", label: "Templates" },
    { href: "/projets", label: "Projets" },
    { href: "/contact", label: "Contact" },
];

const PHONE = "+33 7 88 45 37 78";
const PHONE_HREF = "tel:+33788453778";
const EMAIL = "clementberthierdeveloppeur@gmail.com";
const EMAIL_HREF = `mailto:${EMAIL}`;

export default function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = burgerOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [burgerOpen]);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            {/* Top banner — desktop only */}
            <div className="hidden md:block bg-ink-900 text-white">
                <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-sm">
                    <a
                        href={PHONE_HREF}
                        className="flex items-center gap-2 transition-colors hover:text-brand-300"
                    >
                        <Phone size={14} strokeWidth={2} />
                        <span>{PHONE}</span>
                    </a>
                    <a
                        href={EMAIL_HREF}
                        className="flex items-center gap-2 transition-colors hover:text-brand-300"
                    >
                        <Mail size={14} strokeWidth={2} />
                        <span>{EMAIL}</span>
                    </a>
                </div>
            </div>

            {/* Main navigation */}
            <div className="border-b border-ink-100 bg-white/90 backdrop-blur-md shadow-sm">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                    <Link
                        href="/"
                        aria-label="Accueil - Clément Berthier Développeur"
                        className="relative block h-12 w-12 shrink-0 md:h-14 md:w-14"
                    >
                        <Image
                            src="/images/Logo_CBDev.WebP"
                            alt="Logo Clément Berthier Développeur"
                            fill
                            priority
                            sizes="56px"
                            className="object-contain"
                        />
                    </Link>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group relative text-base font-medium text-ink-700 transition-colors hover:text-brand-700"
                            >
                                {link.label}
                                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-brand-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="hidden items-center rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-6 py-2.5 text-sm font-semibold !text-white shadow-md transition-all hover:shadow-lg hover:brightness-110 md:inline-flex"
                        >
                            Me contacter
                        </Link>
                        <button
                            type="button"
                            onClick={() => setBurgerOpen((open) => !open)}
                            aria-label={
                                burgerOpen ? "Fermer le menu" : "Ouvrir le menu"
                            }
                            aria-expanded={burgerOpen}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
                        >
                            {burgerOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile drawer */}
            <div
                className={`fixed inset-0 z-40 bg-ink-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
                    burgerOpen
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
                onClick={() => setBurgerOpen(false)}
                aria-hidden="true"
            />
            <aside
                className={`fixed right-0 top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
                    burgerOpen ? "translate-x-0" : "translate-x-full"
                }`}
                inert={!burgerOpen}
            >
                <div className="flex h-20 items-center justify-between border-b border-ink-100 px-6">
                    <span className="font-display text-lg font-bold text-ink-900">
                        Menu
                    </span>
                    <button
                        type="button"
                        onClick={() => setBurgerOpen(false)}
                        aria-label="Fermer le menu"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-100"
                    >
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col gap-1 p-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setBurgerOpen(false)}
                            className="rounded-lg px-4 py-3 font-display text-lg font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto border-t border-ink-100 p-6">
                    <Link
                        href="/contact"
                        onClick={() => setBurgerOpen(false)}
                        className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-6 py-3 font-medium text-white shadow-md transition-all hover:shadow-lg"
                    >
                        Me contacter
                    </Link>
                    <div className="mt-4 space-y-2 text-sm text-ink-500">
                        <a
                            href={PHONE_HREF}
                            className="flex items-center gap-2 hover:text-brand-700"
                        >
                            <Phone size={14} />
                            {PHONE}
                        </a>
                        <a
                            href={EMAIL_HREF}
                            className="flex items-center gap-2 hover:text-brand-700"
                        >
                            <Mail size={14} />
                            <span className="truncate">{EMAIL}</span>
                        </a>
                    </div>
                </div>
            </aside>
        </header>
    );
}
