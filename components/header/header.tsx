"use client"

import { Drawer, MenuButton, Nav } from "@/components"
import { motion } from "framer-motion"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"
import { archivo_black, playfair } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import logo from "@/public//logo/logo_black_02.png"
import Image from "next/image"

export function Header() {
  const [isOpen, setOpen] = useState(false)
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")

  if (mediaQueryMatches && isOpen) {
    setOpen(false)
  }

  return (
    <motion.header
      data-testid="header"
      // mix-blend-difference maybe
      className="absolute top-0 z-10 flex w-full items-center justify-center text-[hsl(0,3%,4%)] px-6 py-3 transition-all duration-300 md:px-10 md:py-6"
    >
      {/* <p className={cn(playfair.className, "text-md font-semibold")}>Truffle Pig Publishing</p> */}
      <Nav isOpen={isOpen} />
      <MenuButton isOpen={isOpen} setOpen={setOpen} />
      <Drawer isOpen={isOpen} />
    </motion.header>
  )
}
