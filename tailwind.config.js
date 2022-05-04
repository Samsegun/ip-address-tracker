module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        background: "url('./assets/pattern-bg.png')",
        "error-bg": "url('./assets/sad.png')",
      },
    },
  },
  plugins: [],
};
