export const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
      duration: 1,
    },
  },
}

export const item = {
  hidden: { y: 10, opacity: 0, filter: "blur(5px)" },
  show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
}