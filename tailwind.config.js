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
          "radial-gradient(circle at 20% 20%, rgba(94, 129, 255, 0.35), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.1), transparent 25%), linear-gradient(120deg, #0b1224 0%, #0d1020 30%, #0f152f 100%)",
      },
    },
  },
  plugins: [],
};


