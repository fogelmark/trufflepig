"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { fadeInOut } from "@/lib/animations"

export function Subgrid() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const date = new Date()
      setTime(
        date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      )
    }

    updateTime()
    const intervalId = setInterval(updateTime, 15000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <motion.div
      {...fadeInOut}
      className="subgrid row-start-4 col-span-3 grid grid-cols-[auto_1fr] items-center gap-x-2 self-end text-sm tracking-[-0.03em] text-black"
    >
      <div className="col-start-1 flex items-center self-end capitalize">
        stockholm <span className="ml-2 uppercase">{time}</span>
      </div>
      <div className="col-start-2 h-px self-center bg-gray-300" />
    </motion.div>
  )
}
