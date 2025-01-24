"use client"

import { cn } from "@/lib/utils"
import { fadeInOut } from "@/lib/animations"
import { motion } from "motion/react"
import dag from "@/public/images/dag.png"
import Image from "next/image"
import Lenis from "lenis"
import nikki from "@/public/images/nikki.webp"
import React, { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    window.scrollTo(0, 0)

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="flex tracking-[-0.03em] 2xl:w-1/2 mx-auto min-h-screen gap-2 px-4 py-36 text-black">
      <section className="flex w-1/2 flex-col gap-2">
        <motion.div className="w-full" {...fadeInOut}>
          <Image
            src={nikki}
            alt="nikki"
            placeholder="blur"
            className="object-contain"
            loading="eager"
          />
        </motion.div>
        <div className="flex items-center justify-between">
          <h2
            className={cn(
              "text-4xl font-medium",
            )}
          >
            Nicklas Lif
          </h2>
          <p className="text-xs uppercase text-gray-500">
            artist / writer / producer
          </p>
        </div>
        <p className="text-sm">
          {text}
        </p>
      </section>
      <section className="flex w-1/2 flex-col gap-2">
        <motion.div className="w-full" {...fadeInOut}>
          <Image
            src={dag}
            placeholder="blur"
            alt="nikki"
            className="object-contain"
          />
        </motion.div>
        <div className="flex items-center justify-between">
          <h2
            className={cn(
              "text-4xl font-medium",
            )}
          >
            Dag Lundberg
          </h2>
          <p className="text-xs uppercase text-gray-500">writer / producer</p>
        </div>
        <p className="text-sm">
          {text}
        </p>
      </section>
    </div>
  )
}

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          laudantium temporibus! Neque reprehenderit quidem dolores, iusto
          recusandae velit, pariatur sapiente, error rem aspernatur eos ipsam
          cumque nisi maxime unde. Maxime? Accusantium eaque, id deleniti
          officia qui corrupti voluptatibus numquam nulla doloremque animi
          reprehenderit aliquam expedita aliquid. Quisquam explicabo soluta
          aperiam numquam assumenda ut tenetur saepe possimus quis nemo, quaerat
          distinctio.`
