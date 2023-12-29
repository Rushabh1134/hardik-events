/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/DJ1.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        yeseva: ['Yeseva One','serif'],
      }
    },
  },
  plugins: [],
}

