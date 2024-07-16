//import Button from "../elements/Button/Button.jsx";
import "./Home.css";

export default function Home2() {
    return (
        <div className="home_container">
            <div className="home">
                <div className="home_presentation">
                    <h2 className="presentation_name">
                        Clément Berthier
                        <br className="firstBR" /> Développeur Web
                        <br /> Freelance.
                    </h2>
                    <p className="presentation_paragraph">
                        Je suis à votre écoute pour vous aider à réaliser votre
                        projet web et vous proposer des solutions adaptées a vos
                        besoins.
                    </p>
                    {/*                     <Button text="Plus d'infos"></Button>
                     */}{" "}
                </div>

                <div className="home_illustration">
                    <img
                        src="/images/avatar_dev.WebP"
                        alt="developper_illustration"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
