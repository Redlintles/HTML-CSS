const {colors} = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'arial': "Arial"
      },
      colors: {
        "darkblue": {
          "500": "#485769",
          "600": "#37475A",
          "700": "#232F3E",
          "800": "#191E26",
          "900": "#131A22",
        },
        "gold": {
          "100": "#FEBD69",
          "200": "#FAA634",
        },
        "orange": {
          ...colors.orange,
          "600": "#E47911"
        },
        "yellow": {
          ...colors.yellow,
          "300": "#F0C140"
        }
      },
      spacing: {
        "7": "1.75rem",
        "75px": "75px",
        "210px": "210px"
      }
    },
  },
  plugins: [],
}