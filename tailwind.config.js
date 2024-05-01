/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      colors:{
        'insuroso-gray' : '#F1F4F5',
        'insuroso-violet' : '#640EF1',
        'insuroso-black' : '#343434',
      },
    },
  },
  plugins: [],
}

