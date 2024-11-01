"use client"

import { Drawer, Logo, MenuButton, Nav } from "@/components"
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
      className="fixed top-0 z-10 flex w-full items-center justify-between px-6 py-3 text-[#f3f3f3] transition-all duration-300 md:p-4"
    >
      <Logo />
      <Nav isOpen={isOpen} />
      <MenuButton isOpen={isOpen} setOpen={setOpen} />
      <Drawer isOpen={isOpen} />
    </motion.header>
  )
}
