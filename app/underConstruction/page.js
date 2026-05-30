import "./underConstruction.css";

export const metadata = {
    title: "Site en cours de développement",
    robots: {
        index: false,
        follow: false,
    },
};

export default function UnderConstructionPage() {
    return (
        <main className="wip-page">
            <section className="wip-card">
                <p className="wip-badge">Bientôt disponible</p>

                <p className="wip-title">
                    Ce site est en cours de développement
                </p>

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
                        href="mailto:clementberthierdeveloppeur@gmail.com"
                        className="wip-btn-ghost"
                    >
                        Me contacter
                    </a>
                </div>
            </section>
        </main>
    );
}
