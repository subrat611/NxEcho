/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        spin_words: {
          "25%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(-200%)",
          },
          // "100%": {
          //   transform: "translateY(-400px)",
          // },
        },
      },
      animation: {
        spin_words: "spin_words 6s infinite",
      },
    },
  },
  plugins: [],
};
