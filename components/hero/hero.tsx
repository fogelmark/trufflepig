/* eslint-disable */

"use client"

import { motion, MotionValue } from "motion/react"
import { Subgrid } from "./subgrid"
import Intro from "./intro"
import Image from "next/image"
import logo from "@/public/logo/logo_black_02.png"
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
        className="fixed top-0 grid max-sm:h-dvh min-h-screen w-full grid-cols-2 grid-rows-3 items-center px-10 py-4 max-sm:px-4"
        {...fadeInOut}
      >
        <Intro />
        <Logo className="fixed left-1/2 top-1/2 max-sm:size-[90%] size-1/2 max-sm:opacity-10 opacity-50 -translate-x-1/2 -translate-y-1/2 transform 2xl:size-[500px]" />
        <Subgrid />
      </motion.div>
    </div>
  )
}
