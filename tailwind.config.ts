import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Snap-scroll включается только на широких экранах достаточной высоты.
        // Ниже этого порога сайт — обычная комфортная вертикальная лента.
        paged: { raw: "(min-width: 1024px) and (min-height: 720px)" },
      },
      colors: {
        ink: "#10120f",
        surface: "#191c17",
        "surface-raised": "#22271e",
        line: "#34392e",
        paper: "#f3f5ec",
        muted: "#c3cabd",
        olive: "#8fa36f",
        accent: "#c5f65a",
        "accent-hover": "#d6ff80",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        float: "float 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
