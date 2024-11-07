"use client"

import { Drawer, MenuButton, Nav } from "@/components"
import { motion } from "framer-motion"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"
import { archivo_black, playfair } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setOpen] = useState(false)
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")

  if (mediaQueryMatches && isOpen) {
    setOpen(false)
  }

  return (
    <motion.header
      data-testid="header"
      className="fixed top-0 z-10 flex w-full items-center justify-between px-6 py-3 mix-blend-difference transition-all duration-300 md:px-10 md:py-6"
    >
      <motion.div
        className={cn(playfair.className, "font-semibold capitalize")}
      >
        truffle pig publishing
      </motion.div>
      <Nav isOpen={isOpen} />
      <MenuButton isOpen={isOpen} setOpen={setOpen} />
      <Drawer isOpen={isOpen} />
    </motion.header>
  )
}
