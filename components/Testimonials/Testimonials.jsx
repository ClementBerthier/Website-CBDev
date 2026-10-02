import { Quote } from "lucide-react";
import TestimonialsCarousel from "./TestimonialsCarousel";

/**
 * Section « Ils m'ont fait confiance ».
 *
 * Reste un Server Component : seul le carrousel a besoin d'état client, et
 * l'en-tête n'a aucune raison de partir dans le bundle du navigateur.
 */
export default function Testimonials({ testimonials }) {
    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section className="bg-gradient-to-b from-white via-brand-50 to-brand-100 px-6 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
                        <Quote size={12} />
                        Témoignages
                    </span>
                    <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(1.75rem,3vw,2.5rem)]">
                        Ils m&apos;ont fait{" "}
                        <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                            confiance
                        </span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                        Retour des clients accompagnés sur leurs projets web et
                        d&apos;automatisation.
                    </p>
                </div>

                <div className="mt-12">
                    <TestimonialsCarousel testimonials={testimonials} />
                </div>
            </div>
        </section>
    );
}
