/* eslint-disable */

"use client"

import { slideUpDelayed } from "@/components/hero/animation"
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
  const phrase_1 = paragraph.split(" ")

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
      className="relative grid min-h-screen place-content-center gap-10 clip-footer"
    >
      <div className="flex items-center justify-center bg-white">
        <p
          ref={description}
          className={cn(
            "flex w-[60%] flex-wrap items-center justify-center gap-x-2 text-4xl tracking-[-0.03em] text-[hsl(0,3%,4%)] max-sm:w-full max-sm:justify-start max-sm:px-4 max-sm:text-lg",
          )}
        >
          {phrase_1.map((word, index) => (
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
      <motion.a
        href="mailto:info@punchpublishing.com"
        className="text-[13px] justify-self-center"
        variants={slideUpDelayed}
        initial="initial"
        animate="animate"
      >
        info@punchpublishing.com
      </motion.a>
    </motion.div>
  )
}

