/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '821px',
      'lg': '1200px',
      'xl': '1420px',
      '2xl':'1630px'
    },
    extend: {
    },
    colors:{
      'header':'#121212',
      'headerText':'#FAFAFA',
      'main': '#000000',
      'white': '#fff',
      'grayBg':'#F7F7F7',
      'gray':'#929292',
    }
  },
  plugins: [],
}