"use client"

import { cn } from "@/lib/utils"
import { dm_serif_text } from "@/lib/fonts"
import { motion } from "motion/react"
import { useRef } from "react"

const sentences = [
  "we are an",
  "indie music publishing",
  "company based in Stockholm",
]

export default function Intro() {
  const container = useRef(null)

  const slideUp = {
    initial: {
      y: "100%",
    },
    animate: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  return (
    <h1
      ref={container}
      className={cn(
        "row-start-3 col-start-2 max-sm:col-span-2 max-sm:row-start-2 flex w-full flex-col max-sm:items-center items-end max-sm:self-center self-end gap-x-2 text-3xl font-medium uppercase tracking-[-0.01em] text-[hsl(0,3%,4%)]",
        dm_serif_text.className,
      )}
    >
      {sentences.map((sentence, index) => (
        <span
          key={index}
          className="relative inline-flex overflow-hidden text-center leading-7"
        >
          <motion.span
            variants={slideUp}
            custom={index}
            initial="initial"
            animate="animate"
          >
            {sentence}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}
