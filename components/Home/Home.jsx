import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-brand-50/40 to-brand-100">
            {/* Decorative blurs */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
            />

            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 pb-16 pt-40 lg:flex-row lg:gap-16 lg:pt-44">
                {/* Left — text */}
                <div className="flex flex-1 flex-col items-center justify-center text-center lg:items-start lg:text-left">
                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur">
                        <Sparkles size={14} className="text-brand-700" />
                        Disponible pour vos projets
                    </span>

                    <h1 className="font-display font-bold leading-tight text-ink-900 text-[clamp(1.75rem,5.5vw,4rem)]">
                        Clément Berthier
                    </h1>
                    <p className="mt-3 font-display font-semibold text-ink-700 text-[clamp(1.125rem,2.5vw,1.875rem)]">
                        Développeur Web{" "}
                        <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                            & Automatisation IA
                        </span>
                    </p>

                    <p className="mt-6 max-w-xl leading-relaxed text-ink-500 text-[clamp(0.95rem,1.4vw,1.125rem)]">
                        Sites pro et systèmes intelligents pour artisans,
                        indépendants et PME.
                        <br />
                        <span className="font-semibold text-ink-700">
                            Plus de visibilité, plus de clients.
                        </span>
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-500">
                        <MapPin size={16} className="text-brand-700" />
                        Castres, Mazamet — Tarn / Occitanie
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/#services"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-7 py-3 font-semibold !text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40 hover:brightness-110"
                        >
                            Voir mes services
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                        <Link
                            href="/projets"
                            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink-200 bg-white px-7 py-3 font-medium text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-700"
                        >
                            Voir mes projets
                        </Link>
                    </div>
                </div>

                {/* Right — avatar */}
                <div className="relative flex w-full items-center justify-center lg:flex-1">
                    <div
                        aria-hidden="true"
                        className="absolute h-3/4 w-3/4 rounded-full bg-gradient-to-tr from-brand-500/40 via-brand-300/30 to-transparent blur-3xl"
                    />
                    <Image
                        src="/images/avatar_dev.AVIF"
                        alt="Illustration de Clément Berthier, développeur web freelance"
                        width={899}
                        height={661}
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 1024px) 70vw, 50vw"
                        className="relative w-full max-w-sm drop-shadow-2xl lg:max-w-xl"
                    />
                </div>
            </div>
        </div>
    );
}
