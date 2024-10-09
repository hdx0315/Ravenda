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
      },

      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-lg': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}