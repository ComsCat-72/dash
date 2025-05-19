// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('./src/assets/1.png')",
      },
      colors: {
        primary: "#FFD700",
        gold: "#FFD700",
      },
    },
  },
  plugins: [],
};
