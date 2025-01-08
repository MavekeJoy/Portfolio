/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#1E293B", // Dark blue background
        },
        text: {
          light: "#FFFFFF", // White text for contrast
        },
        primary: "#4F46E5", // Left section color
        accent: "#14B8A6", // Teal for buttons and borders
        secondary: "#A78BFA", // Soft purple for hover effects
      },
  },
  },
  plugins: [],
}