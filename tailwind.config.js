const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'body': ['GTHaptik', 'sans-serif'],
      },
      colors: {
        brand: '#FF5C00',
        orange: colors.orange,
      },
      borderRadius: {
        'muval': '0.1875rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
