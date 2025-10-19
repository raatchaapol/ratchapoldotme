import path from "node:path";
import generouted from "@generouted/react-router/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { lazyGeneroutedPlugin } from "./plugins/vite-lazy-generouted";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        base: "/",
        plugins: [
            react(),
            lazyGeneroutedPlugin(),
            generouted(),
            tsconfigPaths(),
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
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
            sourcemap: false,
            minify: "esbuild",
            chunkSizeWarningLimit: 600,
            reportCompressedSize: true,
            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        // Split router bundle for better caching
                        if (
                            id.includes("node_modules/react-router") ||
                            id.includes("node_modules/@generouted")
                        ) {
                            return "router";
                        }
                    },
                },
            },
        },
        // Tree shaking optimizations
        define: {
            "process.env.NODE_ENV": JSON.stringify(mode),
        },
        ssr: {
            // Mark external dependencies for SSR (if needed later)
            noExternal: ["@chakra-ui/react"],
        },
    };
});
