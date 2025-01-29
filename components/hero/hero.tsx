"use client"

import { MotionValue } from "motion/react"
import { Subgrid } from "./subgrid"
import Image from "next/image"
import logo from "@/public/logo/logo_black_02.png"
import Intro from "./intro"

interface HeroProps {
  scrollYProgress: MotionValue<number>
  isPreloaderComplete: boolean
}

export function Hero({ isPreloaderComplete }: HeroProps) {
  return (
    <div className="sticky top-0 h-screen w-full px-10">
      <div className="grid h-screen grid-flow-row grid-cols-1 items-center py-4">
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
