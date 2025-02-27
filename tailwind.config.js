/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%', // Set 100% width for small screens
        md: '100%', // Set 100% width for medium screens
        lg: '100%', // Set 100% width for large screens
        xl: '100%', // Set a fixed width for extra-large screens
        '2xl': '1536px', // Set a fixed width for 2xl screens
      },
      padding: '1.5rem',
    },
    extend: {},
  },
  plugins: [],
}

