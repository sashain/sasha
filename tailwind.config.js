module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      colors:{
        red:'#EE3022',
        black:'#0D131A'
      },
      fontFamily: {
        sans:['Poppins'],
        serif: ['Abril Fatface']
      },
      backgroundImage: theme => ({
         'hammer': "url('/src/assets/hammerhand.svg')",
        })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
