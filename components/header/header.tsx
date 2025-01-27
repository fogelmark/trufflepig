/* eslint-disable */

"use client"

import { Drawer, MenuButton } from "@/components"
import { FixedHeader } from "./fixed-header"
import { motion } from "motion/react"
import { useMediaQuery } from "usehooks-ts"
import { useOpenContext } from "@/lib/hooks/use-context"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setOpen] = useState(false)
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")
  const { isPreloaderComplete, setIsPreloaderComplete } = useOpenContext()
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) {
      setIsPreloaderComplete(true)
    }
  }, [isHomePage, setIsPreloaderComplete])

  if (mediaQueryMatches && isOpen) {
    setOpen(false)
  }

  return (
    <motion.header
      data-testid="header"
      className="fixed top-0 z-10 grid w-full grid-cols-8 bg-white py-4 px-6 overflow-hidden transition-all duration-300"
    >
      {/* {isPreloaderComplete && <FixedHeader />} */}
      <FixedHeader />
      {/* <MenuButton isOpen={isOpen} setOpen={setOpen} />
      <Drawer isOpen={isOpen} /> */}
    </motion.header>
  )
}
