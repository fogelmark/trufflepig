"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import image_1 from "@/public/images/36.webp"
import image_2 from "@/public/images/38.webp"
import image_3 from "@/public/images/40.webp"

export function ImageSection() {
  const images = [image_1, image_2, image_3]

  return (
    <div className="flex flex-col gap-4 p-4">
      {images.map((image, index) => {
        const container = useRef(null)
        const { scrollYProgress } = useScroll({
          target: container,
          offset: ["start start", "end start"],
        })

        const filter = useTransform(
          scrollYProgress,
          [0, 1],
          ["brightness(1)", "brightness(0.2)"],
        )

        return (
          <motion.div
            ref={container}
            key={index}
            className="relative h-[50vh] w-full"
            style={{ filter }}
          >
            <Image
              src={image}
              alt="Image"
              placeholder="blur"
              loading="eager"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        )
      })}
    </div>
  )
}
