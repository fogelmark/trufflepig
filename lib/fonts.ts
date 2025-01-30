import { Archivo, Fira_Code, Archivo_Black, Archivo_Narrow, Arimo, Fjalla_One, Inter, Lora, Montserrat, Playfair_Display, Poppins, Roboto, Yantramanav } from "next/font/google"
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

export const fira_code = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

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

export const fjalla = Fjalla_One({
  weight: ["400"],
  subsets: ["latin"],
})

export const arimo = Arimo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const archivo_narow = Archivo_Narrow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const yamata = Yantramanav({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})