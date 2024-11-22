/* eslint-disable */

import { cn } from "@/lib/utils"
import { cuts } from "@/lib/data"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import React, { useRef } from "react"

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
      className={cn(
        "group",
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
      {cuts.map((cut, index) => (
        <Card key={index} cut={cut} index={index} />
      ))}
    </>
  )
}
