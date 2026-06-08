import Link from "next/link";
import {
    ChevronRight,
    ArrowRight,
    Globe,
    AppWindow,
    ShoppingCart,
    RefreshCw,
    Search,
    Workflow,
} from "lucide-react";

const ICON_MAP = {
    "sites-vitrines": Globe,
    "applications-web": AppWindow,
    "e-commerce": ShoppingCart,
    "refonte-maintenance": RefreshCw,
    "seo-local": Search,
    "automatisation-ia": Workflow,
};

export default function ServicesIndex({ services }) {
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
                        <span className="text-ink-700">Services</span>
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
                                Services web
                            </span>
                            <h1 className="mt-4 font-display font-bold leading-tight text-[clamp(2rem,4vw,3.75rem)]">
                                Mes services de développement web
                            </h1>
                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                                Création de sites vitrines, applications web,
                                e-commerce, refonte, SEO local et
                                automatisation IA pour les artisans, indépendants
                                et TPE/PME du Tarn et de l&apos;Occitanie.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services grid */}
            <section className="bg-white px-6 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => {
                            const Icon =
                                ICON_MAP[service.slug] ?? Globe;
                            return (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10"
                                >
                                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 transition-colors group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white">
                                        <Icon size={28} strokeWidth={1.8} />
                                    </div>
                                    <h2 className="font-display text-xl font-bold text-ink-900">
                                        {service.title}
                                    </h2>
                                    <p className="mt-3 flex-1 text-base leading-relaxed text-ink-500">
                                        {service.shortDescription}
                                    </p>
                                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-transform group-hover:gap-3">
                                        En savoir plus
                                        <span className="sr-only">
                                            {" "}
                                            sur {service.title.toLowerCase()}
                                        </span>
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-700 to-brand-900 px-6 py-20 sm:py-24">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
                />
                <div className="relative mx-auto max-w-3xl text-center">
                    <h2 className="font-display font-bold text-white text-[clamp(1.75rem,3.5vw,3rem)]">
                        Un projet en tête ?
                    </h2>
                    <p className="mt-4 text-base text-white/85 sm:text-lg">
                        Discutons-en. Premier échange offert et sans
                        engagement.
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
