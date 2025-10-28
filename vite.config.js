import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // you can change this if you want
    open: true, // auto-opens browser on npm run dev
  },
  resolve: {
    alias: {
      "@": "/src", // lets you import like "@/components/Button"
    },
  },
  build: {
    outDir: "dist",
  },
});
