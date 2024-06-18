import "./Home.css";

//TODO: lié le bouton plus d'info avec sa destination

export default function Home2() {
    return (
        <div className="home_container">
            <div className="home">
                <div className="home_presentation">
                    <h2 className="presentation_name">
                        Clément Berthier:
                        <br className="firstBR" /> Développeur Web
                        <br /> Freelance.
                    </h2>
                    <p className="presentation_paragraph">
                        Je suis à votre écoute pour vous aider a réalisé votre
                        projet web et vous proposer des solutions adaptées a vos
                        besoins.
                    </p>

                    <button className="information_button">
                        Plus d{"'"}infos
                    </button>
                </div>
                <div className="home_illustration">
                    <img
                        src="/images/avatar_dev.png"
                        alt="developper_illustration"
                    />
                </div>
            </div>
            <div className="home_scroller">
                <div className="arrow_picture">
                    <img
                        className="picture"
                        src="/images/arrow-down.svg"
                        alt="arrow down"
                    />
                </div>
            </div>
        </div>
    );
}
