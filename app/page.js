import Home from "@/components/Home/Home";
import Services from "@/components/Services/Services";
import ServicesIA from "@/components/ServicesIA/ServicesIA";
import ContactBanner from "@/components/ContactBanner/ContactBanner";
import FAQs from "@/components/FAQs/FAQs";
import Contact from "@/components/Contact/Contact";
import questions from "@/data/questions.json";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
        "@type": "Question",
        name: q.name,
        acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
        },
    })),
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <main>
                <section id="home">
                    <Home />
                </section>
                <section id="services">
                    <Services />
                </section>
                <section>
                    <ServicesIA />
                </section>
                <section>
                    <ContactBanner />
                </section>
                <section id="FAQs">
                    <FAQs />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
        </>
    );
}
