/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      salonlight: '#F1F2F2',
      salongreen: '#5a9c6e',
      grey: '#5C5C5C'
    },
    extend: {
      boxShadow:{
        "salon": "rgba(0, 0, 0, 0.04) 0px 5px 5px"
      }
    },
  },
  plugins: [],
}

