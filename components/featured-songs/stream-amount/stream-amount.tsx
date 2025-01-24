import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"
import { container, item } from "./animation"
import { formatCount, maxCount } from "./stream-count"
import { useRef } from "react"

export function StreamAmount() {
  const cell = useRef(null)
  const isInView = useInView(cell, { amount: 1, once: true })

  const countValue = useMotionValue(0)
  const springValue = useSpring(countValue, { stiffness: 70, damping: 40 })
  const formattedCount = useTransform(springValue, (value) =>
    formatCount(Math.floor(value)),
  )

  setTimeout(() => {
    if (isInView) {
      countValue.set(0)
      countValue.set(maxCount)
    }
  }, 800)

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      ref={cell}
      className="col-start-1 row-start-3 self-center text-start text-5xl uppercase text-black"
    >
      <motion.span className="inline-flex" variants={item}>
        <motion.span>{formattedCount}</motion.span>
        <span>+ </span>
      </motion.span>
      <br />
      <motion.span className="inline-flex" variants={item}>
        streams
      </motion.span>
      <br />
      <motion.span className="inline-flex" variants={item}>
        on Spotify
      </motion.span>
    </motion.p>
  )
}
