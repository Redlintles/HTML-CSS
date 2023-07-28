module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "50xl": "30rem",
      },
      backgroundImage: {
        "bursts": "url('../img/bursts.svg')",
        "bursts-mobile": "url('../img/bursts-mobile.svg')",
        "spotify-logo":"url('../img/spotify-logo.png')"
      },
      colors: {
        "main-green": "#1ED760",
        "main-purple": "#2D46B9",
      },
      spacing: {
        "110px": "110px",
        "35px": "35px",
        "80vh": "80vh",
        "100vh": "100vh",
        "80px": "80px",
      },
      backgroundSize: {
        "130%":"130%",
        "180%": "180%",
      },
      backgroundPosition: {
        "position-mobile": "30% -15%",
        "position-md": "48% 6%"
      },
      fontSize: {
        "10xl": "6.5rem",
      },
    },
  },
  plugins: [],
}
