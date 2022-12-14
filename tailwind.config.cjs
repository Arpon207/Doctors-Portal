/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      color1: "#19D3AE",
      color2: "#3A4256",
      color3: "#0000001a",
      white: "white",
      red: "red",
    },
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      {
        doctorPortalTheme: {
          primary: "#19D3AE",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
