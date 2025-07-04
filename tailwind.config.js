/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xp': {
          yellow: '#FFB612',
          dark: '#121212',
          gray: '#1E1E1E',
          'light-gray': '#2D2D2D',
        },
      },
    },
  },
  plugins: [],
}