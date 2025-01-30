"use client"

import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import React from "react"
import { useRef } from "react"

const sentences = [
  "We are a creative,",
  "entertainment, media & brand",
  "communications company",
]

export default function Intro() {
  const container = useRef(null)
  const isInView = useInView(container, { once: true, amount: 0.1 })

  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    closed: {
      y: "100%",
      transition: { duration: 1, ease: "easeInOut" },
    },
  }

  return (
    <h1
      ref={container}
      className={cn(
        "row-start-2 flex w-[60%] flex-wrap justify-center gap-x-2 justify-self-center text-center text-5xl font-medium uppercase tracking-[-0.03em] text-[hsl(0,3%,4%)]",
      )}
    >
      {sentences.map((sentence, index) => (
        <span
          key={index}
          className="relative inline-flex overflow-hidden leading-[3.5rem]"
        >
          <motion.span
            variants={slideUp}
            custom={index}
            initial="closed"
            animate={isInView ? "open" : "closed"}
          >
            {sentence}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}
