import services from "@/data/services.json";

const BASE_URL = "https://www.clementberthierdeveloppeur.fr";

export default function sitemap() {
    const lastModified = new Date();

    const staticRoutes = [
        {
            url: `${BASE_URL}/`,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/offres`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/templates`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/projets`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/a-propos`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.8,
        },
    ];

    const serviceRoutes = services.map((service) => ({
        url: `${BASE_URL}/services/${service.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticRoutes, ...serviceRoutes];
}
