/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{js,jsx}"],
  theme: {
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
  plugins: [],
};
