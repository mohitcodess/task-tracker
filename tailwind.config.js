/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-dark":"#14213D",
        "primary-light":"#fca311",
        "secondary-dark":"#1E1E1E",
      },
      fontFamily:{
        "popins":"Poppins"
      }
    },
  },
  plugins: [],
}

