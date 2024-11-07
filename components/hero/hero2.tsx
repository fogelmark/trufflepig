"use client"

import { fadeInOut } from "@/lib/animations"
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Heading } from "./heading"
import { Logo } from "../header"
import nature from "@/public/images/yellow-nature.jpg"
import { playfair } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Description } from "./description"

interface HeroProps {
  scrollYProgress: MotionValue<number>
}

export function Heroo({ scrollYProgress }: HeroProps) {
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
    <div ref={container} className="sticky top-0 h-[100vh] w-full" style={{ containerType: 'inline-size' }}>
      <motion.div
        className="bg-[#f5f3ee] px-10 text-[hsl(0,3%,2%)]"
        style={{ scaleX, filter }}
      >
        <motion.div
          // {...fadeInOut}
          className="grid h-screen grid-cols-1 grid-flow-row items-center py-4"
          style={{ y }}
        >
          <Heading />
          <Description />
          <div className="subgrid row-start-5 grid grid-cols-8 grid-rows-1 self-end">
            <div className="col-start-3 italic"></div>
            <div className="col-start-1 font-semibold">SCROLL</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
