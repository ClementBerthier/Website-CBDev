import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist", // Dossier de sortie pour les fichiers de build
        sourcemap: true, // Générer des sourcemaps pour le debugging
        /*   rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                },
            },
        }, */
    },
    server: {
        port: 3000, // Port du serveur de développement
        open: true, // Ouvrir le navigateur automatiquement
    },
    resolve: {
        alias: {
            "@": "/src", // Alias pour raccourcir les imports
        },
    },
});
