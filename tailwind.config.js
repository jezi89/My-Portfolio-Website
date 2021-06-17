// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'aqua-deep': {
          DEFAULT: '#014445',
          '50': '#30F9FC',
          '100': '#16F8FC',
          '200': '#03D9DC',
          '300': '#02A7AA',
          '400': '#027677',
          '500': '#014445',
          '600': '#001213',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'brown': {
          DEFAULT: '#9C3E00',
          '50': '#FFB483',
          '100': '#FFA569',
          '200': '#FF8636',
          '300': '#FF6703',
          '400': '#CF5200',
          '500': '#9C3E00',
          '600': '#692A00',
          '700': '#361500',
          '800': '#030100',
          '900': '#000000'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}