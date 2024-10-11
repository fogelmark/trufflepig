"use client"

import { fadeInOut } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import Facebook from "@/public/svg/facebook.svg"
import Instagram from "@/public/svg/instagram.svg"
import Youtube from "@/public/svg/youtube.svg"

type NavProps = {
  isOpen?: boolean
  justify?: "justify-center" | "justify-start" | "justify-end"
}

export function Nav(props: NavProps) {
  const { isOpen, justify } = props
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navItems = [
    "About",
    "Songs",
    "Contact",
    { Component: Instagram, alt: "Instagram" },
    { Component: Youtube, alt: "Youtube" },
    { Component: Facebook, alt: "Facebook" },
  ]

  return (
    <motion.nav {...fadeInOut} className="cursor-pointer">
      {!isOpen && (
        <ul className={cn(justify ,"flex items-center")}>
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
              {typeof item === "string" ? (
                item
              ) : (
                <item.Component alt={item.alt} />
              )}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.nav>
  )
}

const classes = {
  li: "lowercase",
}
