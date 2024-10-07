import { fadeInOut } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { motion, MotionValue } from "framer-motion"
import { Icons } from "@/components"

type NavProps = {
  isOpen: boolean
  textColor: MotionValue<string>
}

export function Nav(props: NavProps) {
  const { isOpen, textColor } = props

  return (
    <motion.nav {...fadeInOut} className="cursor-pointer">
      {!isOpen && (
        <ul className="flex items-center gap-4">
          {["About", "Contact"].map((item) => (
            <motion.li
              {...fadeInOut}
              key={item}
              className={cn(
                classes.li,
                "underline-offset-8 hover:underline max-md:hidden",
              )}
              style={{ color: textColor }}
            >
              {item}
            </motion.li>
          ))}
          <Icons textColor={textColor} />
        </ul>
      )}
    </motion.nav>
  )
}

const classes = {
  li: "lowercase",
}
