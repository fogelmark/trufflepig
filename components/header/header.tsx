"use client"

import { motion } from "framer-motion"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"
import { Icons, Logo, MenuButton, Nav } from "@/components"
import { useHeaderStyles } from "@/lib/hooks"
import Youtube from "@/public/svg/youtube.svg"

export function Header() {
  const [isOpen, setOpen] = useState(false)
  const { textColor, boxShadow, borderColor, backgroundColor } =
    useHeaderStyles()
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")

  if (mediaQueryMatches && isOpen) {
    setOpen(false)
  }

  return (
    <header
      data-testid="header"
      // style={{ backgroundColor, boxShadow, borderColor }}
      className="h-[100px] fixed w-full top-0 z-10 flex items-center justify-between border-b border-gray-300 px-10 py-6 transition-all duration-300"
    >
      {/* <Logo textColor={textColor} /> */}
      {/* <Nav isOpen={isOpen} textColor={textColor} /> */}
      {/* <MenuButton isOpen={isOpen} setOpen={setOpen} textColor={textColor} /> */}
      <Youtube />
      <Icons />
    </header>
  )
}
