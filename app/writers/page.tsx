"use client"

import { fadeInOut } from "@/lib/animations"
import { motion } from "motion/react"
import { writers } from "@/lib/writers"
import Image from "next/image"
import useLenis from "@/lib/hooks/useLenis"
import { cn } from "@/lib/utils"
import { fira_code } from "@/lib/fonts"

const curtain = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  animate: (i: number) => ({
    clipPath: [
      "polygon(0 95%, 100% 95%, 100% 100%, 0 100%)",
    ],
    transition: {
      duration: 1.5,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.1 * i,
    },
  }),
}

export default function Page() {
  useLenis()

  return (
    <motion.div
      className="mx-auto mb-10 mt-36 flex min-h-screen grid-cols-2 auto-rows-min gap-x-2 gap-y-10 px-4 text-black 2xl:w-1/2"
      {...fadeInOut}
    >
      {writers.map((writer, index) => (
        <section
          key={index}
          className={cn("flex w-full flex-col gap-2", {
            "row-start-2": index === 0 || index === 1,
          })}
        >
          <motion.div className="relative w-full">
            <motion.div
              className="absolute -inset-[1px] bg-white"
              variants={curtain}
              custom={index}
              initial="initial"
              animate="animate"
              exit="exit"
            />
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
            <p
              className={cn(
                "text-xs uppercase text-gray-500",
                fira_code.className,
              )}
            >
              {writer.role}
            </p>
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
