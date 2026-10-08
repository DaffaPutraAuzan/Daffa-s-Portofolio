import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF5EC",
        sand: "#F1E8D7",
        navy: "#102A43",
        ink: "#0F2A44",
        tealdeep: "#0E5A5A",
        amberbrand: "#E9A319",
        mutedblue: "#DCE6F2",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 50px -20px rgba(16,42,67,.25)",
      },
    },
  },
  plugins: [],
};
export default config;
