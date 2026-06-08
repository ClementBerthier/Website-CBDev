const securityHeaders = [
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
    },
    {
        key: "Content-Security-Policy",
        value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "img-src 'self' data: https://*.tile.openstreetmap.org",
            "font-src 'self' https://fonts.gstatic.com data:",
            "connect-src 'self'",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'",
        ].join("; "),
    },
];

const SERVICE_SECTION_REDIRECTS = [
    { from: "site", to: "sites-vitrines" },
    { from: "application", to: "applications-web" },
    { from: "e_commerce", to: "e-commerce" },
    { from: "RM", to: "refonte-maintenance" },
    { from: "SEO", to: "seo-local" },
    { from: "automation_IA", to: "automatisation-ia" },
];

const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: "/:path*",
                headers: securityHeaders,
            },
        ];
    },
    async redirects() {
        return [
            ...SERVICE_SECTION_REDIRECTS.map(({ from, to }) => ({
                source: "/servicesPage",
                has: [
                    {
                        type: "query",
                        key: "section",
                        value: from,
                    },
                ],
                destination: `/services/${to}`,
                permanent: true,
            })),
            {
                source: "/servicesPage",
                destination: "/services",
                permanent: true,
            },
            {
                source: "/servicesPageIA",
                destination: "/services/automatisation-ia",
                permanent: true,
            },
            {
                source: "/legalMention",
                destination: "/mentions-legales",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
