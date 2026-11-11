/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        accent: {
          DEFAULT: "var(--accent)",
          deep: "var(--accent-deep)",
        },
        highlight: "var(--highlight)",
      },
      fontFamily: {
        heading: ["var(--font-qurova)", "system-ui", "sans-serif"],
        sans: ["var(--font-altone)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        large: "28px",
      },
      lineHeight: {
        tight: "1.1",
      },
    },
  },
  plugins: [],
};
