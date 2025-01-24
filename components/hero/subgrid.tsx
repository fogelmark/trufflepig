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
      className="subgrid tracking-[-0.03em] row-start-5 grid grid-cols-[auto_1fr] grid-rows-1 items-center gap-4 self-end"
    >
      <div className="col-start-1 flex items-center self-end capitalize text-sm">
        stockholm <span className="ml-2 uppercase">{time}</span>
      </div>
      <div className="col-start-2 h-px self-center bg-gray-300" />
    </motion.div>
  )
}
