import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import packs from "@/data/packs.json";

const MIN_PRICE = Math.min(...packs.map((pack) => pack.price).filter(Boolean));

export default function PricingTeaser() {
    return (
        <div className="bg-gradient-to-b from-white via-brand-50 to-brand-100 px-6 py-16 sm:py-20">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-brand-100 px-6 py-12 shadow-sm sm:px-12">
                <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
                            <Tag size={12} />
                            Tarifs
                        </span>
                        <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(1.5rem,2.5vw,2.25rem)]">
                            Des offres claires, sans surprise
                        </h2>
                        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-600">
                            Chaque projet est unique. Découvrez les packs et leur
                            prix de départ pour trouver celui qui correspond à
                            votre besoin et à votre budget.
                        </p>
                    </div>

                    <div className="flex shrink-0 flex-col items-center gap-4">
                        <div className="text-center">
                            <p className="text-sm font-medium text-ink-500">
                                À partir de
                            </p>
                            <p className="font-display text-4xl font-bold text-brand-700 sm:text-5xl">
                                {MIN_PRICE}€
                            </p>
                        </div>
                        <Link
                            href="/offres"
                            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-7 py-3.5 font-medium text-white shadow-md shadow-brand-500/20 transition-all hover:shadow-lg hover:brightness-110"
                        >
                            Voir les offres
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
