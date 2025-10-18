import generouted from "@generouted/react-router/plugin";
import react from "@vitejs/plugin-react-oxc";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [react(), generouted(), tsconfigPaths()],
        server: {
            host: env.VITE_HOST,
            port:
                mode === "development"
                    ? parseInt(env.VITE_DEV_PORT)
                    : parseInt(env.VITE_PRD_PORT),
        },
        build: {
            target: "esnext",
            outDir: "dist",
            sourcemap: true,
            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        if (id.includes("node_modules")) {
                            if (
                                id.includes("react") ||
                                id.includes("react-dom")
                            ) {
                                return "react-vendor";
                            }
                            if (
                                id.includes("react-router") ||
                                id.includes("@generouted")
                            ) {
                                return "router-vendor";
                            }
                            if (
                                id.includes("@chakra-ui") ||
                                id.includes("@emotion")
                            ) {
                                return "chakra-vendor";
                            }
                            return "vendor";
                        }
                    },
                },
            },
        },
    };
});
