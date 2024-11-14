"use client"

import {
  Drawer,
  Footer,
  Header,
  Hero,
  ImageSection,
  Placeholder,
  PreLoader,
  ZoomParallax,
} from "@/components"
import { useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import { useMediaQuery } from "usehooks-ts"
import { AnimatePresence, useScroll } from "framer-motion"
import { Cuts } from "@/components/cuts/cuts"
import { Heroo } from "@/components/hero/hero2"
import Desc from "@/components/cuts/desc"
import CutsTwo from "@/components/cuts/cuts2"
import CutsThree from "@/components/cuts/cuts3"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const container = useRef(null)

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

    requestAnimationFrame(raf)
  }, [])

  setTimeout(() => {
    setIsLoading(false)
  }, 500)

  const mediaQueryMatches = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
    defaultValue: false,
  })

  return (
    <main ref={container} className="relative h-[200vh]">
      {/* <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence> */}
      <Heroo scrollYProgress={scrollYProgress} />
      <Desc />
      <CutsThree />
      <Footer />
    </main>
  )
}
