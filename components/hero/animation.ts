export const slideUp = {
    open: {
      y: 0,
      transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 0.8 },
    },
    closed: {
      y: 50,
      transition: { duration: 1, ease: "easeInOut" },
    },
  }

  export const slideUpDelayed = {
    open: {
      y: 0,
      transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 1.1 },
    },
    closed: {
      y: 25,
      transition: { duration: 1, ease: "easeInOut" },
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