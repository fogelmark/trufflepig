"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import image_1 from "@/public/images/36.webp"
import image_2 from "@/public/images/38.webp"
import image_3 from "@/public/images/40.webp"

export default function ZoomParallax() {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])

  const images = [
    {
      src: image_1,
      scale: scale4,
      left: "[0]",
    },
    {
      src: image_2,
      scale: scale5,
      left: "[-27vw]",
    },
    {
      src: image_3,
      scale: scale5,
      left: "[27vw]",
    },
  ]

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, scale, left }, index) => (
          <motion.div
            key={index}
            className="absolute top-0 flex size-full items-center justify-center"
            style={{ scale }}
          >
            <div
              className={`relative h-[25vh] w-[25vw] left-${left}`}
            >
              <Image
                src={src}
                alt="Image"
                placeholder="blur"
                loading="lazy"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
