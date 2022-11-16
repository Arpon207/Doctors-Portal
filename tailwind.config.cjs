/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
    myTheme: {
      primary: "#3A4256",
    },
  },
  plugins: [require("daisyui")],
};
