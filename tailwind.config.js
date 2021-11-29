module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        fgreen: {
          50: '#F1F8E9',
          100: '#DCEDC8',
          200: '#C5E1A5',
          300: '#AED581',
          400: '#9CCC65',
          500: '#8BC34A',
          600: '#7CB342',
          700: '#689F38',
          800: '#558B2F',
          900: '#33691E',
          A100: '#CCFF90',
          A200: '#B2FF59',
          A400: '#76FF03',
          A700: '#64DD17',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
