import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "left-[-27vw]",
    "left-[27vw]",
  ],
  theme: {
    extend: {
      colors: {
        "red-primary": "#f34848",
        "gray-primary": "#1d2120",
      },
      backgroundImage: {
        "hero-pattern": "url(/images/artist.webp)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
export default config
