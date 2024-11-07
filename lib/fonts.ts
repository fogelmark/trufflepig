import { Archivo_Black, Inter, Montserrat, Play, Playfair_Display, Poppins } from "next/font/google"

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
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic", "normal"]
})

export const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
})