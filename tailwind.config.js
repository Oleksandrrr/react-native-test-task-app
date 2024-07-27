/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        abel: ['Abel-Regular', 'sans-serif'],
        sfProDisplay: ['SFProDisplay-Regular', 'sans-serif'],
      },
    },
    colors: {
      lightBlue: '#F7F7F7',
      lightGrey: '#979797',
    },
  },
  plugins: [],
}
