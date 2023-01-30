/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8E49E9",
        danger: "#E74D3D",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
