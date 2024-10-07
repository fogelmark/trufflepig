import { Hero } from "@/components"
import IntroText from "@/components/intro-text"
import ParallaxContent from "@/components/parallax-template"
import React from "react"

export default function Home() {
  return (
    <main data-testid="main">
      <Hero />
      <div className="flex flex-col gap-36 px-6 md:px-28 py-36">
        <IntroText />
        <ParallaxContent />
      </div>
    </main>
  )
}
