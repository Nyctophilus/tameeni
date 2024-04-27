module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#109bde",
        secondary: "#fafbfd",
      },
      animation: {
        sweep: "sweep .5s ease-in-out forwards",
      },
      keyframes: {
        sweep: {
          "0%": { opacity: 0, transform: "translateX(10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
