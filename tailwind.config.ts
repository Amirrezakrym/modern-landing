import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {    
          'home-banner': "url('/assets/home-banner.jpg')",
          'grid': "url('/assets/grid.png')",
      },
    },
  },
  plugins: [],
};
export default config;
