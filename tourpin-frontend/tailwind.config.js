/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',   // mobile → tablet
      md: '768px',   // tablet → small laptop
      lg: '1024px',  // laptop
      xl: '1280px',  // desktop
      '2xl': '1536px' // large screens
    },
  },
  plugins: [],
}
