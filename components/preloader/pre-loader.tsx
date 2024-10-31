import { motion } from "framer-motion"
import { grow } from "./animation"

export function PreLoader() {
  return (
    <motion.div
      variants={grow}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute z-[99] flex h-screen w-screen items-center justify-center border-white"
    />
  )
}
