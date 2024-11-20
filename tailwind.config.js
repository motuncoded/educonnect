/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "background-100": "#ffffff",
      "background-400": "#F5F5F5",
      "primary-100": "#4A90E2",
      "primary-400": "#F7C843",
      "secondary-100": "#37B24D",
      "secondary-400": "#F47C3C",
      "clr-100": "#333333",
      "clr-400": "#666666",
      "clr-link": "#9B51E0",
    },

    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
        mono: ["Geist Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
