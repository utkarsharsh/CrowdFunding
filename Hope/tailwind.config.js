/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueone: "#03254c",
        bluetwo: "#1167b1",
        bluethree: "#187bcd",
        bluefour: "#2a9df4",
        bluefive: "#d0efff",
        textbrown: "#3A1700",
        primary:"#009EFF",
        primaryDark:"#058BDE",
        secondary: "#000",
      },
      keyframes: {
        bgPulse: {
          "0%, 100%": { backgroundColor: "#d0efff" }, // Initial and final color (bluefive)
          "50%": { backgroundColor: "#BFE9FF" }, // Mid transition color (darker)
        },
        moveRight: {
          '0%': { 
            transform: 'translateX(-100%) rotate(0deg)', 
            opacity: '0' }, // Start from off-screen left and fully visible
         '100%': { 
            transform: 'translateX(90vw) rotate(360deg)', 
            opacity: '1' 
          },}
      },
      animation: {
        bgPulse: "bgPulse 5s ease-in-out infinite", // Define the animation duration and type
        moveRight: "moveRight 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
