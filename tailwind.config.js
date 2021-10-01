module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px'
          },
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '1000px'
          }
        }
      })
    }
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      background: '#1C1E2B',
      grey: {
        lightest: '#D1D7DD',
        lighter: '#ADB4BA',
        light: '#686E74',
        DEFAULT: '#3C4145'
      },
      white: '#FFF',
      red: '#680000'
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      lg: '18px'
    },
    extend: {
      letterSpacing: {
        widest: '.3rem'
      },
      boxShadow: {
        DEFAULT: '0 1px 5px rgba(0, 0, 0, .1)',
        red: '0px 0px 21px rgba(255, 101, 101, .65)'
      }
    }
  }
}