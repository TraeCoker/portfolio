module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        moveInBottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10rem)'
          },
          '80%': {
            transform: 'translateY(-1rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)'
          }
        },
        moveInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(10rem)'
          },
          '80%': {
            transform: 'translateX(-1rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)'
          }
        },
        moveInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10rem)'
          },
          '80%': {
            transform: 'translateX(1rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)'
          }
        },
      },
      animation: {
        moveInBottom: 'moveInBottom 1s ease-out',
        moveInRight: 'moveInRight 1s ease-out',
        moveInLeft: 'moveInLeft 1s ease-out',
      },
      colors: {
        'body': '#17171f',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins", 'sans-serif']
      }
    },
  },
  plugins: [],
}

