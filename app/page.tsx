/* eslint-disable */

"use client"

import { AnimatePresence, useScroll } from "framer-motion"
import { Footer, Hero, PreLoader } from "@/components"
import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import Description from "@/components/description"
import FeaturedSongs from "@/components/songs/featured-songs"
import Lenis from "lenis"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const container = useRef(null)
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  const handlePreloaderComplete = () => {
    setIsPreloaderComplete(true);
  };

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    window.scrollTo(0, 0)

    requestAnimationFrame(raf)
  }, [])

  setTimeout(() => {
    handlePreloaderComplete()
    setIsLoading(false)
  }, 1500)

  const mediaQueryMatches = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
    defaultValue: false,
  })

  return (
    <main ref={container} className="relative h-[200vh]">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader handlePreloaderComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      <Hero isPreloaderComplete={isPreloaderComplete} scrollYProgress={scrollYProgress} />
      <Description />
      <FeaturedSongs />
      <Footer />
    </main>
  )
}
