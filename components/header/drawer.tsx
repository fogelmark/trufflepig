"use client"

import { drawerVariants, itemVariants } from "@/lib/variants"
import { motion } from "motion/react"
import { useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

type DrawerProps = {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const menuItems = [
  { text: "home", link: "/" },
  { text: "about", link: "/about" },
  { text: "writers", link: "/writers" },
  { text: "songs", link: "/songs" },
  { text: "instagram", link: "/" },
]

export function Drawer(props: DrawerProps) {
  const { isOpen, setOpen } = props

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed"
    } else {
      document.body.style.position = ""
    }
    return () => {
      document.body.style.position = ""
    }
  }, [isOpen])

  return (
    <motion.ul
      animate={isOpen ? "open" : "closed"}
      variants={drawerVariants}
      initial="closed"
      className={cn("fixed max-sm:h-dvh w-full flex flex-col items-center justify-center gap-4 bg-red-primary capitalize",)}
    >
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="flex gap-2 text-4xl"
        >
          <Link href={item.link} onClick={() => setOpen(false)}>
          {item.text}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}
