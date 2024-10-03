import { cn } from "@/lib/utils"
import { drawerVariants, itemVariants } from "@/lib/variants"
import { motion } from "framer-motion"
import Facebook from "@/public/svg/facebook.svg"
import Instagram from "@/public/svg/instagram.svg"
import Youtube from "@/public/svg/youtube.svg"

type DrawerProps = {
  isOpen: boolean
  className?: string
}

const menuItems = [
  { text: "Home" },
  { text: "About" },
  { text: "Contact" },
  { text: "Social Media", icons: [<Instagram />, <Youtube />, <Facebook />] },
]

export function Drawer(props: DrawerProps) {
  const { isOpen, className } = props

  return (
    <motion.ul
      animate={isOpen ? "open" : "closed"}
      variants={drawerVariants}
      initial="closed"
      className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-white"
    >
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className={cn(className, "flex items-center gap-2 text-4xl")}
        >
          {item.icons ? (
            <div className="flex gap-4">
              {item.icons.map((icon, iconIndex) => (
                <div key={iconIndex}>{icon}</div>
              ))}
            </div>
          ) : (
            item.text
          )}
        </motion.li>
      ))}
    </motion.ul>
  )
}
