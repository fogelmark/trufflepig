"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import concert from "@/public/images/concert.webp"
import Image from "next/image"
import logo from "@/public/logo/Logo_white.png"

export function Placeholder() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div
      ref={container}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 text-[#f5f3ee] md:p-20">
        <p className="self-end text-[7.5vw] uppercase text-center md:w-[50vw] md:text-[2vw]">
          Beauty and quality need the right time to be conceived and realised
          even in a world that is in too much of a hurry.
        </p>
        <p className="uppercase md:text-[5vw]">Background Parallax</p>
      </div>
      <div className="fixed left-0 top-[-10vh] h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image
            src={concert}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="image"
            loading="eager"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  )
}
