/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"], // <-- Inter
        robotoMono: ["var(--font-roboto-mono)", "monospace"], // optional
      },
    },
  },
  plugins: [],
};
