/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)"],
        mono: ["var(--font-poppins)"],
      },
    },
    colors: {
      main: "var(--main-color)",
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      white: "var(--white-color)",
      white_sceondary: "var(--secondary-white)",
      grey: "var(--color-grey)",
    },
    fontSize: {
      big: "var(--big-size)",
      medium_big: "var(--medium-big-size)",
      medium: "var(--medium-size)",
      medium_small: "var(--medium-small-size)",
      small: "var(--small-size)",
      text: "var(--text-size)",
      card_text: "var(--card-text-size)",
      form_text: "var(--form-text-size)",
    },
    fontWeight: {
      regular: "var(--regular)",
      medium: "var(--medium)",
      bold: "var(--bold)",
    },
  },
  plugins: [],
};
