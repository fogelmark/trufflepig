import { cn } from "@/lib/utils"
import { drawerVariants, itemVariants } from "@/lib/variants"
import { motion } from "framer-motion"

type DrawerProps = {
  isOpen: boolean
  className?: string
}

export function Drawer(props: DrawerProps) {
  const { isOpen, className } = props
  return (
    <motion.ul
      animate={isOpen ? "open" : "closed"}
      variants={drawerVariants}
      initial="closed"
      className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-white"
    >
      {["Home", "About", "Contact"].map((item) => (
        <motion.li
          key={item}
          variants={itemVariants}
          className={cn(className, "text-4xl")}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}
