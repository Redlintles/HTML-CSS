module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": "Montserrat, sans-serif",
      },

      colors: {
        "main-orange": "#C09578",
        "light": "#FCF5EB",
        "main-gray": "#626262",
        "dark": {
          "100": "#252525",
          "200": "#101010"
        },
      },
      spacing: {
        "70vh": "70vh",
        "90vh": "90vh",
        "0%": "0%",
        "100%": "100%",
        "200%": "200%",
        "300%": "300%",
        "400%": "400%",
        "200px": "200px",
      },
      backgroundImage: {
        "arrow-right": "url('../img/chevron-right.svg')",
        "arrow-left": "url('../img/chevron-left.svg')",
      },
      backgroundSize: {
        "banner": "100px 90%",
        "deal-s": "200px 90%",
        "deal-s-mobile": "100px 40%"
      },
      backgroundPosition: {
        "deal-p": " 95% center",
        "deal-p-mobile": "center 95%"
      }

    },
  },
  plugins: [],
}
