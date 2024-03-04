/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{js,jsx}", "./src/components/*/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: `1rem`,
    },
    fontFamily: {
      "Inter-Regular": "Inter-Regular",
      "Inter-Bold": "Inter-Bold",
      "Inter-SemiBold": "Inter-SemiBold",
    },
    extend: {
      colors: {
        "main-color": "#121212",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
