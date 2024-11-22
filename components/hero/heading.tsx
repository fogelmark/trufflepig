/* eslint-disable */

import { headingNowTrial46Bold } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

export function Heading() {
  const container = useRef(null)
  const isInView = useInView(container, { once: true })
  const heading = "truffle pig publishing"
  const words = heading.split(" ")

  const slideUp = {
    initial: {
      y: "100%",
      skewY: "5deg",
    },
    open: (i: number) => ({
      y: 0,
      skewY: "0deg",
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    closed: {
      y: "100%",
      skewY: "5deg",
      transition: { duration: 1, ease: "easeInOut" },
    },
  }

  return (
    <h1
      ref={container}
      className={cn(
        headingNowTrial46Bold.className,
        "row-start-3 w-full font-trial46bold lowercase flex self-end overflow-hidden justify-between text-[14vw]",
      )}
    >
      {words.map((word, index) => (
        <span key={index} className="relative inline-flex">
          <motion.span
            variants={slideUp}
            initial="closed"
            animate={isInView ? "open" : "closed"}
            custom={index}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}
