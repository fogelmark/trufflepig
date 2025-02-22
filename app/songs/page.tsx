/* eslint-disable */

"use client"

import { cn } from "@/lib/utils"
import { fadeInOut } from "@/lib/animations"
import { motion } from "motion/react"
import { songs } from "@/lib/songs"
import { StreamAmount } from "@/components/featured-songs/stream-amount/stream-amount"
import { useEffect } from "react"
import Apple from "@/public/svg/apple.svg"
import Soundcloud from "@/public/svg/soundcloud.svg"
import Spotify from "@/public/svg/spotify.svg"
import Image from "next/image"
import Lenis from "lenis"

interface Song {
  id: number
  artist: string
  track: {
    title: string
    featuring?: string
    platform: {
      name: string
      url: string
    }[]
    cover: string
  }[]
}

declare global {
  interface Window {
    lenis: Lenis
  }
}

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    window.lenis = lenis
  }, [])

  return (
    <motion.div
      className="mb-10 mt-36 grid min-h-screen grid-cols-2 bg-white px-20 tracking-[-0.03em] max-lg:flex max-lg:px-4 max-sm:mt-16"
      {...fadeInOut}
    >
      <ul className="grid w-full gap-2">
        {songs.flatMap((song) =>
          song.track.map((track, index) => (
            <motion.li
              key={`${song.id}-${index}`}
              className="grid w-auto grid-cols-[auto_1fr] items-center gap-4 max-sm:gap-0"
            >
              {track.cover && (
                <Image
                  src={track.cover}
                  alt={song.artist}
                  width={80}
                  height={80}
                />
              )}
              <div className="grid h-full grid-cols-[1fr_auto] items-center border-b max-lg:grid-cols-[1fr_min-content] max-lg:gap-4">
                <div className="pl-4">
                  <p className="font-semibold">{track.title}</p>
                  <p className="text-sm text-gray-500">
                    {song.artist}
                    {track.featuring ? `, ${track.featuring}` : ""}
                  </p>
                </div>
                <div className="flex justify-end space-x-2 pr-4 max-sm:pr-0">
                  {["Spotify", "Apple", "Soundcloud"].map((platform) => {
                    const foundPlatform = track.platform.find(
                      (p) => p.name === platform,
                    )
                    const Icon =
                      platform === "Spotify"
                        ? Spotify
                        : platform === "Apple"
                          ? Apple
                          : Soundcloud

                    return (
                      <a
                        key={platform}
                        href={foundPlatform?.url || undefined}
                        target={foundPlatform ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        <Icon
                          className={cn("size-7 max-sm:size-5", {
                            "opacity-50 cursor-not-allowed": !foundPlatform,
                          })}
                          aria-label={platform}
                        />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.li>
          )),
        )}
      </ul>
      <div
        className={cn(
          "relative min-h-screen justify-self-center text-sm max-lg:hidden",
        )}
      >
        <div className="sticky top-[40vh]">
          <StreamAmount />
        </div>
      </div>
    </motion.div>
  )
}
