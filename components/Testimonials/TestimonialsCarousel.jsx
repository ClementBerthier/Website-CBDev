"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

/**
 * Avis affichés simultanément. Doit rester aligné sur `sm:grid-cols-2` :
 * changer l'un sans l'autre laisse une colonne vide ou déborde la grille.
 */
const TESTIMONIALS_PER_PAGE = 2;

const MAX_RATING = 5;

/** Découpe les avis en pages de `TESTIMONIALS_PER_PAGE`. */
function buildPages(testimonials) {
    const pages = [];
    for (let i = 0; i < testimonials.length; i += TESTIMONIALS_PER_PAGE) {
        pages.push(testimonials.slice(i, i + TESTIMONIALS_PER_PAGE));
    }
    return pages;
}

function TestimonialCard({ testimonial }) {
    return (
        <article className="relative flex flex-col rounded-2xl border border-ink-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10">
            <Quote
                size={28}
                className="absolute right-6 top-6 text-brand-200"
                aria-hidden="true"
            />

            {testimonial.rating ? (
                <div
                    className="flex gap-0.5"
                    aria-label={`Note ${testimonial.rating} sur ${MAX_RATING}`}
                >
                    {Array.from({ length: MAX_RATING }).map((_, idx) => (
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
                <p className="text-sm text-ink-500">{testimonial.role}</p>
            </footer>
        </article>
    );
}

/**
 * Carrousel paginé des témoignages clients.
 *
 * Toutes les pages sont rendues dans le DOM, les inactives étant masquées en
 * CSS : la page « À propos » déclare chaque avis en JSON-LD (Review), et un
 * balisage structuré sans contrepartie affichée risque d'être ignoré.
 *
 * Les flèches sont désactivées aux extrémités plutôt que de boucler : avec deux
 * pages, une boucle rendrait « précédent » et « suivant » rigoureusement
 * identiques et l'utilisateur perdrait sa position. Pas de défilement
 * automatique non plus, il prive le lecteur du contrôle de sa lecture.
 */
export default function TestimonialsCarousel({ testimonials }) {
    const [pageIndex, setPageIndex] = useState(0);

    const pages = buildPages(testimonials);
    const isFirstPage = pageIndex === 0;
    const isLastPage = pageIndex === pages.length - 1;

    const handlePreviousPage = () => {
        setPageIndex((current) => Math.max(0, current - 1));
    };

    const handleNextPage = () => {
        setPageIndex((current) => Math.min(pages.length - 1, current + 1));
    };

    /*
     * L'anneau de focus est opaque à 60 % et doublé d'un changement de bordure :
     * sur le fond bleu clair de la section, un anneau translucide passe
     * inaperçu et l'indicateur de focus devient inexploitable au clavier.
     */
    const arrowClassName =
        "flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all hover:border-brand-200 hover:text-brand-700 focus-visible:border-brand-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/60 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-ink-200 disabled:hover:text-ink-700";

    return (
        <div
            role="group"
            aria-roledescription="Carrousel"
            aria-label="Témoignages clients"
        >
            <div aria-live="polite">
                {pages.map((page, idx) => (
                    <div
                        key={idx}
                        className={`gap-6 sm:grid-cols-2 ${
                            idx === pageIndex ? "grid" : "hidden"
                        }`}
                    >
                        {page.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {pages.length > 1 ? (
                <div className="mt-8 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={handlePreviousPage}
                        disabled={isFirstPage}
                        aria-label="Témoignages précédents"
                        className={arrowClassName}
                    >
                        <ChevronLeft size={20} aria-hidden="true" />
                    </button>

                    <div className="flex items-center gap-2">
                        {pages.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setPageIndex(idx)}
                                aria-label={`Afficher les témoignages ${idx + 1} sur ${pages.length}`}
                                aria-current={
                                    idx === pageIndex ? "true" : undefined
                                }
                                className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 ${
                                    idx === pageIndex
                                        ? "w-6 bg-gradient-to-r from-brand-300 to-brand-500"
                                        : "w-2 bg-ink-200 hover:bg-ink-300"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleNextPage}
                        disabled={isLastPage}
                        aria-label="Témoignages suivants"
                        className={arrowClassName}
                    >
                        <ChevronRight size={20} aria-hidden="true" />
                    </button>
                </div>
            ) : null}
        </div>
    );
}
