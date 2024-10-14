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
      className="text-[#f3f3f3] absolute top-0 z-10 flex md:h-[100px] w-full items-center justify-between px-6 md:px-10 py-3 md:py-6 transition-all duration-300"
    >
      <Logo />
      <Nav isOpen={isOpen} />
      <MenuButton isOpen={isOpen} setOpen={setOpen} />
      <Drawer isOpen={isOpen} />
    </motion.header>
  )
}
