"use client"

import { slideDown } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import React, { useRef } from "react"

const paragraph =
  "Punch Publishing is a music publishing company based in Stockholm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

export default function About() {
  const description = useRef(null)
  const isInView = useInView(description, { once: true, amount: 0.3 })
  const phrase = paragraph.split(" ")

  return (
    <div
      // className="sticky top-0 flex h-screen flex-col items-center bg-red-500"
      className="sticky top-0 flex h-screen flex-col items-center"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      <div className="flex fixed top-0 flex-grow items-center justify-center bg-white h-screen">
        <p
          ref={description}
          className={cn(
            "flex w-1/2 flex-wrap items-center justify-center gap-x-2 text-3xl tracking-[-0.03em] text-[hsl(0,3%,4%)]",
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
