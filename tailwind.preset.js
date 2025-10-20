// tailwind.preset.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        grayx: {
          "very-light": "#E6E6E6",
          "very-light-fade": "#FFFFFF",
          "lighter": "#CDCDCD",
          "lighter-fade": "#CDCDCD30",
          "contrast": "#BBBBBB",
          "light": "#757575",
          "light-midnight": "#676B79",
          "steel": "#3E4250",
          DEFAULT: "#373B41",
          "gray-fade": "#373B4199",
          "seal": "#31353a",
          "very-dark": "#2a2c2d",
          "charcoal": "#222223",
        },
        bluex: { DEFAULT: "#45A9F9", light: "#6FC1FF" },
        purplex: { DEFAULT: "#B084EB", fade: "#B084EB60", light: "#BCAAFE" },
        greenx: { DEFAULT: "#19f9d8", light: "#6FE7D2", fade: "#19f9d899" },
        redx: { DEFAULT: "#FF2C6D", light: "#FF4B82" },
        orangex: { DEFAULT: "#FFB86C", light: "#FFCC95", fade: "#FFCC9560" },
        pinkx: { DEFAULT: "#FF75B5", light: "#FF9AC1", fade: "#FF9AC170" },
        surface: { dark: "#242526", light: "#292A2B" },
        foreground: { DEFAULT: "#E6E6E6" },
        "diff-green": "#19f9d866",
        "diff-red": "#FF4B8266",
        "merge-current": { header: "#B084EB90", content: "#B084EB40" },
        "merge-incoming": { header: "#45A9F990", content: "#FFB86C40" },
      },
      textColor: { foreground: "#E6E6E6", muted: "#BBBBBB" },
      backgroundColor: { "app-dark": "#242526", "app-light": "#292A2B", chip: "#373B41" },
      borderColor: { charcoal: "#222223", steel: "#3E4250" },
      ringColor: { primary: "#45A9F9" },
    },
  },
  plugins: [],
};
