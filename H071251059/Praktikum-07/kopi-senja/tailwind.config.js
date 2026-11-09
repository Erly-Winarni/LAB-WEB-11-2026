/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        krim: "#F6EEE3",
        krimtua: "#EADBC8",
        espresso: "#1F1713",
        mocha: "#3A2A21",
        karamel: "#9A5B34",
        madu: "#C98A55",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
