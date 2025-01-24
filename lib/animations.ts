export const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
}

export const slideUp = {
  initial: { y: 10 },
  animate: { y: 0, transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 0 } },
  exit: { y: 50, transition: { duration: 1, ease: "easeInOut" } },
}

export const slideDown = {
  initial: {
    y: "-100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.02 * i,
    },
  }),
  closed: {
    y: "-100%",
    transition: { duration: 0.5 },
  },
}