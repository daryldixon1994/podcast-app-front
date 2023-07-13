/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        cairo: ['"Cairo"', "sans-serif"],
        orbit: ['"Orbit"', "sans-serif"],
        comfort: ['"Comfortaa"', "cursive"],
        right: ['"Righteous"', "cursive"],
      },
    },
  },
  plugins: [],
};
