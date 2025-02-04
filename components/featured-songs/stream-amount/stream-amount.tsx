import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react"
import { container, item } from "./animation"
import { formatCount, maxCount } from "./stream-count"
import { useEffect, useRef } from "react"

export function StreamAmount() {
  const cell = useRef(null)
  const isInView = useInView(cell, { amount: 1, once: true })

  const count = useMotionValue(0)
  useEffect(() => {
    const controls = animate(count, maxCount, { duration: 3.5 })
    return () => controls.stop()
  }, [isInView])

  const formattedCount = useTransform(count, (value) =>
    formatCount(Math.floor(value)),
  )

  setTimeout(() => {
    if (isInView) {
      count.set(0)
      count.set(maxCount)
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
