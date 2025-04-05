import path from 'node:path'
import generouted from '@generouted/react-router/plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), generouted(), tsconfigPaths()],
    server: {
      host: env.VITE_HOST,
      port: mode === 'development' ? parseInt(env.VITE_DEV_PORT) : parseInt(env.VITE_PRD_PORT)
    },
    resolve: {
      extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx", ".json", ".mts"],
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@lib": path.resolve(__dirname, "./src/lib"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@router": path.resolve(__dirname, "./src/router.ts"),
      },
    },
    build: {
      target: "esnext",
      outDir: "dist",
      sourcemap: true,
      rollupOptions: {
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].[hash].js",
          assetFileNames: "[name].[ext]",
        },
      },
    },
  }
})
