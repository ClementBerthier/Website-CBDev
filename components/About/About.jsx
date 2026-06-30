import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    ChevronRight,
    ChevronDown,
    Code,
    Server,
    Bot,
    Wrench,
    Shield,
    Zap,
    HeartHandshake,
    Sparkles,
    GraduationCap,
    BadgeCheck,
    Gauge,
    MapPin,
    Compass,
    Code2,
} from "lucide-react";

const SKILLS = [
    {
        title: "Front-end",
        icon: Code,
        items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
        title: "Back-end",
        icon: Server,
        items: ["Node.js", "PostgreSQL", "Supabase", "REST API"],
    },
    {
        title: "Automatisation IA",
        icon: Bot,
        items: ["n8n", "OpenAI API", "Anthropic API", "Workflows IA"],
    },
    {
        title: "Outils",
        icon: Wrench,
        items: ["Git", "GitHub", "Vercel", "Docker", "Claude", "VS Code"],
    },
];

const VALUES = [
    {
        icon: Compass,
        title: "Études",
        text: "Cadrage approfondi de votre besoin, analyse de votre activité, conseils stratégiques. On s'assure de développer la bonne chose, pas juste ce qui est à la mode.",
    },
    {
        icon: Code2,
        title: "Développement",
        text: "Réalisation technique avec une stack moderne (Next.js, React, IA). Code propre, performant et maintenable, livré avec tous les standards de qualité.",
    },
    {
        icon: HeartHandshake,
        title: "Accompagnement",
        text: "Formation à l'utilisation, support technique, maintenance et évolutions. Vous repartez autonome, sans dépendance forcée.",
    },
];

const TRAININGS = [
    {
        year: "2023",
        title: "Spécialisation Data Back-end",
        school: "École O'clock",
        description:
            "Approfondissement des compétences back-end : conception et requêtage de bases de données relationnelles (PostgreSQL), création d'API REST, gestion de l'authentification et de la sécurité, manipulation de données complexes.",
    },
    {
        year: "2023",
        title: "Spécialisation Front-end React",
        school: "École O'clock",
        description:
            "Maîtrise avancée de React et de son écosystème : hooks, gestion d'état, performance, animations, accessibilité, intégration de design systems et bonnes pratiques d'architecture front-end.",
    },
    {
        year: "2022",
        title: "Développeur Fullstack JavaScript",
        school: "École O'clock",
        description:
            "Formation intensive en développement web fullstack : JavaScript moderne, React, Node.js, Express, bases de données, méthodologies agiles. Obtention du titre RNCP de niveau 5 (Développeur web et web mobile).",
    },
    {
        year: "2013",
        title: "Brevet de technicien aéronautique sur Rafale",
        school: "Rochefort",
        description:
            "Formation technique de haut niveau en aéronautique. Compétences en maintenance d'avions de chasse Rafale : rigueur, méthode, précision technique et travail en équipe sous contraintes opérationnelles.",
    },
];

const COMMITMENTS = [
    {
        icon: Gauge,
        title: "Sites modernes & rapides",
        text: "Next.js, mobile-first, SEO local intégré. Des sites qui chargent vite et performent sur Google.",
    },
    {
        icon: Bot,
        title: "Web + Automatisation IA",
        text: "Double compétence : sites professionnels et workflows IA pour automatiser vos tâches répétitives.",
    },
    {
        icon: MapPin,
        title: "Local & accessible",
        text: "Basé entre Castres et Mazamet (Tarn). Contact direct, sans intermédiaire. Devis transparent, code 100% livré.",
    },
];

