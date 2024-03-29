/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    corePlugins: {
      aspectRatio: false,
    },
    fontFamily: {
      'orbitron': ['Orbitron', 'sans-serif'],
      'bebas-neue':['Bebas-Neue', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://ca.slack-edge.com/T02QUCP5J-U02JH3N6WPM-465398917323-512')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
