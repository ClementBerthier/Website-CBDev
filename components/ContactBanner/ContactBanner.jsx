import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ContactBanner() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-700 to-brand-900 px-6 py-20 sm:py-24">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
            />

            <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
                <div className="flex items-center gap-5">
                    <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm sm:flex">
                        <MessageCircle
                            size={32}
                            strokeWidth={1.8}
                            className="text-white"
                        />
                    </div>
                    <div>
                        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                            Un projet en tête ?
                        </h2>
                        <p className="mt-2 text-base text-white/85 sm:text-lg">
                            Échange gratuit pour cadrer vos besoins.
                        </p>
                    </div>
                </div>

                <Link
                    href="/contact"
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-brand-700 shadow-xl transition-all hover:shadow-2xl hover:brightness-105"
                >
                    Me contacter
                    <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </div>
    );
}
