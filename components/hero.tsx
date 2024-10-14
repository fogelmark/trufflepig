"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"
import image_1 from "@/public/images/artist.webp"

export function Hero() {

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={image_1}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="image"
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>
    </div>
  )
}
