import { fadeInOut } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion, MotionValue } from "framer-motion"
import { Drawer } from "@/components"

type NavProps = {
  isOpen: boolean
  textColor: MotionValue<string>
}

export function Nav(props: NavProps) {
  const { isOpen, textColor } = props

  return (
    <motion.nav {...fadeInOut}>
      <Drawer isOpen={isOpen} className={classes.li} />
      {!isOpen && (
        <ul className="flex gap-4">
          {["Home", "About", "Contact"].map((item) => (
            <motion.li
              {...fadeInOut}
              key={item}
              className={cn(classes.li, "max-md:hidden underline-offset-8 hover:underline")}
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
  li: "cursor-pointer font-semibold uppercase",
}
