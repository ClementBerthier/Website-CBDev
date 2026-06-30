import { Quote, Star } from "lucide-react";

export default function Testimonials({ testimonials }) {
    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section className="bg-gradient-to-b from-white via-brand-100 to-white px-6 py-16 sm:py-24">
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

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.id}
                            className="relative flex flex-col rounded-2xl border border-ink-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10"
                        >
                            <Quote
                                size={28}
                                className="absolute right-6 top-6 text-brand-200"
                                aria-hidden="true"
                            />

                            {testimonial.rating ? (
                                <div
                                    className="flex gap-0.5"
                                    aria-label={`Note ${testimonial.rating} sur 5`}
                                >
                                    {Array.from({ length: 5 }).map((_, idx) => (
                                        <Star
                                            key={idx}
                                            size={16}
                                            className={
                                                idx < testimonial.rating
                                                    ? "fill-brand-500 text-brand-500"
                                                    : "text-ink-200"
                                            }
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            ) : null}

                            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-700">
                                <p>« {testimonial.text} »</p>
                            </blockquote>

                            <footer className="mt-6 border-t border-ink-100 pt-4">
                                <p className="font-display font-bold text-ink-900">
                                    {testimonial.author}
                                </p>
                                <p className="text-sm text-ink-500">
                                    {testimonial.role}
                                </p>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
