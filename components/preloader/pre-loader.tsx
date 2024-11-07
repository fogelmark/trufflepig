import { motion } from "framer-motion"
// import { grow } from "./animation"
import logo from "@/public/logo/logo_black_02.png"

const grow = {
  initial: {
    borderWidth: "20vw"
  },
  exit: {
    borderWidth: "0vw",
    transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
  }
}

export function PreLoader() {
  return (
    <motion.div
      variants={grow}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute z-[99] flex h-screen w-screen items-center justify-center border-white"
    >
      <img src={logo.src} alt="Logo" />
    </motion.div>
  )
}
