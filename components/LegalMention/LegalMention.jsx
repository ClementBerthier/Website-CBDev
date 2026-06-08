"use client";

import { useState } from "react";
import Link from "next/link";
import legalMention from "@/data/legalMention.json";
import { ChevronRight, FileText, ArrowUp } from "lucide-react";

const OPTIONS = [
    { value: 0, label: "Mentions légales", short: "Mentions" },
    { value: 1, label: "CGU", short: "CGU" },
    { value: 2, label: "CGV", short: "CGV" },
    { value: 3, label: "Politique de confidentialité", short: "Confidentialité" },
];

export default function LegalMention() {
    const [activeIndex, setActiveIndex] = useState(0);
    const jsonData = legalMention[activeIndex];

    const handleReturnTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Hero card */}
            <section className="bg-white px-6 pb-12 pt-32 sm:pt-40">
                <div className="mx-auto max-w-7xl">
                    {/* Breadcrumb */}
                    <nav
                        aria-label="Fil d'Ariane"
                        className="mb-6 flex items-center gap-1.5 text-sm text-ink-400"
                    >
                        <Link
                            href="/"
                            className="transition-colors hover:text-brand-700"
                        >
                            Accueil
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-ink-700">Mentions légales</span>
                    </nav>

                    {/* Hero */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-700 to-brand-900 px-6 py-12 text-white shadow-2xl shadow-brand-500/20 sm:px-12 sm:py-16">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
                        />

                        <div className="relative">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                                <FileText size={14} />
                                Informations légales
                            </span>

                            <h1 className="mt-4 font-display font-bold leading-tight text-[clamp(2rem,4vw,3.75rem)]">
                                {jsonData.title}
                            </h1>

                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                                {jsonData.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky tabs */}
            <nav
                aria-label="Documents légaux"
                className="sticky top-20 z-30 border-b border-ink-100 bg-white/95 backdrop-blur-md md:top-[7.5rem]"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex gap-2 overflow-x-auto py-3 sm:justify-center">
                        {OPTIONS.map((opt) => {
                            const isActive = opt.value === activeIndex;
                            return (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => {
                                        setActiveIndex(opt.value);
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                                        isActive
                                            ? "bg-gradient-to-r from-brand-300 to-brand-500 !text-white shadow-md shadow-brand-500/20"
                                            : "text-ink-500 hover:bg-ink-100 hover:text-ink-900"
                                    }`}
                                >
                                    <span className="hidden sm:inline">
                                        {opt.label}
                                    </span>
                                    <span className="sm:hidden">
                                        {opt.short}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Content */}
            <article className="bg-white px-6 py-16 sm:py-20">
                <div className="mx-auto max-w-4xl">
                    <ul className="space-y-12">
                        {jsonData.articlesList.map((article, index) => (
                            <li
                                key={index}
                                className="border-l-4 border-brand-500 pl-6 sm:pl-8"
                            >
                                <h2 className="font-display font-bold text-ink-900 text-[clamp(1.25rem,2.5vw,1.75rem)]">
                                    {article.title}
                                </h2>
                                <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-ink-500 sm:text-lg">
                                    {article.text}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {/* Return top button */}
                    <div className="mt-16 flex justify-center">
                        <button
                            type="button"
                            onClick={handleReturnTop}
                            className="group inline-flex items-center gap-2 rounded-full border-2 border-ink-200 bg-white px-6 py-3 text-sm font-medium text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-700"
                        >
                            <ArrowUp
                                size={16}
                                className="transition-transform group-hover:-translate-y-0.5"
                            />
                            Retour en haut de page
                        </button>
                    </div>
                </div>
            </article>
        </>
    );
}
