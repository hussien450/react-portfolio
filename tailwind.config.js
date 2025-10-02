/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0D1117",
        card: "#161B22",
        primary: "#3B82F6", // Blue – links/buttons
        accent: "#F59E0B", // Amber – highlights
        highlight: "#10B981",
        highlights: "#F59E0B", // yellow – active elements\
        "deep-blue": "#010026",
        grey: "#ededed",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),

      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.jpeg')",
        person2: "url('./assets/person-2.jpeg')",
        person3: "url('./assets/person-3.jpeg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
