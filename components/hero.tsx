"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function Hero() {
  const { scrollY } = useScroll()
  const SECTION_HEIGHT = 500

  // const opacity = useTransform(
  //   scrollY,
  //   [SECTION_HEIGHT, SECTION_HEIGHT + 250],
  //   [1, 0],
  // )

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 250],
    ["120%", "100%"],
  )

  return (
    <div
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <motion.div
        className="sticky inset-0 h-screen w-full bg-hero-pattern bg-cover bg-center bg-no-repeat"
        style={{ backgroundSize }}
      ></motion.div>
    </div>
  )
}
