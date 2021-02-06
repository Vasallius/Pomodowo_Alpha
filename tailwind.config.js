module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        logo: "50px",
        task_id: "25px",
      },
      height: {
        logo: "50px",
        nav: "65px",
        task_id: "25px",
      },
      colors: {
        Black_Substitute: "#06112D",
        Main_Orange: "#FF9575",
        Light_Orange: "#FFE4DC",
        White: "#FFFFFF",
        Background: "#FBF8F1",
        Light_Yellow_Accent: "#F8F1E4",
      },
      zIndex: {
        "-10": "-10",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
