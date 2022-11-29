const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", ...fontFamily.sans],
      },
      fontSize: {
        heroheading: "3.75rem",
        faqheading: "3.375rem",
        cardheading: "3.5rem",
        footerelements: "0.938rem",
      },
      colors: {
        primary: "#6E6E6C",
        green: "#00D2BD",
        blue: "#2246F4",
        darkblue: "#060FE6",
        grey: "#6E6E6C",
        wrappergrey: "#EAF4FC",
        greyline: "#8896A6",
        footerblack: "#242424",

        cardtext: "#757095",
        bordergrey: "#E9E9E9",
        faqtext: "#1B1C31",
        footertext: "#454545",
        bordergrey: "#f2f2f2",
        courseheading: "#333333",
        coursecardinstructor: "#949494",
        coursecardline: "#e1e1e1",
        coursediscount: "#8b8b8b",
        coursediscountstrike: "#BB0000",
        bluebutton: "#2246F4",
        coursedetails: "#001B40",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
