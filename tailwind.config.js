/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pink-1": "#FF4295",
        "pink-2": "#FD7EB6",
        "pink-3": "#FCBCD9"
      }
    },
  },
  plugins: [],
}

