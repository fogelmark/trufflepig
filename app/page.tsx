"use client"

import { Description, Hero, Placeholder, ZoomParallax } from "@/components"
import { useEffect } from "react"
import Lenis from "lenis"

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Hero />
      <Description />
      <Placeholder />
      <ZoomParallax />
    </main>
  )
}
