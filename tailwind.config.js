/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        museoModerno: ["var(--font-museoModerno)"]
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
        cards: "repeat(auto-fit,minmax(10rem,1fr))"
      },
      backgroundImage: {
        'error-tv': "url('/imgs/No_Poster.jpg')",
      },
      borderRadius: {
        '4xl': '50px'
      }
    },
  },
  plugins: [],
};
