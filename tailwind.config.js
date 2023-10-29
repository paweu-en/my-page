/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-color": "var(--text-color)",
        "background-color": "var(--background-color)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        voigante: ["var(--font-voigante)"],
      },
    },
  },
  plugins: [],
};
