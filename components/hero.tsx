import Image from "next/image"
import artist from "@/public/images/artist.webp"

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-100px)] border-2 border-red-600">
    <Image
      src={artist}
      alt={"Photo of an artist"}
      fill
      objectFit="cover"
      placeholder="blur"
    />
  </section>
  )
}
