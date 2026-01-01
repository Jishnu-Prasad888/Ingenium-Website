/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif4: ['"Source Serif 4"', "serif"],
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-out forwards",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out",
      },
      keyframes: {
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionProperty: {
        all: "all",
      },
      scale: {
        98: "0.98",
        105: "1.05",
        110: "1.10",
      },
    },
  },
  plugins: [],
};
