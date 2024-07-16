import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "dist",
        rollupOptions: {
            output: {
                entryFileNames: "bundle.js",
                chunkFileNames: "bundle.js",
                assetFileNames: "assets/[name].[ext]",
            },
        },
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
            },
        },
    },
});
