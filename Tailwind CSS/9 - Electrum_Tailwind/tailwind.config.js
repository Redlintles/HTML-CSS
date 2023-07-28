const {colors} = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "deal":"url('../img/deal_headset.png')"
      },
      backgroundSize: {
        "deal-size": "300px 90%",
        "deal-size-mobile": "250px 35%"
      },
      backgroundPosition: {
        "deal-position": "90%",
        "deal-position-mobile": "bottom center"
      },
      fontFamily: {
        "OS": "'Open_Sans'"
      },
      colors: {
        "main-red": "#D10024",
        "light": "#E4E7ED",
        "dark": { 
          "100": "#15161D",
          "200":"#333",
          "300": "#1E1F29",
          "400": "#2B2D42",
        },
        "gray": {
          ...colors.gray,
          "400": "#89BABC",
        },
      },
      spacing: {
        "1170px": "1170px",
        "600px": "600px",
      },
      borderRadius: {
        "50%": "50%",
      }

    },
  },
  plugins: [],
}
