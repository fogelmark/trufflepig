"use client"

import { slideDown } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import React, { useRef } from "react"

const paragraph =
  "Punch Publishing is a music publishing company based in Stockholm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

export default function Description() {
  const description = useRef(null)
  const isInView = useInView(description, { once: true, amount: 0.1 })
  const phrase = paragraph.split(" ")

  return (
    <div className="sticky top-0 flex h-screen flex-col items-center bg-white">
      <div className="flex flex-grow items-center justify-center">
        <p
          ref={description}
          className={cn(
            "flex w-1/2 flex-wrap items-center gap-x-2 text-2xl tracking-[-0.03em] text-[hsl(0,3%,4%)]",
          )}
        >
          {phrase.map((word, index) => (
            <span
              key={index}
              className="inline-flex overflow-hidden leading-tight"
            >
              <motion.span
                variants={slideDown}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
