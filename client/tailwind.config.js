const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(purple|pink|orange|yellow|green|black|gray|neutral|red|blue|white)/,
    },
  ],
};
