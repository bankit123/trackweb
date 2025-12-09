/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecf3ff",
          100: "#d8e6ff",
          200: "#b4caff",
          300: "#8daeff",
          400: "#5f86ff",
          500: "#3e63f6",
          600: "#2f4ed4",
          700: "#283fa9",
          800: "#233785",
          900: "#1f2f6b",
          950: "#11193d",
        },
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 18% 20%, rgba(63, 99, 241, 0.18), transparent 32%), radial-gradient(circle at 85% 10%, rgba(14, 165, 233, 0.12), transparent 28%), linear-gradient(120deg, #f8fbff 0%, #f3f6ff 35%, #eef3ff 100%)",
      },
    },
  },
  plugins: [],
};


