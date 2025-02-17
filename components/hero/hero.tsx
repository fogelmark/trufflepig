/* eslint-disable */

"use client"

import { MotionValue } from "motion/react"
import { Subgrid } from "./subgrid"
import Intro from "./intro"
import Image from "next/image"
import logo from "@/public/logo/logo_black_02.png"
import Logo from "@/public/svg/logo_black.svg"

interface HeroProps {
  scrollYProgress: MotionValue<number>
  isPreloaderComplete: boolean
}

export function Hero({ isPreloaderComplete }: HeroProps) {
  return (
    <div className="relative px-10">
      <div className="fixed top-0 grid h-screen w-full grid-cols-1 grid-rows-3 items-center py-4">
        {/* <Intro /> */}
        {/* <Image
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform 2xl:h-[400px] 2xl:w-[400px]"
          src={logo}
          alt="Logo"
          quality={100}
          width={300}
          height={300}
          priority
          loading="eager"
          draggable={false}
        /> */}
        <Logo className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform size-[300px] 2xl:size-[500px]" />
        <Subgrid />
      </div>
    </div>
  )
}
