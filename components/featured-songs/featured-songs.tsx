import { StreamAmount } from "./stream-amount/stream-amount"
import { SongCard } from "./song-card/song-card"

export default function FeaturedSongs() {
  return (
    <div className="relative min-h-screen bg-white mb-12">
      <div className="grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-16 px-2 py-4">
        <StreamAmount />
        <SongCard />
      </div>
    </div>
  )
}
