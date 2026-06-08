"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import projectsList from "@/data/projectsList.json";
import {
    Search,
    ChevronRight,
    X,
    ExternalLink,
    Calendar,
    ArrowUpRight,
} from "lucide-react";

const SORTED_PROJECTS = [...projectsList].sort(
    (a, b) => Number(b.year) - Number(a.year)
);
const ALL_CATEGORIES = [
    ...new Set(SORTED_PROJECTS.flatMap((p) => p.categories)),
];
const ALL_YEARS = [...new Set(SORTED_PROJECTS.map((p) => p.year))].sort(
    (a, b) => Number(b) - Number(a)
);

export default function Projects() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleCategory = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const handleYearChange = (year) => {
        setSelectedYears(year === "all" ? [] : [year]);
    };

    const search = searchTerm.toLowerCase().trim();
    const filteredProjects = SORTED_PROJECTS.filter((project) => {
        const matchCategory =
            selectedCategories.length === 0 ||
            project.categories.some((c) => selectedCategories.includes(c));
        const matchYear =
            selectedYears.length === 0 ||
            selectedYears.includes(project.year);
        const matchSearch =
            search === "" ||
            project.title.toLowerCase().includes(search) ||
            project.description.toLowerCase().includes(search) ||
            project.tech.some((t) => t.toLowerCase().includes(search));
        return matchCategory && matchYear && matchSearch;
    });

    useEffect(() => {
        document.body.style.overflow = selectedProject ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

    const hasCollaborators =
        selectedProject &&
        selectedProject.collaborators.some((c) => c !== "");

    return (
        <>
            {/* Hero — card centered, not full-bleed */}
            <section className="bg-white px-6 pb-12 pt-32 sm:pt-40">
                <div className="mx-auto max-w-7xl">
                    {/* Breadcrumb */}
                    <nav
                        aria-label="Fil d'Ariane"
                        className="mb-6 flex items-center gap-1.5 text-sm text-ink-400"
                    >
                        <Link
                            href="/"
                            className="transition-colors hover:text-brand-700"
                        >
                            Accueil
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-ink-700">Projets</span>
                    </nav>

                    {/* Hero card */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-700 to-brand-900 px-6 py-12 text-white shadow-2xl shadow-brand-500/20 sm:px-12 sm:py-16">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
                        />

                        <div className="relative">
                            <h1 className="font-display font-bold leading-tight text-[clamp(2rem,4vw,3.75rem)]">
                                Mes{" "}
                                <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
                                    réalisations
                                </span>
                            </h1>
                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                                Une sélection de projets web et IA réalisés
                                pour des artisans, indépendants et PME.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters bar */}
            <section className="border-b border-ink-100 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-6">
                    {/* Search */}
                    <div className="relative max-w-md">
                        <Search
                            size={18}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"
                        />
                        <input
                            type="text"
                            placeholder="Rechercher un projet, une techno..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-full border-2 border-ink-100 bg-white py-2.5 pl-11 pr-4 text-sm text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10"
                        />
                    </div>

                    {/* Categories + Year */}
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                        <div className="flex flex-1 flex-wrap gap-2">
                            {ALL_CATEGORIES.map((category) => {
                                const isActive =
                                    selectedCategories.includes(category);
                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            toggleCategory(category)
                                        }
                                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                                            isActive
                                                ? "bg-gradient-to-r from-brand-300 to-brand-500 text-white shadow-md shadow-brand-500/20"
                                                : "border border-ink-200 bg-white text-ink-600 hover:border-brand-200 hover:text-brand-700"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-ink-400" />
                            <select
                                value={selectedYears[0] ?? "all"}
                                onChange={(e) =>
                                    handleYearChange(e.target.value)
                                }
                                className="cursor-pointer rounded-full border border-ink-200 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-brand-200 focus:border-brand-500 focus:outline-none"
                            >
                                <option value="all">Toutes les années</option>
                                {ALL_YEARS.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects grid */}
            <section className="bg-white px-6 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    {filteredProjects.length === 0 ? (
                        <div className="rounded-2xl border border-ink-100 bg-ink-100/30 p-16 text-center">
                            <p className="font-display text-xl font-semibold text-ink-700">
                                Aucun projet trouvé
                            </p>
                            <p className="mt-2 text-sm text-ink-500">
                                Essayez d&apos;ajuster vos filtres.
                            </p>
                        </div>
                    ) : (
                        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
                            {filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="mb-6 break-inside-avoid"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedProject(project)
                                        }
                                        className="group relative block w-full overflow-hidden rounded-2xl border border-ink-100 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10"
                                    >
                                        {/* Image — natural ratio for masonry effect */}
                                        <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={project.imageWidth}
                                                height={project.imageHeight}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                                className="block h-auto w-full p-4 transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-700 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                                                <ArrowUpRight size={18} />
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="flex flex-col p-5">
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.categories.map(
                                                        (cat) => (
                                                            <span
                                                                key={cat}
                                                                className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700"
                                                            >
                                                                {cat}
                                                            </span>
                                                        )
                                                    )}
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
                                            <div className="mt-4 flex flex-wrap gap-1.5">
                                                {project.tech
                                                    .slice(0, 4)
                                                    .map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="rounded-md border border-ink-100 bg-white px-2 py-0.5 text-xs text-ink-600"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                {project.tech.length > 4 ? (
                                                    <span className="rounded-md border border-ink-100 bg-white px-2 py-0.5 text-xs text-ink-400">
                                                        +
                                                        {project.tech.length -
                                                            4}
                                                    </span>
                                                ) : null}
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Modal */}
            {selectedProject ? (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/70 px-4 backdrop-blur-md"
                    onClick={() => setSelectedProject(null)}
                    role="presentation"
                >
                    <div
                        className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                    >
                        {/* Hero image */}
                        <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                width={selectedProject.imageWidth}
                                height={selectedProject.imageHeight}
                                sizes="(max-width: 768px) 100vw, 672px"
                                className="max-h-full max-w-full object-contain p-6"
                            />
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Fermer"
                                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-700 backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-wrap gap-1.5">
                                    {selectedProject.categories.map((cat) => (
                                        <span
                                            key={cat}
                                            className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-ink-400">
                                    {selectedProject.year}
                                </span>
                            </div>
                            <h2
                                id="project-modal-title"
                                className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl"
                            >
                                {selectedProject.title}
                            </h2>
                            <p className="mt-4 leading-relaxed text-ink-500">
                                {selectedProject.description}
                            </p>

                            <div className="mt-6">
                                <p className="font-display text-xs font-bold uppercase tracking-wider text-ink-400">
                                    Technologies
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {selectedProject.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-ink-100 bg-ink-100/50 px-2.5 py-1 text-xs font-medium text-ink-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {hasCollaborators ? (
                                <div className="mt-6">
                                    <p className="font-display text-xs font-bold uppercase tracking-wider text-ink-400">
                                        Collaborateurs
                                    </p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {selectedProject.collaborators.map(
                                            (collab, index) =>
                                                collab !== "" ? (
                                                    <a
                                                        key={index}
                                                        href={
                                                            selectedProject
                                                                .collaboratorsLinks[
                                                                index
                                                            ]
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 rounded-md border border-brand-200 bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 transition-colors hover:bg-brand-100"
                                                    >
                                                        {collab}
                                                        <ExternalLink
                                                            size={11}
                                                        />
                                                    </a>
                                                ) : null
                                        )}
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        {/* Footer */}
                        <div className="flex flex-col-reverse gap-3 border-t border-ink-100 bg-ink-100/30 px-6 py-4 sm:flex-row sm:items-center sm:justify-end sm:px-8">
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                className="rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:border-ink-300"
                            >
                                Fermer
                            </button>
                            {selectedProject.link === "" ? (
                                <Link
                                    href="/underConstruction"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-brand-500/20 transition-all hover:shadow-lg hover:brightness-110"
                                >
                                    Voir le site
                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </Link>
                            ) : (
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-brand-500/20 transition-all hover:shadow-lg hover:brightness-110"
                                >
                                    Voir le site
                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
