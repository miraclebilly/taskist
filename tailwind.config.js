/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      "DEFAULT": '1px',
      '0': '0',
      '2' : '2px'
    },
    extend: {},
  },
  plugins: [],
}