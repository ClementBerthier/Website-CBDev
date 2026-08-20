const BASE_URL = "https://www.clementberthierdeveloppeur.fr";

/**
 * No Disallow rule here on purpose.
 *
 * /underConstruction is kept out of the index by its own noindex metadata.
 * Disallowing it would prevent crawlers from ever reading that noindex, so an
 * inbound link could still get the URL listed. Crawl must stay open for the
 * page-level directive to apply.
 */
export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
