import path from "path";

import { defineConfig } from "vite";
import imageminWebp from "imagemin-webp";
import imageminPngQuant from "imagemin-pngquant";
import react from "@vitejs/plugin-react";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import prerender from "@prerenderer/rollup-plugin";
import generouted from "@generouted/react-router/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generouted(),
    viteImagemin({
      plugins: {
        png: imageminPngQuant(),
      },
      makeWebp: {
        plugins: {
          png: imageminWebp(),
        },
        skipIfLargerThan: "original",
      },
    }),
    prerender({
      routes: ["/", "/select-univ", "/login"],
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/ig, "https:")
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/ig,
            "https://uket.site/",
          );
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@dist": path.resolve(__dirname, "./dist"),
    },
  },
  build: {
    sourcemap: true,

    rollupOptions: {
      onLog(level, log, handler) {
        if (
          log.cause &&
          log.cause.message === `Can't resolve original location of error.`
        ) {
          return;
        }
        handler(level, log);
      },
    },
  },
});
