import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f6ff",
          100: "#e1e9ff",
          200: "#c7d5ff",
          300: "#9fb5ff",
          400: "#6f8bff",
          500: "#4f65f5",
          600: "#394ae0",
          700: "#2f3cba",
          800: "#2d3892",
          900: "#26316f",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(22, 35, 80, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
