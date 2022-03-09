module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff9b4e',
        inactive: '#d1d5db',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide')
  ],
}
