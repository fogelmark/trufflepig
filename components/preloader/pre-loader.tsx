/* eslint-disable */

import { motion } from "framer-motion"
import logo from "@/public/logo/Logo_white.png"
import Image from "next/image"

const curtain = {
  initial: {
    y: 0, // Start fully covering the screen
  },
  animate: {
    y: "100vh",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
}

interface PreLoaderProps {
  handlePreloaderComplete: () => void
}

export function PreLoader({ handlePreloaderComplete }: PreLoaderProps) {
  return (
    <motion.div
      variants={curtain}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={() => handlePreloaderComplete()}
      className="fixed inset-0 z-[99] flex h-full w-full items-center justify-center bg-gray-primary"
    >
      <Image
        src={logo}
        alt="Logo"
        width={300}
        height={300}
        priority
        draggable={false}
      />
    </motion.div>
  )
}
