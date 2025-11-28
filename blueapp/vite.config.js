import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // IMPORTANT: required for static hosting (S3, CloudFront, GitHub Pages, NGINX, etc.)
  base: "./",

  plugins: [
    react(),

    // DEV-ONLY API endpoints
    {
      name: "kubelancer-blue-dev-endpoints",
      apply: "serve", // ensures these run only in `npm run dev`
      configureServer(server) {
        // /healthz endpoint
        server.middlewares.use("/healthz", (req, res) => {
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              status: "healthy",
              port: 5173,
              app: "Kubelancer Labs - Blue Demo App",
              environment: "BLUE",
            })
          );
        });

        // /version endpoint
        server.middlewares.use("/version", (req, res) => {
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              version: "Release v1.0.0",
              codename: "Blue Candidate",
            })
          );
        });
      },
    },
  ],

  // PRODUCTION BUILD SETTINGS
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: "esbuild",
  },

  // Optional (nice for dev experience)
  server: {
    port: 5173,
    open: true,
  },
});
