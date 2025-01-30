"use client"

import { cn } from "@/lib/utils"
import { fira_code } from "@/lib/fonts"
import { motion } from "motion/react"
import { songs } from "@/lib/songs"
import { useEffect, useRef, useState } from "react"
import Apple from "@/public/svg/apple.svg"
import Image from "next/image"
import Lenis from "lenis"
import Soundcloud from "@/public/svg/soundcloud.svg"
import Spotify from "@/public/svg/spotify.svg"

declare global {
  interface Window {
    lenis: Lenis
  }
}

export default function Page() {
  const [socialIndex, setSocialIndex] = useState<number | null>(null)
  const container = useRef<HTMLUListElement>(null)
  const songRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    window.lenis = lenis
  }, [])

  const scrollToSong = (index: number) => {
    const songElement = songRefs.current[index]
    if (!songElement) return

    const lenis = window.lenis
    const viewportHeight = window.innerHeight
    const songRect = songElement.getBoundingClientRect()
    const songTop = window.scrollY + songRect.top
    const songHeight = songRect.height
    const documentHeight = document.documentElement.scrollHeight

    // Calculate target scroll position
    let targetScroll = songTop - (viewportHeight / 2 - songHeight / 2)

    // Prevent overscrolling past the top
    targetScroll = Math.max(targetScroll, 0)

    // Prevent overscrolling past the bottom
    const maxScroll = documentHeight - viewportHeight
    targetScroll = Math.min(targetScroll, maxScroll)

    lenis.scrollTo(targetScroll, {
      duration: 1.2,
    })
  }
  
  const songTitles = songs.flatMap((song) =>
    song.track.map((track) => track.title),
  )

  return (
    <div className="mb-10 mt-36 grid min-h-screen grid-cols-2 bg-white px-20 tracking-[-0.03em]">
      <ul ref={container} className="grid gap-2">
        {songs.flatMap((song, songIndex) =>
          song.track.map((track, index) => {
            const globalIndex =
              songs
                .slice(0, songIndex)
                .reduce((acc, curr) => acc + curr.track.length, 0) + index

            return (
              <li
                key={`${song.id}-${index}`}
                ref={(el) => {
                  songRefs.current[globalIndex] = el
                }}
                className="grid w-auto grid-cols-[auto_1fr] items-center gap-4"
              >
                {track.cover && (
                  <Image
                    src={track.cover}
                    alt={song.artist}
                    width={80}
                    height={80}
                  />
                )}
                <div className="grid h-full grid-cols-[1fr_auto] items-center border-b">
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
                      <Soundcloud className="h-6 w-6" aria-label="Soundcloud" />
                    </a>
                  </div>
                </div>
              </li>
            )
          }),
        )}
      </ul>
      <div
        className={cn(
          fira_code.className,
          "relative min-h-screen justify-self-center text-sm",
        )}
      >
        <ul className="sticky top-[15vh]">
          {songTitles.map((title, index) => (
            <motion.li
              key={index}
              onClick={() => scrollToSong(index)}
              onMouseEnter={() => setSocialIndex(index)}
              onMouseLeave={() => setSocialIndex(null)}
              initial={{ opacity: 1 }}
              animate={{
                opacity:
                  socialIndex !== null && socialIndex !== index ? 0.25 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              className="cursor-pointer leading-tight"
            >
              <p className="flex gap-2">
                <span className="border-spacing-1 text-xs">({index + 1})</span>
                {title}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
