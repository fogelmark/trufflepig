"use client"

import { cuts } from "@/lib/data"
import { useEffect, useRef } from "react"
import { useTotalPlays } from "@/lib/hooks/use-total-plays"
import { useInView, motion } from "framer-motion"

export function Cuts() {
  const container = useRef(null)
  const playCounts: string[] = cuts.map((cut) => cut.spotifyPlays)
  const totalFormattedPlays: string = useTotalPlays(playCounts)
  const isInView = useInView(container)

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  const imageVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  return (
    <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#0f0e0e] px-10 text-[#f5f3eee]">
      <motion.div
        ref={container}
        className="mx-auto grid w-fit grid-cols-8 justify-items-center gap-2"
      >
        {cuts.map((cut, index) => (
          <div className="overflow-hidden" key={index}>
            <motion.div
              className="relative"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              <img
                src={cut.image}
                alt={cut.title}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
