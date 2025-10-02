/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: 'E6F0FF',
          DEFAULT: '#1E3A8A',
          dark: '#162B64',
        },
        accent: {
          DEFAULT: '#F97316',
          dark: '#C2410C',
        },
        background: {
          DEFAULT: '#265E78',
          light: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
}
