/* eslint-disable */

"use client"

import { MotionValue } from "motion/react"
import { Subgrid } from "./subgrid"
import Intro from "./intro"

interface HeroProps {
  scrollYProgress: MotionValue<number>
  isPreloaderComplete: boolean
}

export function Hero({ isPreloaderComplete }: HeroProps) {
  return (
    <div className="relative px-10">
      <div className="fixed top-0 grid h-screen grid-cols-1 grid-rows-3 items-center py-4">
        <Intro />
        <Subgrid />
      </div>
    </div>
  )
}
