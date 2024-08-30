/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '20px': '20px',  // Custom blur value
      },
      boxShadow: {
        custom: '0 0 10px rgba(0, 0, 0, 0.2)',  // Custom shadow
      },
    },
  },
  plugins: [],
}