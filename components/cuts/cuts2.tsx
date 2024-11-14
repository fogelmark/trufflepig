import React, { useRef } from "react"
import { cuts } from "@/lib/data"
import Image from "next/image"
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import { get } from "http"

export default function CutsTwo() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const getYTransform = (index: number) => {
    const startOffset = 300 + index * 100
    return useTransform(
      scrollYProgress,
      [0, 0.1 + index * 0.1],
      [startOffset, 0],
    )
  }
  return (
    // <div className="min-h-screen bg-[#f5f3ee] px-10">
    // <div className="grid grid-cols-3 gap-x-2 gap-y-48">
    //   {cuts.map((cut, index) => (
    //     <div className="">
    //       <div
    //         className="group relative aspect-square overflow-hidden rounded-md"
    //         key={index}
    //       >
    //         <Image
    //           src={cut.image}
    //           alt="Cover"
    //           fill
    //           className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
    //         />
    //       </div>
    //       <div className="text-sm flex items-center justify-between">
    //         <p className="text-black">{cut.title} - {cut.artist}</p>
    //         <p className="text-black">{cut.spotifyPlays}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    // </div>
    <div ref={container} className="min-h-screen bg-green-200 px-10">
      <Section getYTransform={getYTransform} />
      <SectionTwo />
    </div>
  )
}

interface SectionProps {
  getYTransform: (index: number) => MotionValue<number>
}

function Section({ getYTransform }: SectionProps) {
  return (
    <div className="mx-auto h-[200vh] flex flex-col justify-center">
      <div className="sticky top-0 border-2 border-red-500">
        <div className="grid h-screen grid-cols-3 grid-rows-[1fr] gap-x-2 items-center">
          {cuts.slice(0, 2).map((cut, index) => {
            const y = getYTransform(index)
            return (
            <motion.div className=""
            key={index}
            style={{ y }}
            >
              <div
                className="group relative aspect-square overflow-hidden rounded-md"
                key={index}
              >
                <Image
                  src={cut.image}
                  alt="Cover"
                  fill
                  className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="text-black">{cut.title}</p>
                <p className="text-black">{cut.spotifyPlays}</p>
              </div>
            </motion.div>
            )
})}
        </div>
      </div>
    </div>
  )
}
function SectionTwo({}) {
  return (
    <div className="sticky top-0 mx-auto h-[300vh] border-2 border-red-500 bg-blue-200">
      asdasd
    </div>
  )
}
