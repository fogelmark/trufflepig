import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Description() {
  const container = useRef(null)
  const isInView = useInView(container, { once: true })

  const slideUp = {
    initial: { y: "100%" },
    open: { 
      y: "0%", 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6} 
    },
    closed: { 
      y: "100%", 
      transition: { duration: 3, ease: "easeInOut" } 
    }
  }

  return (
    <div className="row-start-4 flex justify-between overflow-hidden" ref={container}>
      <motion.h2 
        variants={slideUp}
        initial="closed"
        animate={isInView ? "open" : "closed"}
        className="ml-auto w-1/3 self-end text-end"
      >
        Indie publishing company based in
        <br /> <span>Stockholm.</span>
      </motion.h2>
    </div>
  )
}
