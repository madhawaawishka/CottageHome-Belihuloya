/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lilita': ['Lilita One', 'sans-serif'],
        'robotomono': ['"Roboto Mono"'],
        'Quicksand': ['"Quicksand"'],
        'body': [
          'Inter',  
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        'poppins': 'poppins',
        'dmserif': ['DM Serif', 'serif'],
        'com': ['Comfortaa', 'cursive'],
        'rubik': ['Rubik', 'sans-serif'], // Add this line
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        dark_purple: "#000235",
        btn_primary: "7e7ee3",
        heading_color: "#abd9d9",
      },
    },
  },
  plugins: [],
}
