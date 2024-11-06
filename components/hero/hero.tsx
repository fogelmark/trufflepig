"use client"

import { fadeInOut } from "@/lib/animations"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Heading } from "./heading"
import { Logo } from "../header"
import { Description } from "./description"
import logo_black_02 from "@/public/logo/logo_black_02.png"

export function Hero({ scrollYProgress }: any) {
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
    <div ref={container} className="sticky top-0 h-[100vh] w-full">
      <motion.div
        className="bg-[#f5f3ee] text-[#0f0e0e]"

        style={{ scaleX, filter }}
      >
        <motion.div
          {...fadeInOut}
          className="flex h-screen flex-col justify-end"
          style={{ y }}
        >
          <Logo />
          <Description />
          <Heading />
        </motion.div>
      </motion.div>
    </div>
  )
}
