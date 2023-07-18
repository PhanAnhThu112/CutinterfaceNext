/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  purge:["./*.html"],
  darkMode:false,
  content: [],
  theme: {
    extend: {    fontFamily: {
      'dm': ["'DM Sans'"],
      'roboto': ["'Roboto'"],
    },
    colors:{
      orange:"#FF9900",
      orangef8:"#F85A47",
      gray:"#31353B",
      grayda:"#DADADA"
    },
    gridTemplateColums:{
      "grid-work":"1fr auto 1fr auto 1fr auto"
    }
  },
  },
  plugins: [],
}

