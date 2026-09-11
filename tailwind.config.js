/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#27231f',
        paper: '#f6f0e6',
        terracotta: '#b85c3a',
        indigo: '#4c536f',
        olive: '#69715a',
        sand: '#e8dccb'
      }
    }
  },
  plugins: []
}
