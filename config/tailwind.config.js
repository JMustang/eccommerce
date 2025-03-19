const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        oldlondon: ["OldLondon", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  Plugin: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