export default function About() {
    return (
        <>
            {/* Hero — card centered, not full-bleed */}
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
                        <span className="text-ink-700">À propos</span>
                    </nav>

                    {/* Hero card */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-700 to-brand-900 px-6 py-12 text-white shadow-2xl shadow-brand-500/20 sm:px-12 sm:py-16">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
                        />

                        <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                            {/* Text */}
                            <div className="lg:col-span-7">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                                    <Sparkles size={14} />
                                    Qui suis-je
                                </span>

                                <h1 className="mt-5 font-display font-bold leading-tight text-[clamp(2rem,4vw,3.75rem)]">
                                    Clément{" "}
                                    <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
                                        Berthier
                                    </span>
                                </h1>
                                <p className="mt-3 font-display text-lg font-semibold text-white/90 sm:text-xl">
                                    Développeur Web & Automatisation IA
                                    freelance à Castres et Mazamet (Tarn)
                                </p>
                                <p className="mt-2 text-sm font-medium text-brand-200">
                                    Freelance depuis 2022 · Parcours hybride
                                    aéronautique & développement web
                                </p>
                                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                                    Je conçois des sites et des outils
                                    intelligents pour les artisans,
                                    indépendants et TPE/PME qui veulent
                                    transformer leur visibilité web et
                                    automatiser leurs tâches répétitives.
                                </p>
                            </div>

                            {/* Avatar */}
                            <div className="relative flex items-center justify-center lg:col-span-5">
                                <div
                                    aria-hidden="true"
                                    className="absolute h-3/4 w-3/4 rounded-full bg-gradient-to-tr from-brand-500/40 via-brand-300/30 to-transparent blur-3xl"
                                />
                                <Image
                                    src="/images/avatar_dev.AVIF"
                                    alt="Portrait de Clément Berthier, développeur web freelance à Mazamet"
                                    width={899}
                                    height={661}
                                    priority
                                    sizes="(max-width: 1024px) 80vw, 35vw"
                                    className="relative w-full max-w-sm drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagements */}
            <section className="bg-white px-6 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-6 sm:grid-cols-3">
                        {COMMITMENTS.map((commitment) => {
                            const Icon = commitment.icon;
                            return (
                                <div
                                    key={commitment.title}
                                    className="rounded-2xl border border-ink-100 bg-gradient-to-br from-brand-50 to-white p-8 text-center shadow-sm"
                                >
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700">
                                        <Icon size={26} strokeWidth={1.8} />
                                    </div>
                                    <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                                        {commitment.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                                        {commitment.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mon parcours */}
            <section className="bg-gradient-to-b from-white via-brand-100 to-white px-6 py-16 sm:py-24">
                <div className="mx-auto max-w-4xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
                        Parcours
                    </span>
                    <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(1.75rem,3vw,2.5rem)]">
                        Mon parcours
                    </h2>
                    <div className="mt-6 rounded-2xl border-l-4 border-brand-500 bg-white p-6 shadow-sm sm:p-8">
                        <p className="text-base leading-relaxed text-ink-500 sm:text-lg">
                            Ancien mécanicien aéronautique sur Rafales, je me
                            suis reconverti dans le développement web.
                            J&apos;ai suivi une formation fullstack à
                            l&apos;école O&apos;clock et obtenu mon titre
                            RNCP Développeur web et web mobile (niveau 5).
                            De ce premier métier, j&apos;ai gardé une
                            exigence forte : la rigueur, la méthode et
                            l&apos;attention aux détails qui font la
                            différence sur un projet web.
                            Aujourd&apos;hui en freelance, j&apos;accompagne
                            les artisans, indépendants et TPE/PME dans leurs
                            projets : sites, applications et automatisation
                            IA.
                        </p>
                    </div>
                </div>
            </section>

            {/* Compétences */}
            <section className="bg-white px-6 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
                            Compétences
                        </span>
                        <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(1.75rem,3vw,2.5rem)]">
                            Ce que je{" "}
                            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                                maîtrise
                            </span>
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                            Une stack moderne, choisie pour la performance, la
                            maintenabilité et la sécurité.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {SKILLS.map((group) => {
                            const Icon = group.icon;
                            return (
                                <div
                                    key={group.title}
                                    className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 transition-colors group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white">
                                        <Icon size={22} strokeWidth={1.8} />
                                    </div>
                                    <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                                        {group.title}
                                    </h3>
                                    <ul className="mt-4 flex flex-wrap gap-1.5">
                                        {group.items.map((item) => (
                                            <li
                                                key={item}
                                                className="rounded-md border border-ink-100 bg-ink-100/40 px-2 py-0.5 text-xs font-medium text-ink-700"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Formations / certifications */}
            <section className="bg-gradient-to-b from-white via-brand-100 to-white px-6 py-16 sm:py-24">
                <div className="mx-auto max-w-4xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
                        <GraduationCap size={12} />
                        Formations
                    </span>
                    <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(1.75rem,3vw,2.5rem)]">
                        Formations & certifications
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                        Mon parcours d&apos;apprentissage, de
                        l&apos;aéronautique au développement web.
                    </p>
                    <ul className="mt-8 space-y-3">
                        {TRAININGS.map((item, index) => (
                            <li key={index}>
                                <details className="group rounded-2xl border-l-4 border-brand-500 bg-white shadow-sm transition-shadow open:shadow-md">
                                    <summary className="flex cursor-pointer list-none items-start gap-4 p-5 marker:hidden [&::-webkit-details-marker]:hidden">
                                        <div className="shrink-0 font-display text-xs font-bold uppercase tracking-wider text-brand-700">
                                            {item.year}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-display font-bold text-ink-900">
                                                {item.title}
                                            </p>
                                            <p className="mt-1 text-sm text-ink-500">
                                                {item.school}
                                            </p>
                                        </div>
                                        <ChevronDown
                                            size={18}
                                            className="mt-1 shrink-0 text-brand-700 transition-transform duration-300 group-open:rotate-180"
                                        />
                                    </summary>
                                    <p className="border-t border-ink-100 px-5 py-4 text-sm leading-relaxed text-ink-500">
                                        {item.description}
                                    </p>
                                </details>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Valeurs */}
            <section className="bg-white px-6 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
                            Méthode
                        </span>
                        <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(1.75rem,3vw,2.5rem)]">
                            Comment je{" "}
                            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                                travaille
                            </span>
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-3">
                        {VALUES.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="group rounded-2xl border border-ink-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 transition-colors group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white">
                                            <Icon size={26} strokeWidth={1.8} />
                                        </div>
                                        <span className="font-display text-3xl font-bold text-brand-100">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <h3 className="mt-6 font-display text-xl font-bold text-ink-900">
                                        {value.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                                        {value.text}
                                    </p>
                                </div>
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
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
                />

                <div className="relative mx-auto max-w-3xl text-center">
                    <h2 className="font-display font-bold text-white text-[clamp(1.75rem,3.5vw,3rem)]">
                        Discutons de votre projet
                    </h2>
                    <p className="mt-4 text-base text-white/85 sm:text-lg">
                        Premier appel ou rendez-vous offert pour cadrer vos
                        besoins et estimer le projet.
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
