import Link from "next/link";
import {
    ChevronRight,
    ArrowRight,
    BookOpen,
    LayoutGrid,
    MessageCircle,
    CheckCircle2,
    Sparkles,
    List,
} from "lucide-react";

const TOC = [
    { id: "intro", label: "Introduction" },
    { id: "definition", label: "Définition" },
    { id: "fonctionnalites", label: "Fonctionnalités" },
    { id: "cible", label: "Pour qui ?" },
    { id: "resume", label: "En résumé" },
];

export default function ServiceDetail({ service, services }) {
    return (
        <main>
            {/* Hero — full width */}
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
                        <Link
                            href="/services"
                            className="transition-colors hover:text-brand-700"
                        >
                            Services
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-ink-700">{service.title}</span>
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
                                <Sparkles size={14} />
                                {service.tag}
                            </span>
                            <h1 className="mt-4 font-display font-bold leading-tight text-[clamp(2rem,4vw,3.75rem)]">
                                {service.title}
                            </h1>
                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                                {service.shortDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2 columns: sidebar + content */}
            <section className="bg-white px-6 pb-16 sm:pb-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-12">
                        {/* Sidebar */}
                        <aside className="lg:sticky lg:top-32 lg:h-fit">
                            <nav aria-label="Services et sommaire">
                                <div>
                                    <h2 className="font-display text-xs font-bold uppercase tracking-wider text-ink-400">
                                        <LayoutGrid
                                            size={12}
                                            className="mr-1.5 inline-block"
                                            aria-hidden="true"
                                        />
                                        Services
                                    </h2>
                                    <ul className="mt-3 space-y-1">
                                        {services.map((item) => {
                                            const isActive =
                                                item.slug === service.slug;
                                            return (
                                                <li key={item.slug}>
                                                    <Link
                                                        href={`/services/${item.slug}`}
                                                        aria-current={
                                                            isActive
                                                                ? "page"
                                                                : undefined
                                                        }
                                                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                                                            isActive
                                                                ? "bg-gradient-to-r from-brand-300/15 to-brand-500/10 font-semibold text-brand-700"
                                                                : "text-ink-500 hover:bg-brand-50 hover:text-brand-700"
                                                        }`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div className="mt-10">
                                    <h2 className="font-display text-xs font-bold uppercase tracking-wider text-ink-400">
                                        <List
                                            size={12}
                                            className="mr-1.5 inline-block"
                                            aria-hidden="true"
                                        />
                                        Sommaire
                                    </h2>
                                    <ul className="mt-3 space-y-1">
                                        {TOC.map((item) => (
                                            <li key={item.id}>
                                                <a
                                                    href={`#${item.id}`}
                                                    className="block rounded-lg px-3 py-1.5 text-sm text-ink-500 transition-colors hover:bg-brand-50 hover:text-brand-700"
                                                >
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact CTA */}
                                <div className="mt-10 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-5">
                                    <p className="text-sm font-semibold text-ink-700">
                                        Un projet en tête ?
                                    </p>
                                    <p className="mt-1 text-xs text-ink-500">
                                        Premier échange offert.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                                    >
                                        Me contacter
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </nav>
                        </aside>

                        {/* Content */}
                        <article className="min-w-0">
                            {/* Intro */}
                            <section id="intro" className="scroll-mt-32">
                                <p className="text-lg leading-relaxed text-ink-700">
                                    {service.introText}
                                </p>
                            </section>

                            {/* Definition */}
                            <section
                                id="definition"
                                className="mt-12 scroll-mt-32"
                            >
                                <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
                                    <BookOpen size={12} />
                                    Définition
                                </span>
                                <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(1.5rem,2.5vw,2rem)]">
                                    {service.descriptionTitle}
                                </h2>
                                <div className="mt-5 rounded-2xl border-l-4 border-brand-500 bg-white p-6 shadow-sm sm:p-7">
                                    <p className="text-base leading-relaxed text-ink-500 sm:text-lg">
                                        {service.descriptionText}
                                    </p>
                                </div>
                            </section>

                            {/* Features */}
                            <section
                                id="fonctionnalites"
                                className="mt-12 scroll-mt-32"
                            >
                                <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
                                    <LayoutGrid size={12} />
                                    Fonctionnalités
                                </span>
                                <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(1.5rem,2.5vw,2rem)]">
                                    {service.featureTitle}
                                </h2>
                                <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                                    {service.featureText}
                                </p>
                                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                                    {service.featureList.map((feature) => (
                                        <li
                                            key={feature.title}
                                            className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10"
                                        >
                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700">
                                                <CheckCircle2 size={18} />
                                            </div>
                                            <h3 className="mt-3 font-display text-base font-bold text-ink-900">
                                                {feature.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-relaxed text-ink-500">
                                                {feature.text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Target audience */}
                            <section id="cible" className="mt-12 scroll-mt-32">
                                <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
                                    <MessageCircle size={12} />
                                    Pour qui ?
                                </span>
                                <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(1.5rem,2.5vw,2rem)]">
                                    À qui s&apos;adresse ce service ?
                                </h2>
                                <div className="mt-5 rounded-2xl border-l-4 border-brand-500 bg-white p-6 shadow-sm sm:p-7">
                                    <p className="text-base leading-relaxed text-ink-500 sm:text-lg">
                                        {service.targetAudience}
                                    </p>
                                </div>
                            </section>

                            {/* Conclusion */}
                            <section id="resume" className="mt-12 scroll-mt-32">
                                <h2 className="font-display font-bold text-ink-900 text-[clamp(1.5rem,2.5vw,2rem)]">
                                    En résumé
                                </h2>
                                <p className="mt-4 text-base leading-relaxed text-ink-700 sm:text-lg">
                                    {service.conclusionText}
                                </p>
                            </section>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA — full width */}
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
                        {service.promotionalTitle}
                    </h2>
                    <p className="mt-4 text-base text-white/85 sm:text-lg">
                        Premier appel ou rendez-vous offert pour cadrer votre
                        besoin et estimer le projet.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-brand-700 shadow-xl transition-all hover:shadow-2xl hover:brightness-105"
                        >
                            Me contacter
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                        <Link
                            href="/offres"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-7 py-3.5 font-medium !text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                        >
                            Voir mes offres
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
