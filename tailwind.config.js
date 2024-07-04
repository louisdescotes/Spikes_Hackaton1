/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'newPlatform-gradient': 'linear-gradient(269.99deg, #3951E5 3.88%, #E693A5 101.06%)',
        'card-gradient': 'linear-gradient(269.99deg, #3951E5 3.88%, #E693A5 101.06%)',
      },
      colors: {
        "dark":"#282828",
        "grey":"#626262",
        "ocean":"#314EE7"
      },
      blur: {
        "custom" : "130px"
      }

    },
  },
  plugins: [],
}