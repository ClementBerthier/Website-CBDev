import Services from "../Services/Services.jsx";
import ServicesIA from "../ServicesIA/ServicesIA.jsx";
import ContactBanner from "../ContactBanner/ContactBanner.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import FAQs from "../FAQs/FAQs.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "../Header/Header.jsx";
import Home from "../Home/Home.jsx";
import { Helmet } from "react-helmet-async";
//import Technologies from "../Technos/Technologies.jsx";

export default function Layout() {
    const location = useLocation();
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const FAQsRef = useRef(null);
    const technologiesRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        if (location.state) {
            const options = {
                block: "center",
                behavior: "smooth",
            };
            if (location.state.id === "home") {
                homeRef.current.scrollIntoView(options);
            } else if (location.state.id === "services") {
                servicesRef.current.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
            } else if (location.state.id === "FAQs") {
                FAQsRef.current.scrollIntoView(options);
            } else if (location.state.id === "technologies") {
                technologiesRef.current.scrollIntoView({
                    block: "end",
                    behavior: "smooth",
                });
            } else if (location.state.id === "contact") {
                contactRef.current.scrollIntoView(options);
            }
        }
    }, [location]);

    return (
        <>
            <Helmet>
                <title>
                    Clément Berthier | Développeur Web & Automatisation IA
                    Freelance à Mazamet, Tarn
                </title>
                <meta
                    name="description"
                    content="Développeur web freelance à Mazamet, près de Castres (Tarn). Création de sites vitrines, e-commerce, applications web sur mesure et solutions d'automatisation IA pour entreprises et particuliers."
                />
                <link
                    rel="canonical"
                    href="https://www.clementberthierdeveloppeur.fr/"
                />
                <meta
                    property="og:title"
                    content="Clément Berthier | Développeur Web & Automatisation IA Freelance à Mazamet et Castres, Tarn"
                />
                <meta
                    property="og:description"
                    content="Développeur web freelance à Mazamet, près de Castres (Tarn). Création de sites vitrines, e-commerce, applications web sur mesure et solutions d'automatisation IA pour entreprises et particuliers."
                />
                <meta
                    property="og:url"
                    content="https://www.clementberthierdeveloppeur.fr/"
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Clément Berthier Développeur",
                        "url": "https://www.clementberthierdeveloppeur.fr",
                        "logo": "https://www.clementberthierdeveloppeur.fr/images/LogoMetaCBDev.webP",
                        "image": "https://www.clementberthierdeveloppeur.fr/images/LogoMetaCBDev.webP",
                        "description": "Développeur web freelance à Mazamet, près de Castres (Tarn). Création de sites vitrines, e-commerce, applications web sur mesure et solutions d'automatisation IA.",
                        "telephone": "+33788453778",
                        "email": "clementberthierdeveloppeur@gmail.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "112 rue Charles Peguy",
                            "postalCode": "81200",
                            "addressLocality": "Aussillon",
                            "addressRegion": "Occitanie",
                            "addressCountry": "FR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 43.4927,
                            "longitude": 2.3691
                        },
                        "areaServed": [
                            { "@type": "City", "name": "Mazamet" },
                            { "@type": "City", "name": "Castres" },
                            { "@type": "City", "name": "Toulouse" },
                            { "@type": "City", "name": "Albi" },
                            { "@type": "City", "name": "Montpellier" },
                            { "@type": "AdministrativeArea", "name": "Tarn" },
                            { "@type": "AdministrativeArea", "name": "Occitanie" }
                        ],
                        "priceRange": "€€",
                        "founder": {
                            "@type": "Person",
                            "name": "Clément Berthier",
                            "jobTitle": "Développeur Web & Automatisation IA",
                            "url": "https://www.clementberthierdeveloppeur.fr"
                        },
                        "sameAs": [
                            "https://www.facebook.com/profile.php?id=61562316966767",
                            "https://www.instagram.com/clementberthier_dev/",
                            "https://www.linkedin.com/in/cl%C3%A9ment-berthier/",
                            "https://github.com/ClementBerthier"
                        ]
                    })}
                </script>
            </Helmet>
            <Header />
            <main>
                <section ref={homeRef}>
                    <Home />
                </section>

                <section ref={servicesRef}>
                    <Services />
                </section>
                <section>
                    <ServicesIA />
                </section>
                {/* <section ref={technologiesRef}>
                    <Technologies />
                </section> */}
                <section>
                    <ContactBanner />
                </section>
                <section ref={FAQsRef}>
                    <FAQs />
                </section>
                <section ref={contactRef}>
                    <Contact />
                </section>
            </main>
            <Footer />
        </>
    );
}
