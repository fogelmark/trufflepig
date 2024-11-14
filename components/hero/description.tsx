import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { slideUp } from "./animation"

export function Description() {
  const container = useRef(null)
  const isInView = useInView(container, { once: true })

  return (
    <div
      className="row-start-4 self-start flex justify-between overflow-hidden"
      ref={container}
    >
      <motion.h2
        variants={slideUp}
        initial="closed"
        animate={isInView ? "open" : "closed"}
        className="ml-auto w-1/3 text-end"
      >
        Indie publishing company based in
        <br /> <span>Stockholm.</span>
      </motion.h2>
    </div>
  )
}
