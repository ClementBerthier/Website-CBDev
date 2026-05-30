const BASE_URL = "https://www.clementberthierdeveloppeur.fr";

export default function sitemap() {
    const lastModified = new Date();
    return [
        {
            url: `${BASE_URL}/`,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/servicesPage`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/servicesPageIA`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
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
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}
