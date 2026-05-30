import { Poppins, Open_Sans } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-poppins",
});

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-open-sans",
});

export const metadata = {
    metadataBase: new URL("https://www.clementberthierdeveloppeur.fr"),
    title: {
        default: "Clément Berthier | Développeur Web & Automatisation IA Freelance à Mazamet, Tarn",
        template: "%s | Clément Berthier Développeur",
    },
    description:
        "Développeur web freelance à Mazamet, près de Castres (Tarn). Création de sites vitrines, e-commerce, applications web sur mesure et solutions d'automatisation IA pour entreprises et particuliers.",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        siteName: "Clément Berthier Développeur",
        locale: "fr_FR",
        url: "https://www.clementberthierdeveloppeur.fr/",
        images: [
            {
                url: "/images/LogoMetaCBDev.webP",
                width: 1200,
                height: 630,
                alt: "Clément Berthier Développeur - Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/images/LogoMetaCBDev.webP"],
    },
    icons: {
        icon: "/icon.ico",
        shortcut: "/icon.ico",
        apple: "/images/apple-touch-icon.png",
    },
};

export const viewport = {
    themeColor: "#1a1a2e",
    width: "device-width",
    initialScale: 1,
};

const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.clementberthierdeveloppeur.fr/#business",
    name: "Clément Berthier Développeur",
    url: "https://www.clementberthierdeveloppeur.fr",
    logo: "https://www.clementberthierdeveloppeur.fr/images/LogoMetaCBDev.webP",
    image: "https://www.clementberthierdeveloppeur.fr/images/LogoMetaCBDev.webP",
    description:
        "Développeur web freelance à Mazamet, près de Castres (Tarn). Création de sites vitrines, e-commerce, applications web sur mesure et solutions d'automatisation IA.",
    telephone: "+33788453778",
    email: "clementberthierdeveloppeur@gmail.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "157 chemin de terre albine",
        postalCode: "81660",
        addressLocality: "Pont-de-l'arn",
        addressRegion: "Occitanie",
        addressCountry: "FR",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 43.4927,
        longitude: 2.3691,
    },
    areaServed: [
        { "@type": "City", name: "Mazamet" },
        { "@type": "City", name: "Castres" },
        { "@type": "City", name: "Toulouse" },
        { "@type": "City", name: "Albi" },
        { "@type": "City", name: "Montpellier" },
        { "@type": "AdministrativeArea", name: "Tarn" },
        { "@type": "AdministrativeArea", name: "Occitanie" },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
    },
    founder: {
        "@type": "Person",
        "@id": "https://www.clementberthierdeveloppeur.fr/#person",
        name: "Clément Berthier",
        jobTitle: "Développeur Web & Automatisation IA",
        url: "https://www.clementberthierdeveloppeur.fr/a-propos",
    },
    sameAs: [
        "https://www.facebook.com/profile.php?id=61562316966767",
        "https://www.instagram.com/clementberthier_dev/",
        "https://www.linkedin.com/in/cl%C3%A9ment-berthier/",
        "https://github.com/ClementBerthier",
    ],
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Clément Berthier Développeur",
    url: "https://www.clementberthierdeveloppeur.fr",
    inLanguage: "fr-FR",
    publisher: {
        "@id": "https://www.clementberthierdeveloppeur.fr/#business",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${poppins.variable} ${openSans.variable}`}>
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(businessSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteSchema),
                    }}
                />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
