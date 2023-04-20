/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/.index.html",
    "./public/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      current: 'currentColor',
      'white': '#ffffff',
      'yellow': '#FEA82F',
      'blue': '#071E22',
      'red': '#ff0000'
    },
    fontFamily: {
      'grotesk': ['"Ultra"', 'sans-serif']
    }
  },
  plugins: [],
}

