/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}", "./src/components/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "score-low": "#B3C2F9", // rouge
        "score-medium": "#7D98F8", // jaune
        "score-high": "#597BF7", // vert
      },
    },
  },
  variants: {},
  plugins: [],
};
