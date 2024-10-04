import { Hero } from "@/components"
import IntroText from "@/components/intro-text"
import ParallaxContent from "@/components/parallax-template"
import React from "react"

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex flex-col gap-36 py-36 px-28">
      <IntroText />
      {/* <ParallaxContent /> */}
      </div>
    </main>
  )
}
