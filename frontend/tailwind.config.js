/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        "chung-light-grey": "#F8F9FA",
        "chung-light-grey2": "#F3F3F3",
        "chung-light-grey2": "#F8F9FA",
        "chung-border-gray1": "#f1f3f4",
        "chung-text1": "#2F3033",
      },
    },
  },
  plugins: [require("daisyui")],
};
