/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#090909",
        ember: "#ff7a1a",
        plasma: "#d946ef",
        volt: "#22d3ee",
        signal: "#7c3aed",
      },
      boxShadow: {
        "neon-cyan": "0 0 34px rgba(34, 211, 238, 0.26)",
        "neon-orange": "0 0 34px rgba(255, 122, 26, 0.22)",
        "panel": "0 24px 90px rgba(0, 0, 0, 0.34)",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate3d(-2%, -1%, 0) scale(1)" },
          "50%": { transform: "translate3d(2%, 1%, 0) scale(1.035)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "18%": { opacity: "1" },
          "100%": { transform: "translateY(140%)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-180% 0" },
          "100%": { backgroundPosition: "180% 0" },
        },
      },
      animation: {
        aurora: "aurora 14s ease-in-out infinite",
        scan: "scan 5.5s ease-in-out infinite",
        shimmer: "shimmer 2.7s linear infinite",
      },
    },
  },
  plugins: [],
};
