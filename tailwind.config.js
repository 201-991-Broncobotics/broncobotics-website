module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#6d6e71"
        }
      }
    },
  },
  plugins: [],
}