import "./aboutMe2.css";

export default function AboutMe2() {
    return (
        <div className="aboutMe_container">
            <div className="aboutMe">
                <div className="aboutMe_presentation">
                    <h2 className="presentation_name">
                        Clément Berthier:
                        <br /> Développeur Web
                        <br /> Freelance.
                    </h2>
                    <p className="presentation_paragraph">
                        Je suis à votre écoute pour vous aider a réalisé votre
                        projet web et vous proposer des solutions adaptées a vos
                        besoins.
                    </p>
                </div>
                <div className="aboutMe_illustration">
                    <img
                        src="/images/avatar_dev_white.png"
                        alt="developper_illustration"
                    />
                </div>
            </div>
        </div>
    );
}
