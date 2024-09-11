/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'], // Aplicar Josefin Sans como fuente principal
      },
      colors: {
        primary: '#FF69B4',
        secondary: '#FFFFFF',
        dark: '#1E293B',
      },
    },
  },
  plugins: [],
}
