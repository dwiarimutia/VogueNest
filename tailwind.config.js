/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors:{
        customColor:'#d6bd92',
        ColorFooter: '#b67a5a',
        Button: '#c3986a',
        Button2: '#c2a07d',
      },
      fontFamily: {
        sans: [' Poppins', 'sans-serif'],
        spicy: ['Spicy Rice', 'sans-serif'],
        dyna: ['DynaPuff', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

