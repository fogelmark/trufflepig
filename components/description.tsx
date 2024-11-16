"use client"

import { slideDown } from "@/lib/animations"
import { playfair } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import React, { useRef } from "react"

const paragraph =
  "Truffle Pig is a music publishing company based in Stockholm. By working closely with artists, we help them navigate the music industry and provide them with the tools they need to succeed."

export default function Description() {
  const description = useRef(null)
  const isInView = useInView(description, { once: true })
  const phrase = paragraph.split(" ")

  return (
    <div className="sticky top-0 flex h-screen items-center justify-start bg-white px-10">
      <p
        ref={description}
        className={cn(
          playfair.className,
          "flex flex-wrap items-center justify-center gap-x-2 text-5xl text-[hsl(0,3%,4%)]",
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
  )
}
