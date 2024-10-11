"use client"

import { fadeInOut } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Icons } from "@/components"
import { useState } from "react"

type NavProps = {
  isOpen: boolean
}

export function Nav(props: NavProps) {
  const { isOpen } = props
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav {...fadeInOut} className="cursor-pointer">
      {!isOpen && (
        <ul className="flex items-center">
          {["About", "Songs", "Contact"].map((item, index) => (
            <motion.li
              {...fadeInOut}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 1 }}
              animate={{ opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                classes.li,
                "max-md:hidden px-2",
              )}
            >
              {item}
            </motion.li>
          ))}
          <Icons />
        </ul>
      )}
    </motion.nav>
  )
}

const classes = {
  li: "lowercase",
}
