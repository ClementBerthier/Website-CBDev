import "./UnderConstruction.css";
export default function UnderConstruction() {
    return (
        <main className="wip-page">
            <section className="wip-card">
                <p className="wip-badge">Bientôt disponible</p>

                <h1 className="wip-title">
                    Ce site est en cours de développement
                </h1>

                <p className="wip-text">
                    Ce projet est actuellement en cours de développement.
                    <br />
                    Revenez bientôt pour découvrir le site finalisé !
                </p>

                <div className="wip-actions">
                    <a
                        href="https://www.clementberthierdeveloppeur.fr"
                        className="wip-btn-primary"
                    >
                        Retour au site principal
                    </a>

                    <a
                        href="mailto:clementberthier.developpeur@gmail.com"
                        className="wip-btn-ghost"
                    >
                        Me contacter
                    </a>
                </div>
            </section>
        </main>
    );
}
