import Link from "next/link";
import {
    Globe,
    AppWindow,
    ShoppingCart,
    RefreshCw,
    Search,
    Workflow,
    ArrowRight,
} from "lucide-react";

const SERVICES = [
    {
        icon: Globe,
        title: "Sites vitrines",
        description:
            "Une vitrine 24/7 pour votre activité. Pages soignées, mobile-first, SEO local intégré.",
        href: "/services/sites-vitrines",
    },
    {
        icon: AppWindow,
        title: "Applications web",
        description:
            "Outils métier sur mesure. Gestion clients, planning, devis, automatisation des tâches répétitives.",
        href: "/services/applications-web",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce",
        description:
            "Boutique en ligne complète. Catalogue, paiement, suivi commandes, livraison.",
        href: "/services/e-commerce",
    },
    {
        icon: RefreshCw,
        title: "Refonte & maintenance",
        description:
            "Modernisation d'un site existant ou maintenance technique régulière. Sécurité, performance, contenus à jour.",
        href: "/services/refonte-maintenance",
    },
    {
        icon: Search,
        title: "SEO local",
        description:
            "Apparaître quand vos clients vous cherchent à Castres, Mazamet, Toulouse. Google Business, contenu optimisé.",
        href: "/services/seo-local",
    },
    {
        icon: Workflow,
        title: "Automatisation",
        description:
            "Workflows n8n et agents IA pour automatiser vos tâches répétitives. Gagnez du temps, réduisez les erreurs.",
        href: "/services/automatisation-ia",
    },
];

export default function Services() {
    return (
        <div className="bg-gradient-to-bl from-brand-100 via-brand-100/80 to-brand-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
                        Services web
                    </span>
                    <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(2rem,4vw,3rem)]">
                        Ce que je peux faire{" "}
                        <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                            pour votre activité
                        </span>
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink-500">
                        Des solutions web pensées pour les artisans, indépendants
                        et PME. Choisissez ce qui correspond à votre besoin.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10"
                            >
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 transition-colors group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white">
                                    <Icon size={28} strokeWidth={1.8} />
                                </div>
                                <h3 className="font-display text-xl font-bold text-ink-900">
                                    {service.title}
                                </h3>
                                <p className="mt-3 flex-1 text-base leading-relaxed text-ink-500">
                                    {service.description}
                                </p>
                                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-transform group-hover:gap-3">
                                    Découvrir le service
                                    <span className="sr-only">
                                        {" "}
                                        {service.title.toLowerCase()}
                                    </span>
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
