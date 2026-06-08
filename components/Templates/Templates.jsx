import Link from "next/link";
import Image from "next/image";
import packs from "@/data/packs.json";
import templates from "@/data/templates.json";
import {
    AlertCircle,
    ArrowRight,
    ChevronRight,
    ExternalLink,
} from "lucide-react";

const PACKS_WITH_TEMPLATES = packs.filter((pack) => pack.hasTemplates);

export default function Templates() {
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
                        <span className="text-ink-700">Templates</span>
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
                                Galerie de démonstration
                            </span>

                            <h1 className="mt-4 font-display font-bold leading-tight text-[clamp(2rem,4vw,3.75rem)]">
                                Templates de démonstration
                            </h1>

                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                                Naviguez dans des sites complets pour vous
                                projeter. Chaque template correspond à une
                                offre et illustre ce que vous pouvez obtenir.
                            </p>
                        </div>
                    </div>

                    {/* Info banner */}
                    <div className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50/50 p-4 text-sm text-ink-700">
                        <AlertCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-brand-700"
                            aria-hidden="true"
                        />
                        <p>
                            Ces sites sont des{" "}
                            <strong>démonstrations à but illustratif</strong>.
                            Les entreprises et services présentés sont fictifs.
                            Le design et les fonctionnalités sont entièrement
                            personnalisables selon votre projet.
                        </p>
                    </div>
                </div>
            </section>

            {/* Templates by pack */}
            <section className="bg-white px-6 pb-16 sm:pb-20">
                <div className="mx-auto max-w-7xl space-y-20">
                    {PACKS_WITH_TEMPLATES.map((pack) => {
                        const packTemplates = templates.filter(
                            (template) => template.packId === pack.id
                        );

                        if (packTemplates.length === 0) return null;

                        return (
                            <section
                                key={pack.id}
                                id={pack.id}
                                aria-labelledby={`heading-${pack.id}`}
                                className="scroll-mt-32"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                    <div>
                                        <p className="font-display text-xs font-bold uppercase tracking-wider text-brand-700">
                                            {pack.priceLabel}
                                        </p>
                                        <h2
                                            id={`heading-${pack.id}`}
                                            className="mt-2 font-display font-bold text-ink-900 text-[clamp(1.5rem,2.5vw,2.25rem)]"
                                        >
                                            {pack.name}
                                        </h2>
                                        <p className="mt-2 max-w-2xl text-ink-500">
                                            {pack.tagline}
                                        </p>
                                    </div>
                                    <Link
                                        href={`/offres#${pack.id}`}
                                        className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                                    >
                                        Détails du pack
                                        <ArrowRight
                                            size={14}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>

                                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {packTemplates.map((template) => (
                                        <TemplateCard
                                            key={template.id}
                                            template={template}
                                        />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
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
                        Un template vous a tapé dans l'œil ?
                    </h2>
                    <p className="mt-4 text-base text-white/85 sm:text-lg">
                        Partez de cette base ou créons quelque chose
                        d'entièrement personnalisé. Discutons de votre projet.
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

function TemplateCard({ template }) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all hover:border-brand-300 hover:shadow-lg">
            <div className="relative aspect-video w-full overflow-hidden bg-ink-100">
                {template.previewImage ? (
                    <Image
                        src={template.previewImage}
                        alt={`Aperçu du template ${template.name}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-300 via-brand-500 to-brand-700 p-6 text-center"
                        role="img"
                        aria-label={`Aperçu indisponible — ${template.name}`}
                    >
                        <span className="font-display text-xl font-bold text-white drop-shadow">
                            {template.name}
                        </span>
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-ink-900">
                    {template.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {template.description}
                </p>

                {template.tags?.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {template.tags.map((tag) => (
                            <li
                                key={tag}
                                className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                ) : null}

                <a
                    href={template.demoUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-5 py-2.5 text-sm font-semibold !text-white shadow-md transition-all hover:shadow-lg hover:brightness-110"
                >
                    Voir le template
                    <ExternalLink
                        size={14}
                        aria-hidden="true"
                        className="transition-transform group-hover/btn:translate-x-0.5"
                    />
                </a>
            </div>
        </article>
    );
}
