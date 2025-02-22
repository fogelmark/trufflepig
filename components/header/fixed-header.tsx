/* eslint-disable */

"use client"

import { cn } from "@/lib/utils"
import { fadeInOut } from "@/lib/animations"
import { headingNowTrial46Bold } from "@/lib/fonts"
import { motion } from "motion/react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

type NavProps = {
  isOpen?: boolean
  justify?: "justify-center" | "justify-start" | "justify-end"
  inFooter?: boolean
}

export function FixedHeader(props: NavProps) {
  const { isOpen } = props
  const [itemIndex, setItemIndex] = useState<number | null>(null)
  const [isInstagramHovered, setIsInstagramHovered] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Writers", href: "/writers" },
    { name: "Songs", href: "/songs" },
  ]

  return (
    <>
      <motion.nav className="self-center tracking-[-0.03em] max-sm:hidden">
        {!isOpen && (
          <ul className={cn("ml-4 flex items-center")}>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                onMouseEnter={() => setItemIndex(index)}
                onMouseLeave={() => setItemIndex(null)}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                  classes.li,
                  "relative cursor-pointer overflow-hidden px-2",
                )}
              >
                <Link href={item.href}>
                  <motion.span className="relative block" {...fadeInOut}>
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-black"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX:
                          pathname === item.href || itemIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ transformOrigin: "center" }}
                    />
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
          "cursor-pointer self-center justify-self-center overflow-hidden max-sm:col-start-2",
        )}
      >
        <Link href="/">
          <motion.span className="block px-1 text-2xl" {...fadeInOut}>
            punch publishing
          </motion.span>
        </Link>
      </motion.p>
      
      <motion.nav
        className="mr-4 cursor-pointer self-center justify-self-end max-sm:hidden"
        {...fadeInOut}
      >
        {!isOpen && (
          <ul className={cn("flex items-center justify-center")}>
            <li
              onMouseEnter={() => setIsInstagramHovered(true)}
              onMouseLeave={() => setIsInstagramHovered(false)}
              className="relative cursor-pointer overflow-hidden px-2"
            >
              <a
                href="https://www.instagram.com/trufflepigpublishing/"
                target="_blank"
                className={classes.li}
              >
                <motion.span className="relative block">
                  instagram
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-black"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isInstagramHovered ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.span>
              </a>
            </li>
          </ul>
        )}
      </motion.nav>
    </>
  )
}

const classes = {
  li: "uppercase text-xs font-bold font-medium text-black",
}
