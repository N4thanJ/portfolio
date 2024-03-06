/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'tertiair': '#f77f00',
      'secondary': '#003049',
      'primary': '#D6FFF6',
      'white': '#fff',
      'black': '#000',
      'grey': '#A9A9A9',
      'seablue': '#002030',
      'blue': '#0000ff',
    },
  },
  plugins: [],
};
