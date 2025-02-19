/* eslint-disable */

"use client"

import { motion, MotionValue } from "motion/react"
import { Subgrid } from "./subgrid"
import Intro from "./intro"
import Logo from "@/public/svg/logo_black.svg"
import { fadeInOut } from "@/lib/animations"

interface HeroProps {
  scrollYProgress: MotionValue<number>
  isPreloaderComplete: boolean
}

export function Hero({ isPreloaderComplete }: HeroProps) {
  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 grid min-h-screen w-full grid-cols-2 grid-rows-3 items-center px-10 py-4 max-sm:relative max-sm:min-h-dvh max-sm:px-0"
        {...fadeInOut}
      >
        <Intro />
        <Logo className="absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-50 max-sm:size-[90%] max-sm:opacity-5 2xl:size-[500px]" />
        <Subgrid />
      </motion.div>
    </div>
  )
}
