"use client"

import Description from "@/components/description"
import Intro from "@/components/intro"
import Lenis from "lenis"
import { useEffect } from "react"
import Section from "@/components/section"
import ZoomParallax from "@/components/zoom-parallax"

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
      <Intro />
      <Description />
      <Section />
      <ZoomParallax />
    </main>
  )
}
