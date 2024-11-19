/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "scale-bounce": "scale-bounce 0.8s ease-in-out",
      },
      keyframes: {
        "scale-bounce": {
          "10%": { transform: "scale(0.90)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
