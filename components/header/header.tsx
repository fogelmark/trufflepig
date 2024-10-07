"use client"

import { Drawer, Logo, MenuButton, Nav } from "@/components"
import { motion } from "framer-motion"
import { useHeaderStyles } from "@/lib/hooks"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"

export function Header() {
  const [isOpen, setOpen] = useState(false)
  const { textColor, boxShadow, borderColor, backgroundColor } = useHeaderStyles()
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")

  if (mediaQueryMatches && isOpen) {
    setOpen(false)
  }

  return (
    <motion.header
      data-testid="header"
      style={{ backgroundColor, boxShadow, borderColor }}
      className="fixed top-0 z-10 flex h-[100px] w-full items-center justify-between border-b border-gray-300 px-10 py-6 transition-all duration-300"
    >
      <Logo textColor={textColor} />
      <Nav isOpen={isOpen} textColor={textColor} />
      <MenuButton isOpen={isOpen} setOpen={setOpen} textColor={textColor} />
      <Drawer isOpen={isOpen} />
    </motion.header>
  )
}
