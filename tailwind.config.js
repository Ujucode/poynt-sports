/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        dark: { 1: '#2D3748' },
        white: { 0: 'white', 1: '#F5F5F5' },
        green: { 0: '#00AB55', 1: '#50AD29' },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
