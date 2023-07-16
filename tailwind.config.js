/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        green: {
          50: "#f1f6f2",
          100: "#daf0e7",
          200: "#ace6c9",
          300: "#71cc99",
          400: "#2ead68",
          500: "#209341",
          600: "#1c7d2f",
          700: "#1a6027",
          800: "#13421f",
          900: "#0e2919",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
