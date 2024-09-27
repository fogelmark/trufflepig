import { fadeInOut } from "@/lib/animations"
import { archivo_black } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { motion, MotionValue } from "framer-motion"

type LogoProps = {
  textColor: MotionValue<string>
}

export function Logo(props: LogoProps) {
  const { textColor } = props

  return (
    <motion.div
      {...fadeInOut}
      style={{ color: textColor }}
      className={cn(archivo_black.className, "text-4xl -tracking-widest")}
    >
      brand.
    </motion.div>
  )
}
