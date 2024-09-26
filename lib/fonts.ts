import { Archivo_Black, Inter, Poppins } from "next/font/google"

export const inter = Inter({ subsets: ["latin"] })

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
})

export const archivo_black = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
})