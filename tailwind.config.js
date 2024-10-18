module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // 'media' for system preference or 'class' for manually applied
  theme: {
    extend: {
      colors: {
        black: "#000000", // Add a custom black color if necessary
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
