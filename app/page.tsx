/* eslint-disable */

"use client"

import { AnimatePresence, useScroll } from "motion/react"
import { Hero, PreLoader } from "@/components"
import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import { useOpenContext } from "@/lib/hooks/use-context"
import Description from "@/components/description"
import Lenis from "lenis"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const container = useRef(null)
  const { isPreloaderComplete, setIsPreloaderComplete } = useOpenContext()

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    if (isPreloaderComplete) {
      setIsLoading(false)
      return
    }

    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    window.scrollTo(0, 0)
    requestAnimationFrame(raf)

    setTimeout(() => {
      setIsPreloaderComplete(true)
      setIsLoading(false)
    }, 2500)
  }, [isPreloaderComplete, setIsPreloaderComplete])

  const mediaQueryMatches = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
    defaultValue: false,
  })

  return (
    <main ref={container} className="relative h-[200vh]">
      <AnimatePresence mode="wait">
        <PreLoader
          handlePreloaderComplete={() => setIsPreloaderComplete(true)}
        />
        {/* {!isPreloaderComplete && isLoading && (
        )} */}
      </AnimatePresence>
      <Hero
        isPreloaderComplete={isPreloaderComplete}
        scrollYProgress={scrollYProgress}
      />
      <Description />
    </main>
  )
}
