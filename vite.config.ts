import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            themeName: ["lets-atlantica-1-0-0"],
            accountThemeImplementation: "none",
            keycloakVersionTargets: {
                "22-to-25": false,
                "all-other-versions": "lets-atlantica-v.1.0.0.jar"
            }
        })
    ]
});
