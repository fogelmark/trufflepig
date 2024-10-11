import React from "react"
import Image from "next/image"
import image_1 from "@/public/images/artist.webp"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function Intro() {
  const container = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={image_1}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  )
}
