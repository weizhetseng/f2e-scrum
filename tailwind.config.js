/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_green: '#008D96',
        bright_green: '#00FFE0',
        rgbBlack: 'rgba(10, 13, 20, 0.6)',
      },
      backgroundImage: {
        btnWrap: 'linear-gradient(0deg,rgba(0, 255, 224, 0) 0%,#00FFE0 100%)',
        loadingLine: 'linear-gradient(270deg, #00FFE0 0%, rgba(0, 255, 224, 0) 100%)',
        loading:
          'linear-gradient(0deg, rgba(0, 255, 224, 0) 0%, rgba(0, 255, 224, 0.25) 60.42%, rgba(0, 255, 224, 0.45) 79.69%, rgba(0, 255, 224, 0.7) 91.67%, rgba(0, 255, 224, 0.9) 100%)',
        progress: 'linear-gradient(270deg, #00FFE0 0%, rgba(0, 255, 224, 0) 100%)',
        main: 'url("../../assets/image/bg/bg_village.png")',
      },
      animation: {
        flash1: 'flash1 2.5s ease-in-out infinite',
        flash2: 'flash2 2.5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      boxShadow: {
        box: '0px 0px 24px 8px #00FFE0CC',
      },
      spacing: {
        15: '60px',
        25: '100px',
        30: '120px',
      },
      borderRadius: {
        10: '40px',
        20: '80px',
      },
      fontSize: {
        32: '32px',
      },
      keyframes: {
        flash1: {
          '0%': { scale: '0.8' },
          '50%': { scale: '0.5' },
          '100%': { scale: '0.8' },
        },
        flash2: {
          '0%': { scale: '0.5' },
          '50%': { scale: '0.8' },
          '100%': { scale: '0.5' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            }
          },
        },
        {
          values: theme('transitionDelay'),
        }
      )
    }),
  ],
}
