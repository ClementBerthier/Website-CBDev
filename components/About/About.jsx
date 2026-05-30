import Image from "next/image";
import Button from "../elements/Button/Button.jsx";
import "./About.css";

const SKILLS = {
    front: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    back: ["Node.js", "PostgreSQL", "Drizzle ORM", "Auth.js"],
    automation: ["n8n", "OpenAI API", "Anthropic API", "Workflows IA"],
    tooling: ["Git", "Vercel", "Figma", "VS Code"],
};

const VALUES = [
    {
        title: "Transparence",
        text: "Devis détaillé, jalons clairs, et code source qui t'appartient à 100 %. Pas de boîte noire, pas de dépendance forcée.",
    },
    {
        title: "Performance",
        text: "Sites optimisés Core Web Vitals dès la livraison. Tu paies une seule fois, ton site reste rapide sans intervention coûteuse.",
    },
    {
        title: "Accompagnement",
        text: "Je t'explique chaque décision technique en mots simples. Tu repars autonome sur ton site, sans être prisonnier de mon agence.",
    },
];

export default function About() {
    return (
        <div className="About">
            <section className="about_hero">
                <div className="about_hero_container">
                    <div className="about_hero_text">
                        <h1 className="about_title">
                            Clément Berthier
                        </h1>
                        <p className="about_subtitle">
                            Développeur Web & Automatisation IA freelance à
                            Mazamet (Tarn)
                        </p>
                        <p className="about_lead">
                            [À COMPLÉTER — 2-3 phrases d&apos;accroche : qui tu
                            es, ce que tu fais, pour qui. Exemple : « Je
                            conçois des sites et systèmes intelligents pour les
                            artisans, indépendants et PME qui veulent
                            transformer leur visibilité web en clients
                            réels. »]
                        </p>
                    </div>
                    <div className="about_hero_image">
                        <Image
                            src="/images/avatar_dev.AVIF"
                            alt="Portrait de Clément Berthier, développeur web freelance à Mazamet"
                            width={800}
                            height={800}
                            sizes="(max-width: 768px) 100vw, 40vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </div>
            </section>

            <section className="about_section">
                <h2 className="about_section_title">Mon parcours</h2>
                <div className="about_stats">
                    <div className="about_stat">
                        <span className="about_stat_value">
                            [X] ans
                        </span>
                        <span className="about_stat_label">
                            d&apos;expérience en développement web
                        </span>
                    </div>
                    <div className="about_stat">
                        <span className="about_stat_value">[X]+</span>
                        <span className="about_stat_label">
                            projets livrés
                        </span>
                    </div>
                    <div className="about_stat">
                        <span className="about_stat_value">[X]</span>
                        <span className="about_stat_label">
                            clients accompagnés
                        </span>
                    </div>
                </div>
                <div className="about_text">
                    <p>
                        [À COMPLÉTER — Ton parcours en 4-5 phrases. Exemple :
                        formation initiale, premières expériences pro,
                        passage en freelance, type de clients accompagnés.
                        Inclure des détails concrets et vérifiables :
                        école/formation, années, type de projets phares.]
                    </p>
                </div>
            </section>

            <section className="about_section">
                <h2 className="about_section_title">Ce que je maîtrise</h2>
                <div className="about_skills">
                    <div className="about_skills_group">
                        <h3 className="about_skills_title">Front-end</h3>
                        <ul className="about_skills_list">
                            {SKILLS.front.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about_skills_group">
                        <h3 className="about_skills_title">Back-end</h3>
                        <ul className="about_skills_list">
                            {SKILLS.back.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about_skills_group">
                        <h3 className="about_skills_title">
                            Automatisation IA
                        </h3>
                        <ul className="about_skills_list">
                            {SKILLS.automation.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about_skills_group">
                        <h3 className="about_skills_title">Outils</h3>
                        <ul className="about_skills_list">
                            {SKILLS.tooling.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="about_section">
                <h2 className="about_section_title">
                    Formations & certifications
                </h2>
                <div className="about_text">
                    <p>
                        [À COMPLÉTER — Liste tes formations, diplômes,
                        certifications avec dates. Exemple :
                    </p>
                    <ul className="about_credentials">
                        <li>
                            [Année] — [Nom de la formation], [École /
                            Organisme]
                        </li>
                        <li>[Année] — [Certification], [Organisme]</li>
                    </ul>
                    <p>
                        Ce sont des signaux d&apos;autorité importants pour
                        Google E-E-A-T en 2026.]
                    </p>
                </div>
            </section>

            <section className="about_section">
                <h2 className="about_section_title">Comment je travaille</h2>
                <div className="about_values">
                    {VALUES.map((value) => (
                        <div key={value.title} className="about_value">
                            <h3 className="about_value_title">
                                {value.title}
                            </h3>
                            <p className="about_value_text">{value.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="about_cta">
                <h2 className="about_cta_title">
                    Discutons de votre projet
                </h2>
                <p className="about_cta_text">
                    Échange gratuit de 30 minutes pour cadrer vos besoins et
                    estimer le projet.
                </p>
                <Button href="/#contact" text="Me contacter" />
            </section>
        </div>
    );
}
