import { fadeInOut } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion, MotionValue } from "framer-motion"

type NavProps = {
  isOpen: boolean
  textColor: MotionValue<string>
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const listvariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
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
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={cn({
          "flex flex-col items-center gap-4 text-4xl": isOpen,
          hidden: !isOpen,
        })}
      >
        {["Home", "About", "Contact"].map((item) => (
          <motion.li
            key={item}
            variants={listvariants}
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
