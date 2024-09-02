/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#F0F0F0",
        desc: "rgb(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
