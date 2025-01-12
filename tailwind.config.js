/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        documentBg: '#EAE5E2', // Name für die Hintergrundfarbe
      },
    },
  },
  plugins: [],
};
