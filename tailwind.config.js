/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    
  ],
  theme: {
    extend: {
      colors: {
        "light-purple": "#e1ecfe", 
        "dark-purple": "#836cf4",
        "dark-gray": "#353444",
        "high-green": "#ccff02",
    },
  }
  },
  plugins: [],
}
