/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#1280ab",
        "main-glow": "#9eddf6",
        button: "#bceb21",
        buttondark: "#aad422",
        black: "#0f0e15",
        "bg-blue": "#191c23",
        main: "#7DD658",
        "main-light": "#D0F0C1",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        main: ["Montserrat", "sans-serif"],
      },
    },
    animation: {},
  },
  plugins: [],
};
