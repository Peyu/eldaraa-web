const lineClamp = require('@tailwindcss/line-clamp')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        old: ["'IM Fell English SC'", "serif"]
      },
      colors: {
        parchment: '#fef7e0',
        inkblue: '#2c3e50'
      },
      backgroundImage: {
        pergamino: "url('/assets/pergamino-bg.png')"
      },
      transitionProperty: {
        height: 'height',
      }
    },
  },
  plugins: [],
}
