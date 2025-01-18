/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#f4c5c2",
      },
      fontFamily: {
        zain: ["Zain", "sans-serif"], // Add fallback font family if needed
      },
    },
  },
  plugins: [],
};
