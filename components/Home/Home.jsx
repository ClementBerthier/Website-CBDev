import Image from "next/image";
import "./Home.css";

export default function Home() {
    return (
        <div className="home_container">
            <div className="home">
                <div className="home_presentation">
                    <h1 className="presentation_name">
                        Clément Berthier
                        <br className="firstBR" /> Développeur Web
                        <br className="firstBR" /> &
                        <br className="firstBR" /> Automatisation IA
                    </h1>
                    <p className="presentation_paragraph">
                        Développeur Web & Automatisation IA, Sites pro et
                        systèmes intelligents pour artisans, indépendants et
                        PME. Plus de visibilité, Plus de clients <br />
                        <span className="bold">
                            Mazamet — Tarn / Occitanie
                        </span>
                    </p>
                </div>

                <div className="home_illustration">
                    <Image
                        src="/images/avatar_dev.AVIF"
                        alt="Illustration de Clément Berthier, développeur web freelance"
                        width={800}
                        height={800}
                        priority
                        sizes="(max-width: 860px) 80vw, 50vw"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </div>
        </div>
    );
}
