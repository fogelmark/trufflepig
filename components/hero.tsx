"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

export function Hero() {
  const { scrollY } = useScroll()
  const SECTION_HEIGHT = 500
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 450],
    ["120%", "100%"],
  )

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Ensure we are in the client-side to avoid SSR mismatch
    setIsClient(true)
  }, [])

  return (
    <motion.div
      data-testid="hero"
      className="relative w-full"
      style={{
        height: isClient && mediaQueryMatches
          ? `calc(${SECTION_HEIGHT}px + 100vh)`
          : "100vh",
      }}
    >
      <motion.div
        className="inset-0 h-screen bg-hero-pattern bg-cover bg-center md:sticky"
        style={{ backgroundSize: isClient && mediaQueryMatches ? backgroundSize : "" }}
      ></motion.div>
    </motion.div>
  )
}
