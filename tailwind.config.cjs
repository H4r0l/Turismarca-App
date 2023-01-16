/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Alata': ['"Alata"','sans-serif'],
        'Merriweather': ['"Merriweather"','serif']
      },
      backgroundImage: {
        'Rest': "url('./src/assets/bg-1.webp')",
        'Tours': "url('./src/assets/bg-2.webp')",
        'Tour': "url('./src/assets/bg-3.webp')"
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-animated')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
