"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error("Page render error:", error);
    }, [error]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-white via-brand-50/40 to-brand-100 px-6 py-24">
            <div className="mx-auto max-w-xl text-center">
                <h1 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                    Une erreur est survenue
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-ink-500">
                    Quelque chose ne s&apos;est pas passé comme prévu. Vous
                    pouvez réessayer ou revenir à l&apos;accueil.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-7 py-3 font-semibold !text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:brightness-110"
                    >
                        <RefreshCw size={18} />
                        Réessayer
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink-200 bg-white px-7 py-3 font-medium text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-700"
                    >
                        <Home size={18} />
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>
        </main>
    );
}
