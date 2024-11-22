/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "2xl": "1320px",
        "xl": "1140px",
        "lg": "960px",
        "md": "720px",
        "sm": "540px",
      }
    },
  },
  plugins: [],
}

