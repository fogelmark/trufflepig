import type { Config } from "tailwindcss"
import plugin from 'tailwindcss/plugin'

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
        "gray-bg": "#0f0e0e",
      },
      backgroundImage: {
        "noise": "url(/svg/noise.svg)",
        "concrete": "url(/images/green-concrete-wall.jpg)",
        "abstract-neutral": "url(/images/abstract-neutral.jpg)",
        "green-grunge": "url(/images/green-grunge.jpg)",
        "purple-watercolor": "url(/images/purple-watercolor.jpg)",
        "grape-curve": "url(/images/grape-curve.jpg)",
        "abstract-red": "url(/images/abstract-red.jpg)",
        "forest": "url(/images/cartoon-forest.jpg)",
        "10": "url(/images/10.jpg)",
        "abstract-paint": "url(/images/abstract-paint.jpg)",
        "abstract-green": "url(/images/abstract-green.jpg)",
      },
      clipPath: {
        "footer": "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.clip-footer': {
          clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
        },
      });
    }),
  ],
}
export default config
