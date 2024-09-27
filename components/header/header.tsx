"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useMediaQuery } from "usehooks-ts"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Logo, MenuButton } from "@/components"
import { Nav } from "./nav"
import { useHeaderStyles } from "@/lib/hooks"

const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

// const variants = {
//   open: { opacity: 1, y: 0 },
//   closed: { opacity: 0, y: 20 },
// }

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export function Header() {
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")
  const [isOpen, setOpen] = useState(false)
  const { textColor, boxShadow, borderColor, backgroundColor } = useHeaderStyles()

  if (mediaQueryMatches && isOpen) {
    setOpen(false)
  }

  return (
    <motion.header
      style={{ backgroundColor, boxShadow, borderColor }}
      className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-300 px-6 py-6 transition-all duration-300"
    >
      <Logo textColor={textColor} />
      <MenuButton isOpen={isOpen} setOpen={setOpen} textColor={textColor} />
      <Nav isOpen={isOpen} textColor={textColor} />
    </motion.header>
  )
}
