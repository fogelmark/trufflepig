import { useScroll, useTransform } from "framer-motion"

// export const { scrollY } = useScroll()

export const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

// export const textColor = useTransform(scrollY, [0, 50], ["#fff", "#000"])


