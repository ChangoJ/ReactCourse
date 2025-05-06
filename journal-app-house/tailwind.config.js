const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#007bff",
        secondary: "#ff9900",
        error: "#ff0000",
        success: "#00ff00",
        warning: "#ffff00",
        info: "#0000ff",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
 
};