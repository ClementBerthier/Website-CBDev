import services from "@/data/services.json";

const BASE_URL = "https://www.clementberthierdeveloppeur.fr";

/**
 * Last content update per route, in ISO date form.
 *
 * These dates MUST reflect real content changes only. Deriving them from the
 * build date makes every URL look modified on each deploy: Google detects the
 * unreliable lastmod, stops trusting it and deprioritises sitemap re-reads.
 * Bump a value here when the corresponding page content actually changes.
 */
const LAST_MODIFIED = {
    home: "2026-07-17",
    offres: "2026-06-08",
    services: "2026-06-08",
    templates: "2026-06-08",
    projets: "2026-06-08",
    aPropos: "2026-06-18",
    contact: "2026-06-08",
    mentionsLegales: "2026-06-30",
    serviceDetail: "2026-06-18",
};

export default function sitemap() {
    const staticRoutes = [
        {
            url: `${BASE_URL}/`,
            lastModified: LAST_MODIFIED.home,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/offres`,
            lastModified: LAST_MODIFIED.offres,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: LAST_MODIFIED.services,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/templates`,
            lastModified: LAST_MODIFIED.templates,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/projets`,
            lastModified: LAST_MODIFIED.projets,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/a-propos`,
            lastModified: LAST_MODIFIED.aPropos,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: LAST_MODIFIED.contact,
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/mentions-legales`,
            lastModified: LAST_MODIFIED.mentionsLegales,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    const serviceRoutes = services.map((service) => ({
        url: `${BASE_URL}/services/${service.slug}`,
        lastModified: LAST_MODIFIED.serviceDetail,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticRoutes, ...serviceRoutes];
}
