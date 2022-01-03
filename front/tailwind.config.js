module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundImage: {
      'pack-train': "url('./assets/img/background.jpg')",
      'pack-font': "url('./assets/img/White.jpg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  
  ],
}
