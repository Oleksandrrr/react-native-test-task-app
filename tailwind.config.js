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
  },
  plugins: [],
}
