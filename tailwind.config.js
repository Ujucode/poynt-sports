/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        dark: { 1: '#2D3748' },
        white: { 0: 'white', 1: '#F7F9FC' },
        green: { 0: '#00AB55', 1: '#50AD29' },
        gray: {
          100: '#f7fafc',
          // ...
          900: '#1a202c',
        },
      },
      fontFamily: {
        serif: ['serif'],
      },
      fontSize: {
        '2xl': '12.5rem',
      },
    },
  },
  plugins: [],
};
