import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@chellaa/ui/styles.css": path.resolve(__dirname, "../../packages/ui/src/styles/index.css"),
      "@chellaa/ui": path.resolve(__dirname, "../../packages/ui/src/index.ts"),
    },
  },
  server: {
    port: 5174,
    open: false,
  },
});
