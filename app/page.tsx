"use client"

import {
  Cuts,
  Description,
  Hero,
  ImageSection,
  Placeholder,
  ZoomParallax,
} from "@/components"
import { useEffect } from "react"
import Lenis from "lenis"
import { useMediaQuery } from "usehooks-ts"
import { ImagesSliderDemo } from "@/components/hero-demo"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const mediaQueryMatches = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
    defaultValue: false,
  })

  return (
    <main>
      {/* <ImagesSliderDemo /> */}
      <Hero />
      {/* <Description /> */}
      <Cuts />
      {/* <Placeholder /> */}
      {/* {mediaQueryMatches ? <ZoomParallax /> : <ImageSection />} */}
    </main>
  )
}
