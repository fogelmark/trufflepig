/* eslint-disable */

"use client"

import { drawerVariants, itemVariants } from "@/lib/variants"
import { motion } from "motion/react"
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
  { text: "instagram", link: "https://www.instagram.com/trufflepigpublishing/", target: "_blank" },
]

export function Drawer(props: DrawerProps) {
  const { isOpen, setOpen } = props

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.position = "fixed"
  //   } else {
  //     document.body.style.position = ""
  //   }
  //   return () => {
  //     document.body.style.position = ""
  //   }
  // }, [isOpen])

  return (
    <motion.ul
      animate={isOpen ? "open" : "closed"}
      variants={drawerVariants}
      initial="closed"
      className={cn("fixed top-0 left-0 size-full flex flex-col items-center justify-center gap-4 bg-red-primary capitalize",)}
    >
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="flex gap-2 text-3xl"
        >
          <Link href={item.link} target={item.target} onClick={() => setOpen(false)}>
          {item.text}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}
