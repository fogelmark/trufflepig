"use client"

import { Drawer, MenuButton, Nav } from "@/components"
import { motion } from "framer-motion"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"

export function Header() {
  const [isOpen, setOpen] = useState(false)
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")

  if (mediaQueryMatches && isOpen) {
    setOpen(false)
  }

  return (
    <motion.header
      data-testid="header"
      className="absolute top-0 z-10 flex w-full items-center justify-center px-6 py-3 text-[hsl(0,3%,4%)] transition-all duration-300 md:px-10 md:py-6"
    >
      <Nav isOpen={isOpen} />
      <MenuButton isOpen={isOpen} setOpen={setOpen} />
      <Drawer isOpen={isOpen} />
    </motion.header>
  )
}
