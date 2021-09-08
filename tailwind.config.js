module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-picture': "linear-gradient(to right bottom, rgba(1, 3, 31, 0.88), rgba(1, 3, 31, 0.88)), url('./assets/bowen_best_students.webp')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
