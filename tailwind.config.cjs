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
        fadeIn: "fadeIn 0.8s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      scrollBehavior: ['smooth']
    },
    screens: {
      xs: "480px", // Smartphones
      sm: "640px", // Smaller devices (iPhone 5/SE)
      md: "768px", // Tablets
      lg: "1024px", // Small laptops
      xl: "1280px", // Large laptops and desktops
      "2xl": "1536px", // Extra large screens
    },
  },
  plugins: [
    // Optional: For maintaining aspect ratios
  ],
};
