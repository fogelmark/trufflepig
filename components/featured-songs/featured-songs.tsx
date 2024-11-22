import { StreamAmount } from "./stream-amount/stream-amount"
import { SongCard } from "./song-card/song-card"

export default function FeaturedSongs() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="grid py-4 grid-cols-6 grid-rows-3 gap-x-2 gap-y-16 px-2">
        <StreamAmount />
        <p className="col-span-2 col-start-5 row-start-3 self-center justify-self-center px-4 text-4xl uppercase">
          library
        </p>
        <SongCard />
      </div>
    </div>
  )
}
