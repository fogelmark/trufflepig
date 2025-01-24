import { motion, useInView } from "motion/react"
import { slideUp, slideUpDelayed } from "./animation"
import { useRef } from "react"

export function Description() {
  const container = useRef(null)
  const isInView = useInView(container, { once: true })

  return (
    <div
      className="row-start-3 flex text-end flex-col justify-between overflow-hidden self-center"
      ref={container}
    >
      <motion.p
        variants={slideUp}
        initial="closed"
        animate={isInView ? "open" : "closed"}
      >
        Indie publishing company based in
        <br />
      </motion.p>
      <motion.p
        variants={slideUpDelayed}
        initial="closed"
        animate={isInView ? "open" : "closed"}
      >
        Stockholm.
      </motion.p>
    </div>
  )
}
