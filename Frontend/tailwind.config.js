/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        purple:{
          300:"#e0e7fe", 
          500:"#3e28a7", 
          600: "#4a40de"
        }
      }
    },
  },
  plugins: [],
}

