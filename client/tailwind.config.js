/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm':  '320px',
      'sm': '600px',
      'md': '768px',
      'lg' : '1024px'
    },
    colors:  {
      primary: '#071952',
      secondary: '#0ECC39',
      background: '#FFFDFA',
      background_posts_hover: '#EEEDED',
      icons: '#9E9FA5',
      textlightmode: '#000000',
      textdarkmode: '#FFFFFF',
      borderLight:  '#F1F0E8',
      red: '#FF0000',
    },
    fontFamily:{
      text: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}