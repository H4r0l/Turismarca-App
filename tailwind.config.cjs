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
        'Guide': "url('./src/assets/bg-3.webp')",
        
        'Guides2': "url('./src/assets/bg-4.webp')",
        'Tours': "url('./src/assets/bg-2.webp')",
        'Guides2': "url('./src/assets/pexels-valentin-antonucci-841286.jpg')"
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
