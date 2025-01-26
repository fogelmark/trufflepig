"use client"

import { fadeInOut } from "@/lib/animations"
import { motion } from "motion/react"
import { writers } from "@/lib/writers"
import Image from "next/image"
import useLenis from "@/lib/hooks/useLenis"

export default function Page() {
  useLenis()

  return (
    <motion.div className="mx-auto flex min-h-screen gap-2 px-4 py-36 tracking-[-0.03em] text-black 2xl:w-1/2" {...fadeInOut}>
      {writers.map((writer, index) => (
        <section key={index} className="flex w-1/2 flex-col gap-2">
          <motion.div className="w-full">
            <Image
              src={writer.image}
              alt={writer.name}
              placeholder="blur"
              className="object-contain"
              loading="eager"
            />
          </motion.div>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-medium">{writer.name}</h2>
            <p className="text-xs uppercase text-gray-500">{writer.role}</p>
          </div>
          <p className="text-sm">{text}</p>
        </section>
      ))}
    </motion.div>
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
