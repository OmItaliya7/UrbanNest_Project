/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {

      colors: {
        primary: "#2563eb",
        primaryHover: "#1d4ed8",
        section: "#f9fafb",
        footer: "#111827"
      },

    },
  },
  plugins: [],
}