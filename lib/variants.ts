export const drawerVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    y: "100%",
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
      delay: 0.5,
    },
  },
}

export const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: "100%",
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}