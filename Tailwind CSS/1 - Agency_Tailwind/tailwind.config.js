module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        "banner": "url('../img/office.jpg')"
      },
      fontFamily: {
        "lato": "Lato"
      },
      colors: {
        "main-orange": "#FF5200",
        "port-area": "#E5EAFF",
        "main-gray": "#1D1D1D",
        "black-ops": "rgba(0,0,0,.6)"
      },
      spacing: {
        "80vh": "80vh",
        "50%": "50%",
        "30%": "30%",
        "1170px": "1170px",
      }
      
    },
  },
  plugins: [],
}
