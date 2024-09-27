"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { archivo_black } from "@/lib/fonts"
import { Spiral as Hamburger } from "hamburger-react"
import { useMediaQuery } from "usehooks-ts"
import { useOpenContext } from "@/lib/hooks"
import { cn } from "@/lib/utils"

const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

export function Header() {
  const { scrollY } = useScroll()
  const matches = useMediaQuery("(min-width: 768px)")
  const { isOpen, setOpen } = useOpenContext()

  if (matches && isOpen) {
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
      <motion.span
        {...fadeInOut}
        style={{ color: textColor }}
        className={cn(archivo_black.className, "text-4xl -tracking-widest")}
      >
        brand.
      </motion.span>

      <motion.div
        className={cn("z-10 hidden max-md:block", { "!text-black": isOpen })}
        style={{ color: textColor }}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </motion.div>

      <motion.nav
        {...fadeInOut}
        className={cn({
          "fixed inset-0 flex h-full w-full items-center justify-center bg-white":
            isOpen,
          "max-md:hidden": !isOpen,
        })}
      >
        <ul
          className={cn({
            "flex flex-col items-center gap-4 text-4xl": isOpen,
            "flex gap-4": !isOpen,
          })}
        >
          {["Home", "About", "Contact"].map((item) => (
            <motion.li
              key={item}
              style={{ color: textColor }}
              className={cn(classes.li, { "!text-black": isOpen })}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  )
}

const classes = {
  header:
    "sticky top-0 z-10 flex items-center justify-between border-b border-gray-300 px-6 py-6 transition-all duration-300",
  li: "cursor-pointer font-semibold uppercase underline-offset-8 hover:underline",
}
