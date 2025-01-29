/* eslint-disable */

"use client"

import { motion, useInView } from "motion/react"
import { songs } from "@/lib/songs"
import { useRef } from "react"
import Apple from "@/public/svg/apple.svg"
import Image from "next/image"
import Soundcloud from "@/public/svg/soundcloud.svg"
import Spotify from "@/public/svg/spotify.svg"
import useLenis from "@/lib/hooks/useLenis"

export default function Page() {
  useLenis()

  const container = useRef(null)
  const isInView = useInView(container, { once: true, amount: 0.3 })

  return (
    <>
      <div className="mb-10 min-h-screen bg-white px-20 mt-36 tracking-[-0.03em]">
        <ul
          ref={container}
          className="grid min-h-screen w-fit grid-cols-1 gap-4"
        >
          {songs.flatMap((song) =>
            song.track.map(
              (
                track: {
                  title: string
                  featuring?: string
                  spotify: string
                  cover?: string | null
                },
                index,
              ) => (
                <motion.li
                  key={`${song.id}-${index}`}
                  className="grid w-auto grid-cols-[auto_1fr] items-center gap-4"
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={listVariants}
                >
                  {track.cover && (
                    <Image
                      src={track.cover}
                      alt={song.artist}
                      width={80}
                      height={80}
                    />
                  )}
                  <div className="grid h-full grid-cols-2 items-center border-b">
                    <div className="pl-4">
                      <p className="font-semibold">{track.title}</p>
                      <p className="text-sm text-gray-500">
                        {song.artist}
                        {track.featuring ? `, ${track.featuring}` : ""}
                      </p>
                    </div>
                    <div className="flex justify-end space-x-2 pr-4">
                      <a
                        href={track.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Spotify className="h-6 w-6" aria-label="Spotify" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Apple className="h-6 w-6" aria-label="Apple Music" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Soundcloud
                          className="h-6 w-6"
                          aria-label="Soundcloud"
                        />
                      </a>
                    </div>
                  </div>
                </motion.li>
              ),
            ),
          )}
        </ul>
      </div>
    </>
  )
}

const listVariants = {
  offscreen: { filter: "blur(3px)", opacity: 0 },
  onscreen: {
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
}
