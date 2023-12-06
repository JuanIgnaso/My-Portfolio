/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

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
        'portfolioAzul3' : '#38598b',
        'portfolioAzul4' : '#113f67',
        'portfolioAzul5' : '#0f172a',
        'nivelBasico': 'text-blue-600',
        'success' : '#32cd32',
        'warning' : '#facc15',
        'error' : '#ff0000'

        //Otros colores
      },
      //Animaciones
      keyframes:{
        web_Load:{
          '0%':{opacity: 0},
          '100%': {opacity: 1},
        },
        hoverButton:{
          '0%':{transform: 'scale(1)'},
          '100%':{transform: 'scale(1.125)'},
        },
        activeButton:{
          '0%':{transform: 'scale(1.125)',backgroundColor:'#113f67',color:'#fff'},
          '50%':{transform: 'scale(1)',backgroundColor:'#e7eaf6',color:'#000'},
          '100%':{transform:'scale(1.125)'}
        },
        expand:{
          '0%':{width:'0%',opacity:'0'},
          '100%':{width:'100%',opacity:'1'},
        },
        showHelp:{
          '0%':{opacity:'0'},
          '100%':{opacity: '1'},
        }
        
      },

      //Definir comportamiento de animaciones
      animation:{
        web_Load: 'web_Load 2s ease-out',
        showUp: 'web_Load 0.7s ease-out',
        hoverButton: 'hoverButton 0.5s forwards',
        activeButton: 'activeButton 0.5s',
        expand: 'expand 0.5s forwards',
        showHelp: 'showHelp 0.7s forwards',
      }
    },
    
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
    require('@tailwindcss/forms'),
  ],
}

