import { drawerVariants, itemVariants } from "@/lib/variants"
import { motion } from "framer-motion"
import Instagram from "@/public/svg/instagram.svg"
import Facebook from "@/public/svg/facebook.svg"
import Youtube from "@/public/svg/youtube.svg"

type DrawerProps = {
  isOpen: boolean
}

const menuItems = [
  { text: "About" },
  { text: "Songs" },
  { text: "Contact" },
  {
    text: "Social Media",
    icons: [
      { Component: Instagram, alt: "Instagram" },
      { Component: Youtube, alt: "Instagram" },
      { Component: Facebook, alt: "Instagram" },
    ],
  },
]

export function Drawer(props: DrawerProps) {
  const { isOpen } = props

  return (
    <motion.ul
      animate={isOpen ? "open" : "closed"}
      variants={drawerVariants}
      initial="closed"
      className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-white text-black"
    >
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="flex items-center gap-2 text-4xl lowercase"
        >
          {item.icons ? (
            <div className="flex gap-4">
              {item.icons.map((icon, index) => (
                <div key={index}>
                  {<icon.Component />}
                </div>
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
