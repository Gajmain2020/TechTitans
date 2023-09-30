/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "320px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
    },

    colors: {
      primary: "#071952",
      textPrimary: "#001524",
      secondary: "#0ECC39",
      background: "#FFFDFA",
      background_posts_hover: "#EEEDED",
      icons: "#9E9FA5",
      textlightmode: "#000000",
      textdarkmode: "#FFFFFF",
      borderLight: "#F1F0E8",
      postHeader: '#1976D2',
      buttonbg:'#0C1C2A',

    },
    fontFamily: {
      text: ["Roboto", "sans-serif"],
      monteserat:["Monteserra", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};
