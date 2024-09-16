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


        
        secondary: '#534439',
        secondary_1: '#086a5e',
        secondary_2: '#443124',
        secondary_3: '#534439',
        secondary_4: '#402e32',
        secondary_5: '#00755f'
      }
    },
  },
  plugins: [],
}