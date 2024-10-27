import { cuts } from "@/lib/data"
import { useTotalPlays } from "@/lib/hooks/use-total-plays";

export function Cuts() {

  const playCounts: string[] = cuts.map((cut) => cut.spotifyPlays);
  const totalFormattedPlays: string = useTotalPlays(playCounts);

  return (
    <div>
      <h2 className="text-xl font-bold">Total Plays: {totalFormattedPlays}</h2>
      {cuts.map((cut, index) => (
        <div key={index} className="flex flex-col gap-2 p-4">
          <h3 className="text-xl font-bold">{cut.artist}</h3>
          <p className="text-lg">{cut.title}</p>
          <p className="text-lg">{cut.spotifyPlays}</p>
        </div>
      ))}
    </div>
  )
}
