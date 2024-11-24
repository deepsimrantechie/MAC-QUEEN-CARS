import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Default base path
  build: {
    outDir: "dist", // Ensure build output is in the dist directory
  },
});
