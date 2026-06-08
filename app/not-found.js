import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Page introuvable",
    description:
        "La page que vous recherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-white via-brand-50/40 to-brand-100 px-6 py-24">
            <div className="mx-auto max-w-xl text-center">
                <p className="font-display text-9xl font-bold text-brand-700">
                    404
                </p>
                <h1 className="mt-6 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                    Cette page n&apos;existe pas
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-ink-500">
                    Le lien est peut-être obsolète, ou l&apos;adresse a été mal
                    saisie. Aucun souci, retournons en terrain connu.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-7 py-3 font-semibold !text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:brightness-110"
                    >
                        <Home size={18} />
                        Retour à l&apos;accueil
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink-200 bg-white px-7 py-3 font-medium text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-700"
                    >
                        <ArrowLeft size={18} />
                        Me contacter
                    </Link>
                </div>
            </div>
        </main>
    );
}
