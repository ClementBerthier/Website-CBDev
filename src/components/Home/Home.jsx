//import Button from "../elements/Button/Button.jsx";
import "./Home.css";

export default function Home2() {
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
                        PME. Plus de visibilité, Plus de clients <br></br>
                        <span className="bold">Mazamet — Tarn / Occitanie</span>
                    </p>
                    {/*                     <Button text="Plus d'infos"></Button>
                     */}{" "}
                </div>

                <div className="home_illustration">
                    <img
                        src="/images/avatar_dev.AVIF"
                        alt="Illustration de Clément Berthier, développeur web freelance"
                    />
                </div>
            </div>
        </div>
    );
}
