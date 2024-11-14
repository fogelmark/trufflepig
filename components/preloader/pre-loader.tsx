/* eslint-disable */

"use client"

import { motion } from "framer-motion"
import logo from "@/public/logo/Logo_white.png"
import Image from "next/image"

const curtain = {
  initial: {
    y: 0,
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
    <>
      <motion.div
        variants={curtain}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={() => handlePreloaderComplete()}
        className="fixed inset-0 z-[90] flex h-full w-full items-center justify-center bg-gray-primary"
      ></motion.div>
      <Image
        className="fixed left-1/2 top-1/2 z-[95] -translate-x-1/2 -translate-y-1/2 transform"
        src={logo}
        alt="Logo"
        width={300}
        height={300}
        priority
        loading="eager"
        draggable={false}
      />
    </>
  )
}
