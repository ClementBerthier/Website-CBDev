import Link from "next/link";
import Image from "next/image";
import projectsList from "@/data/projectsList.json";
import { FolderGit2, ArrowUpRight, ArrowRight } from "lucide-react";

const LATEST_PROJECTS_COUNT = 2;

const LATEST_PROJECTS = [...projectsList]
    .sort((a, b) => Number(b.year) - Number(a.year) || b.id - a.id)
    .slice(0, LATEST_PROJECTS_COUNT);

export default function ProjectsTeaser() {
    if (LATEST_PROJECTS.length === 0) return null;

    return (
        <section className="bg-gradient-to-b from-brand-100 via-brand-50 to-white px-6 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
                        <FolderGit2 size={12} />
                        Réalisations
                    </span>
                    <h2 className="mt-4 font-display font-bold text-ink-900 text-[clamp(1.75rem,3vw,2.5rem)]">
                        Mes derniers{" "}
                        <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                            projets
                        </span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                        Un aperçu des sites web réalisés pour des artisans,
                        indépendants et PME.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {LATEST_PROJECTS.map((project) => (
                        <Link
                            key={project.id}
                            href="/projets"
                            className="group relative block overflow-hidden rounded-2xl border border-ink-100 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10"
                        >
                            <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={project.imageWidth}
                                    height={project.imageHeight}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="max-h-full max-w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-700 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>

                            <div className="flex flex-col p-5">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.categories.map((cat) => (
                                            <span
                                                key={cat}
                                                className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="shrink-0 text-xs font-medium text-ink-400">
                                        {project.year}
                                    </span>
                                </div>
                                <h3 className="mt-3 font-display text-lg font-bold text-ink-900">
                                    {project.title}
                                </h3>
                                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-500">
                                    {project.blurb}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/projets"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-6 py-3 text-sm font-medium text-white shadow-md shadow-brand-500/20 transition-all hover:shadow-lg hover:brightness-110"
                    >
                        Voir tous mes projets
                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
