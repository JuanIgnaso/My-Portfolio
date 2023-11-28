/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    /*Para modificar los breakpoints*/
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      colors:{
        //Tonos de azul por número, menor-> mas claro, mayor->mas oscuro
        'portfolioAzul1' : '#e7eaf6',
        'portfolioAzul2': '#a2a8d3', 
        'porfolioAzul3' : '#38598b',
        'portfolioAzul4' : '#113f67',
        'nivelBasico': 'text-blue-600'

        //Otros colores
      },
      //Animaciones
      keyframes:{
        web_Load:{
          '0%':{opacity: 0},
          '100%': {opacity: 1},
        }
      },
      //Definir comportamiento de animaciones
      animation:{
        web_Load: 'web_Load 2s ease-out',
      }
    },
    
  },
  plugins: [],
}

