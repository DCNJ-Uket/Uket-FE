import path from "path";

import mkcert from "vite-plugin-mkcert";
import { defineConfig } from "vite";
import imageminWebp from "imagemin-webp";
import imageminPngQuant from "imagemin-pngquant";
import react from "@vitejs/plugin-react";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import generouted from "@generouted/react-router/plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generouted(),
    mkcert(),
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
