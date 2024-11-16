"use client"

import { Drawer, MenuButton } from "@/components"
import { motion } from "motion/react"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"
import { useOpenContext } from "@/lib/hooks/use-context"
import { FixedHeader } from "./fixed-header"

export function Header() {
  const [isOpen, setOpen] = useState(false)
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")
  const { isPreloaderComplete } = useOpenContext()

  if (mediaQueryMatches && isOpen) {
    setOpen(false)
  }

  return (
    <motion.header
      data-testid="header"
      className="fixed top-0 z-10 grid w-full grid-cols-8 py-4 overflow-hidden mix-blend-difference transition-all duration-300"
    >
      {isPreloaderComplete && <FixedHeader />}
      <MenuButton isOpen={isOpen} setOpen={setOpen} />
      <Drawer isOpen={isOpen} />
    </motion.header>
  )
}
