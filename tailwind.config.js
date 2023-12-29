/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray: {
          100: "#CED5F0",
          200: "#B5B2DF",
          300: "#3B4053",
          400: "#2B2F3F",
          500: "#242837",
          600: "#1A1D29",
        },
        purple: "#6363FF",
        red: "#F44444",
        green: "#46F577"
      },
      fontFamily: {
        lato: ['Lato', "sans-serif"]
      }
    }
  },
  plugins: [],
}