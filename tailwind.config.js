/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#050505",
        "selected-text": "#a3a3ff",
        theme: "#5c318c",
        google: {
          googleBlue: "#4285f4",
          googleGreen: "#34a853",
          googleYellow: "#fbbc05",
          googleRed: "#ea4335",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
