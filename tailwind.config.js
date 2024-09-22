/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px', // Adding a custom breakpoint
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
}