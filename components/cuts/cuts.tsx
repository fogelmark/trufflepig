"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cuts } from "@/lib/data"
import { useTotalPlays } from "@/lib/hooks/use-total-plays"
import Image from "next/image"

export function Cuts() {
  const container = useRef(null)
  const playCounts: string[] = cuts.map((cut) => cut.spotifyPlays)
  const totalFormattedPlays: string = useTotalPlays(playCounts)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const getYTransform = (index: number) => {
    const startOffset = 1000 + index * 100
    return useTransform(
      scrollYProgress,
      [0, 0.1 + index * 0.1],
      [startOffset, 0],
    )
  }

  return (
    <div className="sticky top-0 h-[900vh] bg-white">
      <div className="sticky top-0 mx-auto grid h-screen w-[70vw] grid-cols-4 grid-rows-2 items-center justify-items-center gap-1">
      {/* <p className="absolute bottom-[35%] right-[70%] z-10 text-4xl font-bold text-black">Over {totalFormattedPlays} plays on Spotify.</p> */}
        {cuts.map((cut, index) => {
          const y = getYTransform(index)
          return (
            <motion.div
              key={index}
              style={{ y }}
              className={`group w-full overflow-hidden rounded-sm self-${cut.id > 4 ? "start" : "end"} row-start-${cut.id > 4 ? 2 : 1}`}
            >
              <img
                src={cut.image}
                alt={cut.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                // className="h-full w-full object-cover transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
