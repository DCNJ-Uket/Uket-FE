import path from "path";

import mkcert from "vite-plugin-mkcert";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import generouted from "@generouted/react-router/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted(), mkcert()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
});
