module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-down': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-up': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 2s ease-out',
        'fade-out-down': 'fade-out-down 1s ease-out',
        'fade-in-up-f': 'fade-in-up 1s ease-out',
        'fade-in-up-m': 'fade-in-up 1.5s ease-out',
        'fade-in-up-s': 'fade-in-up 2s ease-out',
        'fade-out-up': 'fade-out-up 1s ease-out'
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

