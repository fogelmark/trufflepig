import { Archivo_Black, Inter, Lora, Montserrat, Playfair_Display, Poppins } from "next/font/google"
import local from "next/font/local"

export const headingNowTrial46Bold = local({
  src: [
    {
      path: '../public/fonts/HeadingNowTrial-46Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const inter = Inter({ subsets: ["latin"] })

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
})

export const archivo_black = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
})

export const monteserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["italic", "normal"]
})

export const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})