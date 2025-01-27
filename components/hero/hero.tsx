"use client"

import { motion, MotionValue, useScroll, useTransform } from "motion/react"
import { Subgrid } from "./subgrid"
import { useRef } from "react"
import Image from "next/image"
import logo from "@/public/logo/logo_black_02.png"

interface HeroProps {
  scrollYProgress: MotionValue<number>
  isPreloaderComplete: boolean
}

export function Hero({ scrollYProgress, isPreloaderComplete }: HeroProps) {
  const container = useRef(null)
  const { scrollY } = useScroll()

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["brightness(1)", "brightness(0.2)"],
  )

  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const y = useTransform(scrollY, [0, 1000], ["0%", "-60%"])

  return (
    <div
      ref={container}
      className="sticky top-0 h-screen w-full bg-black"
      style={{ containerType: "inline-size" }}
    >
      <motion.div
        className="bg-white px-10 text-black"
        // style={{ scaleX, filter }}
      >
        <motion.div
          className="grid h-screen grid-flow-row grid-cols-1 items-center py-4"
          style={{ y }}
        >
          {isPreloaderComplete && (
            <>
              <Image
                className="fixed left-1/2 top-1/2 z-[95] 2xl:w-[600px] 2xl:h-[600px] -translate-x-1/2 -translate-y-1/2 transform"
                src={logo}
                alt="Logo"
                width={300}
                height={300}
                priority
                loading="eager"
                draggable={false}
              />
              <Subgrid />
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
