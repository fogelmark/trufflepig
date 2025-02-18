/* eslint-disable */

"use client"

import { motion } from "framer-motion"

const curtain = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  animate: {
    clipPath: [
      "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      "polygon(0 0, 100% 0, 100% 90%, 0 85%)",
      "polygon(0 0, 100% 0, 100% 20%, 0 15%)",
      "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
    ],
    transition: {
      duration: 1.5,
      ease: [0.215, 0.61, 0.355, 1],
      times: [0, 0.2, 0.8, 1],
    },
  },
}

interface PreLoaderProps {
  handlePreloaderComplete?: () => void
}

export function PreLoader({ handlePreloaderComplete }: PreLoaderProps) {
  return (
    <motion.div
      variants={curtain}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[90] flex h-full w-full items-center justify-center bg-gray-primary max-sm:hidden"
    />
  )
}
