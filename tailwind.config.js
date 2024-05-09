/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      hp: { max: "768px" },
      tablet: { min: "768px" },
      dekstop: { min: "992px" },
    },
    colors: {
      primary: "#06D6A0",
      secondary: "#118AB2",
      danger: "#EF476F",
      warning : "#FFD166",
      "dark": "#073B4C",
      "gray": "#64748B",
      'white': '#fff',
      "dark-green":'#01a87b',

    },
    fontSize: {
      display: "3.815rem",
      h1: "3.052rem",
      h2: "2.441rem",
      h3: "1.953rem",
      h4: "1.563rem",
      p: "1rem",
    },
    extend: {},
  },
  plugins: [],
}