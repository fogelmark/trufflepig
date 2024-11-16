import { useRef } from "react"
import { cuts } from "@/lib/data"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "motion/react"

function formatCount(value: number): string {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`
  } else if (value >= 1_000_000) {
    return `${Math.floor(value / 1_000_000)}M`
  } else if (value >= 1_000) {
    return `${Math.floor(value / 1_000)}K`
  }
  return value.toString()
}

export default function FeaturedSongs() {
  const cell = useRef(null)
  const isInView = useInView(cell)

  const countValue = useMotionValue(0)
  const springValue = useSpring(countValue, { stiffness: 50, damping: 40 })
  const formattedCount = useTransform(springValue, (value) =>
    formatCount(Math.floor(value)),
  )

  const maxCount = 2.6 * 1_000_000_000

  setTimeout(() => {
    if (isInView) {
      countValue.set(0)
      countValue.set(maxCount)
    }
  }, 2000)

  const slide = {
    open: {
      y: 0,
      transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 },
    },
    closed: {
      y: 50,
      transition: { duration: 1, ease: "easeInOut" },
    },
  }

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
  }

  return (
    <div className="relative min-h-screen bg-white text-black">
      <div className="mb-4 grid grid-cols-6 grid-rows-3 gap-x-2 gap-y-16 px-2">
        <motion.p
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          ref={cell}
          className="border-2 border-red-500 col-span-3 col-start-4 row-start-1 self-center px-4 text-end text-4xl uppercase"
        >
          <motion.span className="inline-flex" variants={item}>
            <motion.span>{formattedCount}</motion.span>
            <span>+ </span>
          </motion.span>
          <br />
          <motion.span className="inline-flex" variants={item}>
            streams
          </motion.span>
          <br />
          <motion.span className="inline-flex" variants={item}>
            on Spotify
          </motion.span>
        </motion.p>
        <p className="col-span-2 col-start-5 row-start-3 self-center justify-self-center px-4 text-4xl uppercase">
          More songs
        </p>

        {cuts.slice(0, 4).map((cut, index) => (
          <article
            key={index}
            className={cn(
              "group",
              { "col-span-2 col-start-2 row-start-1": cut.id === 1 },
              { "col-span-2 col-start-5 row-start-2": cut.id === 3 },
              { "col-span-2 col-start-3 row-start-3": cut.id === 2 },
              { "col-span-2 col-start-1 row-start-3": cut.id === 4 },
            )}
          >
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src={cut.image}
                alt="Cover"
                fill
                loading="lazy"
                quality={100}
                sizes="100vw"
                draggable={false}
                className="object-contain grayscale transition-all duration-500 ease-in-out group-hover:scale-[1.03] group-hover:cursor-pointer hover:grayscale-0"
              />
            </div>
            <div className="col-span-2 mt-2 flex flex-col gap-2 text-sm text-black">
              <div className="flex items-center justify-between">
                <p className="font-semibold uppercase">{cut.title}</p>
                <p className="font-semibold uppercase opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                  {cut.spotifyPlays} streams
                </p>
              </div>
              <p className="">{cut.artist}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
