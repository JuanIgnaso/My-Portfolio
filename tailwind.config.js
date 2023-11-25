/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        //Tonos de azul por número, menor-> mas claro, mayor->mas oscuro
        'portfolioAzul1' : '#e7eaf6',
        'portfolioAzul2': '#a2a8d3', 
        'porfolioAzul3' : '#38598b',
        'portfolioAzul4' : '#113f67'

        //Otros colores
      }
    },
    
  },
  plugins: [],
}

