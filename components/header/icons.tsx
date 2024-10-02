"use client";

import { motion, MotionValue } from "framer-motion"
import { useState } from "react"
import Facebook from "@/public/svg/facebook.svg"
import Instagram from "@/public/svg/instagram.svg"
import Youtube from "@/public/svg/youtube.svg"

type IconsProps = {
  textColor?: MotionValue<string>
}

export function Icons(props: IconsProps) {
  const { textColor } = props
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const icons = [
    { Component: Instagram, alt: "Instagram" },
    { Component: Youtube, alt: "Youtube" },
    { Component: Facebook, alt: "Facebook" },
  ]

  return (
    <motion.div className="flex gap-4 cursor-pointer" style={{ color: textColor }}>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 1 }}
          animate={{ opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <icon.Component alt={icon.alt} />
        </motion.div>
      ))}
    </motion.div>
  )
}
