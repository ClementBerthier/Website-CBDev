import Home from "@/components/Home/Home";
import Services from "@/components/Services/Services";
import ContactBanner from "@/components/ContactBanner/ContactBanner";
import FAQs from "@/components/FAQs/FAQs";
import Process from "@/components/Process/Process";
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
                    <ContactBanner />
                </section>
                <section id="FAQs">
                    <FAQs />
                </section>
                <section>
                    <Process />
                </section>
            </main>
        </>
    );
}
