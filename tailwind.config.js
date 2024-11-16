/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',   
    './**/*.js',
    './**/*.vue', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sableklish: ['Sableklish', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
