/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      boxShadow:{
        "salon": "rgba(0, 0, 0, 0.34) 0px 3px 5px",
        "review" : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      },
      colors: {
        "salonlight": '#F1F2F2',
        "salongreen": '#5a9c6e',
        "grey": '#5C5C5C',
        "white" : '#ffffff'
      },
    },
  },
  plugins: [],
}

