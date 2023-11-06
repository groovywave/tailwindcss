/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#050505",
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
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     colors: {
//       blue: "#1fb6ff",
//       purple: "#7e5bef",
//       pink: "#ff49db",
//       orange: "#ff7849",
//       green: "#13ce66",
//       yellow: "#ffc82c",
//       "gray-dark": "#273444",
//       gray: "#8492a6",
//       "gray-light": "#d3dce6",
//     },
//     fontFamily: {
//       sans: ["Graphik", "sans-serif"],
//       serif: ["Merriweather", "serif"],
//     },
//     extend: {
//       spacing: {
//         128: "32rem",
//         144: "36rem",
//       },
//       borderRadius: {
//         "4xl": "2rem",
//       },
//     },
//   },
// };
