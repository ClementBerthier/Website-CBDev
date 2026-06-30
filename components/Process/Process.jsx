import Link from "next/link";
import { ArrowRight, MessageSquare, Coffee, FileCheck } from "lucide-react";

const STEPS = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Vous me contactez",
        description:
            "Décrivez votre projet en quelques lignes via le formulaire, par mail ou par téléphone. Pas besoin d'un cahier des charges détaillé pour démarrer.",
    },
    {
        number: "02",
        icon: Coffee,
        title: "On échange ensemble",
        description:
            "Premier appel ou rendez-vous offert pour cadrer votre besoin, comprendre vos contraintes et identifier le pack adapté.",
    },
    {
        number: "03",
        icon: FileCheck,
        title: "Devis clair et détaillé",
        description:
            "Je vous présente un devis transparent et sans surprise lors d'un second appel ou rendez-vous. Vous décidez ensuite si vous voulez que l'on avance ensemble. Sans aucun engagement.",
    },
];

export default function Process() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-100 to-white px-6 py-20 sm:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-100/40 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand-50/60 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
                        Méthode
                    </span>
                    <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(2rem,3.5vw,3rem)]">
                        Comment ça se passe&nbsp;?
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink-500">
                        Un process simple, transparent et sans engagement. De
                        votre premier message au devis détaillé, en trois
                        étapes.
                    </p>
                </div>

                {/* Steps */}
                <ol className="relative mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3">
                    {/* Connecting line (desktop only) */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block"
                    />

                    {STEPS.map((step) => {
                        const Icon = step.icon;
                        return (
                            <li
                                key={step.number}
                                className="group relative flex flex-col rounded-3xl border border-ink-100 bg-white p-8 transition-all hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10"
                            >
                                {/* Icon badge */}
                                <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-100 to-brand-200/50 transition-transform group-hover:scale-110" />
                                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-300 to-brand-500 text-white shadow-lg shadow-brand-500/30">
                                        <Icon size={26} aria-hidden="true" />
                                    </div>
                                </div>

                                {/* Number */}
                                <p className="mt-4 text-center font-display text-xs font-bold uppercase tracking-widest text-brand-700">
                                    Étape {step.number}
                                </p>

                                {/* Content */}
                                <h3 className="mt-2 text-center font-display text-xl font-bold text-ink-900">
                                    {step.title}
                                </h3>
                                <p className="mt-3 text-center text-sm leading-relaxed text-ink-500">
                                    {step.description}
                                </p>
                            </li>
                        );
                    })}
                </ol>

                {/* CTA */}
                <div className="mt-14 flex flex-col items-center gap-3">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-8 py-4 font-display font-semibold !text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40 hover:brightness-110"
                    >
                        Démarrer un projet
                        <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                    <p className="text-sm text-ink-400">
                        Premier échange offert et sans engagement
                    </p>
                </div>
            </div>
        </section>
    );
}
