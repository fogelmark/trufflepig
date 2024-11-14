"use client"

import { fadeInOut } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

type NavProps = {
  isOpen?: boolean
}

export function Nav(props: NavProps) {
  const { isOpen } = props
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navItems = [
    "About",
    "Songs",
    "Contact",
  ]

  return (
    <motion.nav {...fadeInOut} className="cursor-pointer">
      {!isOpen && (
        <ul className={cn("flex items-center")}>
          {navItems.map((item, index) => (
            <motion.li
              {...fadeInOut}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 1 }}
              animate={{
                opacity:
                  hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(classes.li, "px-2 max-md:hidden")}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.nav>
  )
}

const classes = {
  li: "uppercase text-[12px] text-black",
}
