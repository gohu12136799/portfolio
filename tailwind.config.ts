import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        foreground: "#525252",
        border: "var(--border)",
        surface: {
          DEFAULT: "var(--surface)",
          hover: "var(--surface-hover)",
          active: "var(--surface-active)",
          subtle: "var(--surface-subtle)",
        },
        accent: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
          subtle: "rgba(37, 99, 235, 0.08)",
          foreground: "#ffffff",
        },
      },
      fontSize: {
        body: "15px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        grotesk: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "pulse-subtle": "pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blob: "blob 18s ease-in-out infinite",
        "blob-rainbow": "blob 18s ease-in-out infinite, rainbow 35s linear infinite",
        "gradient-x": "gradient-x 6s linear infinite",
        wave: "wave 2.5s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        wave: {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        rainbow: {
          "0%, 100%": { backgroundColor: "#f87171" },
          "14%": { backgroundColor: "#fb923c" },
          "28%": { backgroundColor: "#facc15" },
          "43%": { backgroundColor: "#4ade80" },
          "57%": { backgroundColor: "#60a5fa" },
          "71%": { backgroundColor: "#a78bfa" },
          "86%": { backgroundColor: "#f472b6" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.95)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
