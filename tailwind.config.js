/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald : ['Oswald', ...defaultTheme.fontFamily.sans],
        dmsans : ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'gsi-darkblue' : '#365b6d',
        'gsi-gold' : '#fcba56',
        'gsi-brightblue' : '#41c1ba',
        'gsi-smokewhite' : '#f2f1ec',
        'hpoi-main' : '#ff9933',
        'btn-blue' : '#0B549F',
        'btn-yellow' : '#FCDA31',
        'btn-brown' : '#ad8e6c',
        'btn-red' : '#dc0714',
        'btn-blue2' : '#0061a7',
      }
    },
  },
  plugins: [],
}

