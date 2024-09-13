/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily:{
      'main': 'Moutyara, Arial, sans-serif'
    },
    extend: {
      colors:{
        primary: '#F3D8C7',
        secondary: '#78CCA2'
      }
    },
  },
  plugins: [],
}