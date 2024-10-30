import React from "react"
import { cuts } from "@/lib/data"
import { useTotalPlays } from "@/lib/hooks/use-total-plays"
import { DirectionAwareHover } from "./ui/direction-aware-hover"

export function Cuts() {
  const playCounts: string[] = cuts.map((cut) => cut.spotifyPlays)
  const totalFormattedPlays: string = useTotalPlays(playCounts)

  return (
    <>
      <div className="grid grid-cols-2 gap-2 justify-items-center w-fit mx-auto">
        {cuts.map((cut, index) => (
          <DirectionAwareHover
            key={index}
            imageUrl={cut.image}
          >
            <h3 className="text-xl font-bold">{cut.artist}</h3>
            <p className="font-normal text-sm">{cut.title}</p>
            <p className="font-normal text-sm">{cut.spotifyPlays}</p>
          </DirectionAwareHover>
        ))}
      </div>
    </>
  )
}
