import { playfair } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Heading() {
  const container = useRef(null)
  const isInView = useInView(container, { once: true })
  const heading = "Truffle Pig Publishing"
  const words = heading.split(" ")

  const slideUp = {
    initial: {
      y: "100%",
      skewY: "10deg",
    },
    open: (i: number) => ({
      y: "0%",
      skewY: "0deg",
      transition: {
        duration: 1,
        delay: 0.1 * i,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    closed: {
      y: "100%",
      skewY: "10deg",
      transition: { duration: 1, ease: "easeInOut" },
    },
  }

  return (
    <h1
      ref={container}
      className={cn(
        playfair.className,
        "row-start-3 flex self-end overflow-hidden justify-between gap-6 text-[9.2vw] font-semibold",
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
