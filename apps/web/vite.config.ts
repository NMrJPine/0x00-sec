import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/0x00-sec/",
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
        },
      },
    },
  },
});
