/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/*.{js,css}", "./*.html", "./dict/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite-typography'),
    // ...
  ],
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      visibility: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
};