import { fadeInOut } from "@/lib/animations"
import { archivo_black } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Logo() {

  return (
    <motion.div
      {...fadeInOut}
      className={cn(archivo_black.className, "text-4xl -tracking-widest")}
    >
      truffle pig
    </motion.div>
  )
}
