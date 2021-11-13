module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: '#EE3022',
        black: '#0D131A'
      },
      fontFamily: {
        sans: ['Poppins'],
        serif: ['Abril Fatface']
      },
      backgroundImage: theme => ({
        'hammer': "url('/src/assets/hammerhand.svg')",
        'telephone': "url('/src/assets/telescope.svg')",
        'rocket': "url('/src/assets/rocket.svg')",
        'vision': "url('/assets/vis2x.png')",
        'mission': "url('/assets/mis2x.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
