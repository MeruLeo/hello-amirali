/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #FF8660, #9A33FF)",
        "orange-gradient": "linear-gradient(to right, #FF8660, #D5491D)",
        "blue-gradient": "linear-gradient(to right, #5BADFF, #1373D1)",
      },
      colors: {
        "dark-bg": "#161513",
        "dark-header": "#1e1e1d",
        "secondary-text": "#C5C5C5",
        "primary-purple": "#9A33FF",
        "primary-orange": "#D5491D",
        "card-color": "#2A2A2A",
        "light-text": "#9f9f9f",
        "active-link-text": "#121212",
      },
      fontFamily: {
        sfbold: ["sf-bold", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
    },
  },
  plugins: [],
};
