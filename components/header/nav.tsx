import { fadeInOut } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { motion, MotionValue } from 'framer-motion'
import React from 'react'

type NavProps = {
  isOpen: boolean
  textColor: MotionValue<string>
}

export function Nav(props: NavProps) {
  const { isOpen, textColor } = props
  return (
    <motion.nav
        {...fadeInOut}
        className={cn({
          "fixed inset-0 flex h-full w-full items-center justify-center bg-white":
            isOpen,
          "max-md:hidden": !isOpen,
        })}
      >
        <motion.ul
          // variants={listVariants}
          className={cn({
            "flex flex-col items-center gap-4 text-4xl": isOpen,
            hidden: !isOpen,
          })}
        >
          {["Home", "About", "Contact"].map((item) => (
            <motion.li
              key={item}
              animate={isOpen ? "open" : "closed"}
              // variants={variants}
              style={{ color: textColor }}
              className={cn(classes.li, { "!text-black": isOpen })}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        {!isOpen && (
          <ul className="flex gap-4">
            {["Home", "About", "Contact"].map((item) => (
              <motion.li
                {...fadeInOut}
                key={item}
                className={classes.li}
                style={{ color: textColor }}
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
  li: "cursor-pointer font-semibold uppercase underline-offset-8 hover:underline",
}
