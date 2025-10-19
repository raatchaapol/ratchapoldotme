import MagicString from "magic-string";
import type { Plugin } from "vite";

/**
 * Vite plugin to automatically transform the Routes import from regular to lazy-loading
 * variant during production builds. This enables code-splitting for better performance.
 *
 * In development: Uses regular @generouted/react-router for faster HMR
 * In production: Transforms to @generouted/react-router/lazy for code-splitting
 */
export const lazyGeneroutedPlugin = (): Plugin => {
    return {
        name: "vite-lazy-generouted-plugin",
        enforce: "pre",
        apply: "build",
        transform: (src, id) => {
            if (id.endsWith("src/app.tsx")) {
                const searchString =
                    'import { Routes } from "@generouted/react-router";';
                const replaceString =
                    'import { Routes } from "@generouted/react-router/lazy";';

                if (!src.includes(searchString)) {
                    return null;
                }

                const s = new MagicString(src);
                s.replace(searchString, replaceString);

                return {
                    code: s.toString(),
                    map: s.generateMap({ hires: true }),
                };
            }
        },
    };
};
