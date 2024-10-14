/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundColor: {
      'custom-gradient': 'linear-gradient(90deg, rgba(61,80,203,1) 24%, rgba(219,11,205,1) 57%)',
    },},
  },
  plugins: [],
}

