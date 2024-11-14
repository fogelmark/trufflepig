import { lora, playfair } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import React from "react"

export default function Desc() {
  return (
    <div className="sticky top-0 flex h-screen justify-start items-center bg-white px-10">
      <p
        className={cn(
          playfair.className,
          "text-5xl text-start w-[70vw] indent-20 text-[hsl(0,3%,4%)]",
        )}
      >
        Truffle Pig is a music publishing company based in Stockholm. By working closely with artists, we help them navigate the music industry and provide them with the tools they need to succeed.
      </p>
    </div>
  )
}
