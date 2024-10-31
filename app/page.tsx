"use client"

import {
  Cuts,
  Description,
  Hero,
  ImageSection,
  Placeholder,
  PreLoader,
  ZoomParallax,
} from "@/components"
import { useEffect, useState } from "react"
import Lenis from "lenis"
import { useMediaQuery } from "usehooks-ts"
import { ImagesSliderDemo } from "@/components/hero-demo"
import { AnimatePresence } from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  setTimeout(() => {
    setIsLoading(false)
    window.scrollTo(0, 0)
  }, 500)

  const mediaQueryMatches = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
    defaultValue: false,
  })

  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence> */}
      {/* <ImagesSliderDemo /> */}
      <Hero />
      {/* <Description /> */}
      <Cuts />
      {/* <Placeholder /> */}
      {/* {mediaQueryMatches ? <ZoomParallax /> : <ImageSection />} */}
    </main>
  )
}
