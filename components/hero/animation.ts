export const slideUp = {
    initial: { y: "100%" },
    open: {
      y: "0%",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
    },
    closed: {
      y: "100%",
      transition: { duration: 3, ease: "easeInOut" },
    },
  }

export const opacity = {
  initial: {
      opacity: 0
  },
  open: {
      opacity: 1,
      transition: {duration: 0.5}
  },
  closed: {
      opacity: 0,
      transition: {duration: 0.5}
  }
}