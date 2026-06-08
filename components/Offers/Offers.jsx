import Link from "next/link";
import packs from "@/data/packs.json";
import {
    ArrowRight,
    Check,
    ChevronRight,
    Sparkles,
    Star,
} from "lucide-react";

export default function Offers() {
    return (
        <>
            {/* Hero */}
            <section className="bg-white px-6 pb-12 pt-32 sm:pt-40">
                <div className="mx-auto max-w-7xl">
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
                        <span className="text-ink-700">Offres</span>
                    </nav>

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
                                Mes offres
                            </span>

                            <h1 className="mt-4 font-display font-bold leading-tight text-[clamp(2rem,4vw,3.75rem)]">
                                Des offres claires, des prix transparents
                            </h1>

                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                                Cinq formules pensées pour les indépendants,
                                artisans et TPE/PME. Du site one page à
                                l'application sur mesure, en passant par
                                l'automatisation IA.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packs grid */}
            <section className="bg-white px-6 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        {packs.map((pack) => (
                            <article
                                key={pack.id}
                                id={pack.id}
                                className={`relative flex scroll-mt-32 flex-col rounded-3xl border bg-white p-8 transition-all hover:shadow-lg ${
                                    pack.featured
                                        ? "border-brand-500 shadow-xl shadow-brand-500/10"
                                        : "border-ink-100 hover:border-brand-300"
                                }`}
                            >
                                {pack.featured ? (
                                    <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-3 py-1 text-xs font-semibold text-white shadow">
                                        <Star size={12} fill="currentColor" />
                                        Le plus demandé
                                    </span>
                                ) : null}

                                <h2 className="font-display text-2xl font-bold text-ink-900">
                                    {pack.name}
                                </h2>
                                <p className="mt-2 text-sm text-ink-500">
                                    {pack.tagline}
                                </p>

                                <p className="mt-6 font-display text-3xl font-bold text-brand-700">
                                    {pack.priceLabel}
                                </p>

                                <p className="mt-4 text-sm leading-relaxed text-ink-700">
                                    {pack.description}
                                </p>

                                <ul className="mt-6 flex-1 space-y-3">
                                    {pack.includes.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-sm text-ink-700"
                                        >
                                            <Check
                                                size={16}
                                                className="mt-0.5 shrink-0 text-brand-700"
                                                aria-hidden="true"
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 border-t border-ink-100 pt-4 text-xs text-ink-400">
                                    <span className="font-semibold uppercase tracking-wide">
                                        Pour qui :
                                    </span>{" "}
                                    {pack.targetAudience}
                                </div>

                                <div className="mt-6 flex flex-col gap-2">
                                    <Link
                                        href={pack.ctaHref}
                                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110"
                                    >
                                        {pack.ctaLabel}
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </Link>

                                    {pack.hasTemplates ? (
                                        <Link
                                            href={`/templates#${pack.id}`}
                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                                        >
                                            Voir les templates
                                        </Link>
                                    ) : null}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Options banner */}
            <section className="bg-white px-6 pb-12 sm:pb-16">
                <div className="mx-auto max-w-5xl">
                    <div className="rounded-2xl border border-brand-200 bg-brand-50/40 p-6 sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                                <Sparkles size={18} aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="font-display text-lg font-bold text-ink-900 sm:text-xl">
                                    Besoin de personnaliser votre pack ?
                                </h2>
                                <p className="mt-2 text-sm leading-relaxed text-ink-700 sm:text-base">
                                    Des options complémentaires sont disponibles
                                    selon votre projet : page ou section
                                    supplémentaire, rédaction de contenu, SEO
                                    amélioré, maintenance et plus encore.
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:text-base">
                                    On en discute lors du premier échange,
                                    offert et sans engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-700 to-brand-900 px-6 py-20 sm:py-24">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
                />

                <div className="relative mx-auto max-w-3xl text-center">
                    <h2 className="font-display font-bold text-white text-[clamp(1.75rem,3.5vw,3rem)]">
                        Un projet en tête ?
                    </h2>
                    <p className="mt-4 text-base text-white/85 sm:text-lg">
                        Discutons-en. Premier échange offert pour cadrer votre
                        besoin et identifier le pack adapté.
                    </p>
                    <Link
                        href="/contact"
                        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-brand-700 shadow-xl transition-all hover:shadow-2xl hover:brightness-105"
                    >
                        Me contacter
                        <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </section>
        </>
    );
}
