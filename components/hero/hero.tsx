"use client"

import { fadeInOut } from "@/lib/animations"
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Heading } from "./heading"
import { Description } from "./description"
import { Subgrid } from "./subgrid"
import Image from "next/image"
import logo from "@/public/logo/logo_black_02.png"

interface HeroProps {
  scrollYProgress: MotionValue<number>
}

export function Hero({ scrollYProgress }: HeroProps) {
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
        style={{ scaleX, filter }}
      >
        <motion.div
          // {...fadeInOut}
          className="grid h-screen grid-flow-row grid-cols-1 items-center py-4"
          style={{ y }}
        >
        {/* <Image
          className="absolute opacity-10"
          src={logo}
          alt="kuk"
          width={300}
          height={300}
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        /> */}
          <Heading />
          <Description />
          <Subgrid />
        </motion.div>
      </motion.div>
    </div>
  )
}
