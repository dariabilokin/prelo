/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#F04F2D",
      primaryLight: "#ED684C",
      primaryDark: "#BA9C10",
      secondary: "#f5f3ed",
      secondaryDark: "#C9C8C6",
      secondaryLight: "#FBFAF8",
      white: "#fafafa",
      black: "#000",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#F04F2D",
      primaryLight: "#ED684C",
      primaryDark: "#BA9C10",
      secondary: "#f5f3ed",
      secondaryDark: "#C9C8C6",
      secondaryLight: "#FBFAF8",
      black: "#000",
      white: "#fafafa",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#F04F2D",
      primaryLight: "#ED684C",
      primaryDark: "#BA9C10",
      secondary: "#f5f3ed",
      secondaryDark: "#C9C8C6",
      secondaryLight: "#FBFAF8",
      black: "#000",
      gray: "#e5e7eb",
      white: "#fafafa",
    }),
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  screens: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [],
};
