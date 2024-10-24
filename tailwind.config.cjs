/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1440px", // Adjusted for common larger screen resolutions
      "2xl": "1700px",
    },
  },
  plugins: [
    // Optional: For maintaining aspect ratios
  ],
};
