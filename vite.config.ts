import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  server: {
    host: "127.0.0.1",
    port: 43717,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 43718,
    strictPort: true,
  },
});
