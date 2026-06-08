import Link from "next/link";
import Contact from "@/components/Contact/Contact";
import ContactMap from "@/components/ContactMap/ContactMap";
import { ChevronRight, MapPin, Globe, Clock } from "lucide-react";

const INTERVENTION_AREAS = [
    "Castres",
    "Mazamet",
    "Albi",
    "Carmaux",
    "Gaillac",
    "Pont-de-l'Arn",
    "Aussillon",
    "Saint-Amans-Soult",
];

export default function ContactPage() {
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
                        <span className="text-ink-700">Contact</span>
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
                                <MapPin size={14} />
                                Mazamet (Pont-de-l&apos;Arn) · Tarn
                            </span>

                            <h1 className="mt-4 font-display font-bold leading-tight text-[clamp(2rem,4vw,3.75rem)]">
                                Me contacter
                            </h1>

                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                                Un projet, une question, un besoin
                                d&apos;automatisation ? Discutons-en. Premier
                                échange offert et sans engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map + intervention area */}
            <section className="bg-white px-6 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
                        {/* Map */}
                        <div className="lg:col-span-3">
                            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                                Où me trouver
                            </h2>
                            <p className="mt-3 text-ink-500">
                                Basé à Pont-de-l&apos;Arn, dans le sud du Tarn,
                                à deux pas de Castres et Mazamet.
                            </p>
                            <div className="mt-6 overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
                                <ContactMap />
                            </div>
                        </div>

                        {/* Zone d'intervention */}
                        <aside className="lg:col-span-2">
                            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                                Zone d&apos;intervention
                            </h2>

                            <div className="mt-6 space-y-5">
                                <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-ink-900">
                                            En présentiel
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-ink-500">
                                            J&apos;interviens auprès des
                                            entreprises, artisans et
                                            indépendants du sud du Tarn et de
                                            l&apos;Occitanie.
                                        </p>
                                        <ul className="mt-3 flex flex-wrap gap-2">
                                            {INTERVENTION_AREAS.map((city) => (
                                                <li
                                                    key={city}
                                                    className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                                                >
                                                    {city}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                                        <Globe size={18} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-ink-900">
                                            À distance
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-ink-500">
                                            La majorité de mes prestations sont
                                            réalisables à distance, partout en
                                            France et au-delà.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                                        <Clock size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display font-bold text-ink-900">
                                            Disponibilité
                                        </h3>
                                        <dl className="mt-3 divide-y divide-ink-100 text-sm">
                                            <div className="flex items-baseline justify-between gap-3 pb-2">
                                                <dt className="font-medium text-ink-700">
                                                    Lundi – jeudi
                                                </dt>
                                                <dd className="text-right text-ink-500">
                                                    9h – 12h30
                                                    <br />
                                                    14h – 18h
                                                </dd>
                                            </div>
                                            <div className="flex items-baseline justify-between gap-3 py-2">
                                                <dt className="font-medium text-ink-700">
                                                    Vendredi
                                                </dt>
                                                <dd className="text-right text-ink-500">
                                                    9h – 12h30
                                                </dd>
                                            </div>
                                            <div className="flex items-baseline justify-between gap-3 pt-2">
                                                <dt className="font-medium text-ink-700">
                                                    Samedi – dimanche
                                                </dt>
                                                <dd className="text-right italic text-ink-400">
                                                    Fermé
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Existing Contact component (form + coords + socials) */}
            <Contact />
        </>
    );
}
