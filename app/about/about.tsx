/* eslint-disable */

"use client"

import useLenis from "@/lib/hooks/useLenis"
import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import React, { useRef } from "react"

const paragraph =
  "Punch Publishing is a music publishing company based in Stockholm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

export default function About() {
  useLenis()
  const description = useRef(null)
  const isInView = useInView(description, { once: true, amount: 1 })
  const phrase = paragraph.split(" ")

  const slideDown = {
    initial: {
      y: "-100%",
    },
    open: (i: number) => ({
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 0.02 * i,
      },
    }),
    closed: {
      y: "-100%",
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className="relative flex h-screen flex-col items-center"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      <div className="flex h-screen flex-grow items-center justify-center bg-white">
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
                initial="closed"
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
    </motion.div>
  )
}
