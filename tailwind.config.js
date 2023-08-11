/** @type {import('tailwindcss').Config} */
module.exports = {

purge:{content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  options:{
    safelist:[
      'lightgreen',
    ],
  },


},
  theme: {
    extend: {
      colors: {
        blue: "#3D1DF3",
        green: "#00EA77",
        lightgreen: "#C7FFB1",
        yellow: "#F8E169",


      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ["Poppins"],
      },
    },
  },
  plugins: [],
};
