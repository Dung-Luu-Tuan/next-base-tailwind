/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sarabun", "sans-serif"],
      },
      colors: {
        base: {
          white: "#fafafa",
          black: "#0b0a0a",
        },
        primary: {
          main: "#f78c32",
          100: "#feecdd",
          200: "#fcd9bb",
          300: "#fbc699",
          400: "#fab276",
          500: "#f89f54",
          600: "#f6770d",
          700: "#d36508",
          800: "#ae5307",
          900: "#894105",
          1000: "#632f04",
        },
        secondary: {
          main: "#fdb04c",
          100: "#ffefdb",
          200: "#fedfb7",
          300: "#fed094",
          400: "#fdc070",
          500: "#fd9f26",
          600: "#fa8f03",
          700: "#d57902",
          800: "#af6402",
          900: "#8a4f02",
          1000: "#643901",
        },
        neutrals: {
          100: "#e4e4e4",
          200: "#cfcece",
          300: "#bab8b8",
          400: "#a5a1a1",
          500: "#908b8b",
          600: "#7a7474",
          700: "#655f5f",
          800: "#4e4949",
          900: "#383434",
          1000: "#221f1f",
        },
        success: {
          main: "#a4f4e7",
          100: "#e8fcf9",
          200: "#d2faf3",
          300: "#bbf7ed",
          400: "#7eefdd",
          500: "#58ebd3",
          600: "#32e6c9",
          700: "#1ad4b6",
          800: "#15ae96",
          900: "#108975",
          1000: "#0c6355",
        },
        warning: {
          main: "#f4c790",
          100: "#fcf1e3",
          200: "#fae3c7",
          300: "#f7d5ac",
          400: "#f0b56b",
          500: "#eda247",
          600: "#e99022",
          700: "#ce7b14",
          800: "#aa6511",
          900: "#854f0d",
          1000: "#60390a",
        },
        error: {
          main: "#e4626f",
          100: "#fae0e2",
          200: "#f4c0c5",
          300: "#efa1a9",
          400: "#e9818c",
          500: "#de4252",
          600: "#d62537",
          700: "#b61f2e",
          800: "#961a26",
          900: "#76141e",
          1000: "#560f16",
        },
      },
      spacing: {
        xxs: "0.25rem", // 4px
        xs: "0.375rem", // 6px
        s: "0.5rem", // 8px
        sm: "0.75rem", // 12px
        base: "1rem", // 16px
        m: "1rem", // 16px
        ml: "1.5rem", // 24px
        l: "1.75rem", // 28px
        xl: "2rem", // 32px
        "2xl": "2.5rem", // 40px
        "3xl": "3rem", // 48px
        "4xl": "3.5rem", // 56px
        "5xl": "4rem", // 64px
        "6xl": "4.5rem", // 72px
        "7xl": "6rem", // 96px
        "8xl": "8rem", // 128px
      },
      borderRadius: {
        sharp: "0px",
        xxs: "2px",
        xs: "2px",
        s: "4px",
        sm: "8px",
        m: "16px",
        ml: "32px",
        lg: "64px",
        xl: "128px",
        round: "999px",
      },
    },
  },
  plugins: [],
};
