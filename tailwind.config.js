const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#9333ea",
        accent: "#10b981",
        background: "#ffffff",
        text: "#111827",
      },
      fontFamily: {
        sans: ["Bokor", "Playfair Display", "sans-serif"],
        heading: ["PT Sans", "Bokor", "serif"], 
      },
      spacing: {
        18: "4.5rem",
        36: "9rem",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
