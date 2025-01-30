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
      <div className="grid fixed top-0 h-screen grid-rows-3 grid-cols-1 items-center py-4">
        {isPreloaderComplete && (
          <>
            <Intro />
          </>
        )}
        <Subgrid />
      </div>
    </div>
  )
}
