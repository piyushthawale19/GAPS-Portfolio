import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    port: 3002,
    allowedHosts: ["kary-chunkier-welly.ngrok-free.dev"],
  },
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "react-dom/client",
      "@react-three/fiber",
      "@react-three/drei",
      "three",
      "three/src/math/MathUtils",
      "gsap",
      "gsap/all",
      "gsap/ScrollTrigger",
      "gsap/Observer",
      "@gsap/react",
      "react-responsive",
      "lenis/react",
      "clsx",
      "tailwind-merge",
      "framer-motion",
      "react-scroll",
      "@iconify/react/dist/iconify.js",
      "maath",
    ],
    esbuildOptions: {
      target: "esnext",
    },
  },
});

