/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '85rem', // Reduced from 90rem to 85rem (approximately 17cm)
      }
    },
  },
  plugins: [],
};