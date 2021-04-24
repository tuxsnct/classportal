module.exports = {
  theme: {
    ripple: theme => {
      return {
        colors: theme('colors')
      }
    }
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-ripple')()
  ]
}
