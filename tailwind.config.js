/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      customPink: '#f4c5c2',
      white: '#ffffff',
      gray: '#f1f5f9',
      thinGray: '#595959',
    },
    fontFamily: {
      zain: ['Zain', 'sans-serif'], // Add fallback font family if needed
    },
  },
  plugins: [],
}

