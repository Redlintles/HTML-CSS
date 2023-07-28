module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "30": "2.5rem",
        '290px': '290px',
        '350px':'350px',
        "396px": "396px",
        "500px": "500px",
        "980px": "980px",
      },
      colors: {
        "main-gray": "#F0F2F5",
        "main-blue": "#1877F2",
        "main-blue-hover": "#166FE5",
        "main-green": "#42B72A",
        "main-green-hover": "#36A420",
      },
      fontSize: {
        "subtitle": "1.7rem"
      },
      backgroundImage: {
        "logo": "url('../img/logo_facebook.svg')"
      }
    },
  },
  plugins: [],
}
