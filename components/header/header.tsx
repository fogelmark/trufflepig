"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Spiral as Hamburger } from "hamburger-react"
import { useMediaQuery } from "usehooks-ts"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Logo } from "./logo"
import { MenuButton } from "./menu-button"

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
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export function Header() {
  const { scrollY } = useScroll()
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")
  const [isOpen, setOpen] = useState(false)

  if (mediaQueryMatches && isOpen) {
    setOpen(false)
  }

  const textColor = useTransform(scrollY, [0, 50], ["#fff", "#000"])
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    [
      "none",
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    ],
  )
  const borderColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.1)"],
  )
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 1)"],
  )

  return (
    <motion.header
      style={{ backgroundColor, boxShadow, borderColor }}
      className={classes.header}
    >
      <Logo textColor={textColor} />
      <MenuButton isOpen={isOpen} setOpen={setOpen} textColor={textColor} />

      <motion.nav
        {...fadeInOut}
        className={cn({
          "fixed inset-0 flex h-full w-full items-center justify-center bg-white":
            isOpen,
          "max-md:hidden": !isOpen,
        })}
      >
        <motion.ul
          variants={listVariants}
          className={cn({
            "flex flex-col items-center gap-4 text-4xl": isOpen,
            hidden: !isOpen,
          })}
        >
          {["Home", "About", "Contact"].map((item) => (
            <motion.li
              key={item}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              style={{ color: textColor }}
              className={cn(classes.li, { "!text-black": isOpen })}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        {!isOpen && (
          <ul className="flex gap-4">
            {["Home", "About", "Contact"].map((item) => (
              <motion.li
                {...fadeInOut}
                key={item}
                className={classes.li}
                style={{ color: textColor }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.nav>
    </motion.header>
  )
}

const classes = {
  header:
    "sticky top-0 z-10 flex items-center justify-between border-b border-gray-300 px-6 py-6 transition-all duration-300",
  li: "cursor-pointer font-semibold uppercase underline-offset-8 hover:underline",
}
