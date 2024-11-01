import React from "react"
import { cuts } from "@/lib/data"
import { useTotalPlays } from "@/lib/hooks/use-total-plays"
import Image from "next/image"

export function Cuts() {
  const playCounts: string[] = cuts.map((cut) => cut.spotifyPlays)
  const totalFormattedPlays: string = useTotalPlays(playCounts)

  return (
    <div className="bg-[#e35384] h-screen sticky top-0 flex justify-center items-center">
      <div className="grid grid-cols-4 gap-2 justify-items-center w-fit mx-auto overflow-hidden">
        {cuts.map((cut, index) => (
          <div key={index} className="relative size-52">
            <Image
              src={cut.image}
              alt={cut.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
