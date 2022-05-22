module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2md': {'min': '1400px'},
        //=> @media (min-height: 800px) { ... }
      }
    },
    fontFamily:{
      lato: ['Lato'],
      Poppins: ['Poppins'],
      Montserrat: ['Montserrat'],
      Radio_canada: ['Radio Canada'],
      Tapestry: ['Tapestry'],
      Inter: ['Inter'],
    }
  },
  plugins: [],
}
