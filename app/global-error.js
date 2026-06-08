"use client";

export default function GlobalError({ error, reset }) {
    return (
        <html lang="fr">
            <body
                style={{
                    margin: 0,
                    fontFamily: "system-ui, sans-serif",
                    backgroundColor: "#f9fafe",
                }}
            >
                <div
                    style={{
                        padding: "4rem 1.5rem",
                        textAlign: "center",
                        maxWidth: "32rem",
                        margin: "0 auto",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "1.875rem",
                            fontWeight: 700,
                            color: "#0f172a",
                            marginBottom: "1rem",
                        }}
                    >
                        Erreur critique
                    </h1>
                    <p
                        style={{
                            color: "#475569",
                            marginBottom: "2rem",
                            lineHeight: 1.6,
                        }}
                    >
                        Une erreur grave est survenue. Veuillez rafraîchir la
                        page.
                    </p>
                    <button
                        type="button"
                        onClick={() => reset()}
                        style={{
                            padding: "0.75rem 1.75rem",
                            borderRadius: "9999px",
                            border: "none",
                            background:
                                "linear-gradient(to right, #98d2e6, #1e90ff)",
                            color: "white",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Réessayer
                    </button>
                </div>
            </body>
        </html>
    );
}
