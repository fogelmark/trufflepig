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
  inFooter?: boolean
}

export function FooterNav(props: NavProps) {
  const { isOpen } = props
  const [itemIndex, setItemIndex] = useState<number | null>(null)
  const [socialIndex, setSocialIndex] = useState<number | null>(null)

  const navItems = ["About", "Songs", "Contact"]
  const socials = [
    { Component: Instagram, alt: "Instagram" },
    { Component: Youtube, alt: "Youtube" },
    { Component: Facebook, alt: "Facebook" },
  ]

  return (
    <>
      <motion.nav
        {...fadeInOut}
        className="col-start-2 row-span-2 row-start-4 cursor-pointer self-center"
      >
        {!isOpen && (
          <ul className={cn("flex flex-col items-center")}>
            {navItems.map((item, index) => (
              <motion.li
                {...fadeInOut}
                key={index}
                onMouseEnter={() => setItemIndex(index)}
                onMouseLeave={() => setItemIndex(null)}
                initial={{ opacity: 1 }}
                animate={{
                  opacity:
                    itemIndex !== null && itemIndex !== index ? 0.5 : 1,
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

      <motion.nav
        {...fadeInOut}
        className="col-start-7 row-span-2 row-start-4 cursor-pointer self-center"
      >
        {!isOpen && (
          <ul className={cn("flex items-center justify-center")}>
            {socials.map((item, index) => (
              <motion.li
                {...fadeInOut}
                key={index}
                onMouseEnter={() => setSocialIndex(index)}
                onMouseLeave={() => setSocialIndex(null)}
                initial={{ opacity: 1 }}
                animate={{
                  opacity:
                    socialIndex !== null && socialIndex !== index ? 0.5 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(classes.li, "px-2 max-md:hidden")}
              >
                {<item.Component alt={item.alt} />}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.nav>
    </>
  )
}

const classes = {
  li: "uppercase text-md text-white",
}
