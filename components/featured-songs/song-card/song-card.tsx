/* eslint-disable */

import { cn } from "@/lib/utils"
import { cuts } from "@/lib/data"
import Image from "next/image"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Props {
  cut: {
    id: number
    image: string
    title: string
    artist: string
    spotifyPlays: string
  }
  index: number
}

function Card({ cut, index }: Props) {
  const card = useRef(null)
  const isInView = useInView(card, { amount: 0.2 })

  return (
    <motion.article
      ref={card}
      // initial={{ opacity: 0 }}
      // animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.2,
      }}
      className={cn(
        "group",
        { "col-span-2 col-start-2 row-start-1": cut.id === 1 },
        { "col-span-2 col-start-5 row-start-2": cut.id === 3 },
        { "col-span-2 col-start-3 row-start-3": cut.id === 2 },
        { "col-span-2 col-start-1 row-start-3": cut.id === 4 },
      )}
    >
      <div className="relative aspect-square overflow-hidden rounded-sm">
        <Image
          src={cut.image}
          alt="Cover"
          fill
          loading="lazy"
          quality={100}
          sizes="100vw"
          draggable={false}
          className="object-contain grayscale transition-all duration-500 ease-in-out group-hover:scale-[1.03] group-hover:cursor-pointer hover:grayscale-0"
        />
      </div>
      <div className="col-span-2 mt-2 flex flex-col gap-2 text-sm text-black">
        <div className="flex items-center justify-between">
          <p className="font-semibold uppercase">{cut.title}</p>
          <p className="font-semibold uppercase opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
            {cut.spotifyPlays} streams
          </p>
        </div>
        <p>{cut.artist}</p>
      </div>
    </motion.article>
  )
}

export function SongCard() {
  return (
    <>
      {cuts.slice(0, 4).map((cut, index) => (
        <Card key={index} cut={cut} index={index} />
      ))}
    </>
  )
}
