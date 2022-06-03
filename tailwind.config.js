module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2md': {'min': '1400px'},
        //=> @media (min-height: 800px) { ... }
        'iphone_12_pro': {'min': '390px'},
        'big_screen': {'min': '3200px'}
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
