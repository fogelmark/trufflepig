/* eslint-disable */

"use client"

import { cn } from "@/lib/utils"
import { fadeInOut, slideUp } from "@/lib/animations"
import { headingNowTrial46Bold } from "@/lib/fonts"
import { motion } from "motion/react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Facebook from "@/public/svg/facebook.svg"
import Instagram from "@/public/svg/instagram.svg"
import Link from "next/link"
import Youtube from "@/public/svg/youtube.svg"

type NavProps = {
  isOpen?: boolean
  justify?: "justify-center" | "justify-start" | "justify-end"
  inFooter?: boolean
}

export function FixedHeader(props: NavProps) {
  const { isOpen } = props
  const [itemIndex, setItemIndex] = useState<number | null>(null)
  const [socialIndex, setSocialIndex] = useState<number | null>(null)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Writers", href: "/writers" },
    { name: "Songs", href: "/songs" },
  ]
  const socials = [
    { Component: Instagram, alt: "Instagram" },
    // { Component: Youtube, alt: "Youtube" },
    // { Component: Facebook, alt: "Facebook" },
  ]

  return (
    <>
      <motion.nav className="col-span-2 self-center tracking-[-0.03em]">
        {!isOpen && (
          <ul className={cn("ml-4 flex items-center")}>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                onMouseEnter={() => setItemIndex(index)}
                onMouseLeave={() => setItemIndex(null)}
                initial={{ opacity: 1 }}
                animate={{
                  opacity: itemIndex !== null && itemIndex !== index ? 0.5 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                  classes.li,
                  "cursor-pointer overflow-hidden px-2 max-md:hidden",
                  pathname === item.href
                    ? "underline underline-offset-2"
                    : "text-gray-500",
                )}
              >
                <Link href={item.href}>
                  <motion.span className="block" {...fadeInOut}>
                    {item.name}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.nav>

      <motion.p
        className={cn(
          headingNowTrial46Bold.className,
          "col-span-2 col-start-4 cursor-pointer self-center justify-self-center overflow-hidden",
        )}
      >
        <motion.span className="block px-1 text-2xl" {...fadeInOut}>
          punch publishing
        </motion.span>
      </motion.p>

      <motion.nav
        className="col-span-2 col-start-7 mr-4 cursor-pointer self-center justify-self-end"
        {...fadeInOut}
      >
        {!isOpen && (
          <ul className={cn("flex items-center justify-center")}>
            {/* {socials.map((item, index) => (
              <motion.li
                key={index}
                onMouseEnter={() => setSocialIndex(index)}
                onMouseLeave={() => setSocialIndex(null)}
                initial={{ opacity: 1 }}
                animate={{
                  opacity:
                    socialIndex !== null && socialIndex !== index ? 0.5 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(classes.li, "overflow-hidden px-2 max-md:hidden")}
              >
                <motion.span className="block" {...fadeInOut}>
                  {<item.Component alt={item.alt} />}
                </motion.span>
              </motion.li>
            ))} */}
            <a href="#" className={classes.li}>instagram</a>
          </ul>
        )}
      </motion.nav>
    </>
  )
}

const classes = {
  li: "uppercase text-xs font-bold font-medium text-black",
}
