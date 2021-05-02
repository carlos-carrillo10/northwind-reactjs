// to build tailwind use 'npx tailwind build src/css/index.css -o src/css/tailwind.css'

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {colors: {
      primary:'#457b9d'
    },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
