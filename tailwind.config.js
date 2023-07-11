module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_07": "#00000007",
          "900_26": "#00000026",
          "900_4c": "#0000004c",
        },
        green: { A700_66: "#00cb6266", A700: "#00cb62", A700_54: "#00cb6254" },
        gray: {
          50: "#f9f9f9",
          100: "#f1f4f7",
          300: "#e5e5e5",
          500: "#a8a8a8",
          600: "#686d73",
          800: "#4e4e4e",
          900: "#111111",
          "500_f4": "#a7a7a7f4",
          "500_01": "#949494",
          "600_01": "#757575",
        },
        teal: { "900_4c": "#0025544c" },
        blue_gray: {
          100: "#d3d8df",
          300: "#9ba7b6",
          900: "#333333",
          "100_b2": "#d3d8dfb2",
          "900_01": "#212b36",
        },
        yellow: { 700: "#ffb829" },
        red: { A700: "#b30000" },
        blue: { 800: "#0052bd" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        arial: "Arial",
        inter: "Inter",
        outfit: "Outfit",
        verdana: "Verdana",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
