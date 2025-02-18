/* eslint-disable */

"use client"

import { Drawer, MenuButton } from "@/components"
import { FixedHeader } from "./fixed-header"
import { motion } from "motion/react"
import { useMediaQuery } from "usehooks-ts"
import { useOpenContext } from "@/lib/hooks/use-context"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const mediaQueryMatches = useMediaQuery("(min-width: 768px)")
  const { isOpen, setOpen, setIsPreloaderComplete } = useOpenContext()
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
      className="fixed top-0 z-10 grid w-full grid-cols-3 content-between overflow-hidden bg-white p-4 transition-all duration-300 max-sm:grid-cols-[20%_60%_20%] max-sm:p-1"
    >
      <FixedHeader />
      <MenuButton isOpen={isOpen} setOpen={setOpen} />
      <Drawer isOpen={isOpen} setOpen={setOpen} />
    </motion.header>
  )
}
