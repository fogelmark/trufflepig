"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { fadeInOut } from "@/lib/animations"
import Image from "next/image"
import logo from "@/public/logo/logo_black_02.png"

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
      className="subgrid row-start-4 grid text-[13px] grid-cols-[auto_1fr_auto] grid-rows-[auto_auto_auto] items-center gap-x-2 self-end tracking-[-0.03em] text-gray-500"
    >
      <div className="col-start-1 row-start-3 flex items-center self-end capitalize">
        stockholm <span className="ml-2 uppercase">{time}</span>
      </div>
      <div className="col-start-2 row-start-3 h-px self-center bg-gray-300" />
      <p className="col-start-3 row-start-2 justify-self-end">
        info@punchpublishing.com
      </p>
      <p className="col-start-3 row-start-3">
        © 2025 Punch Publishing. All Rights Reserved.
      </p>
      <Image
        className="col-start-3 row-start-1 self-end justify-self-end pb-2 2xl:h-[600px] 2xl:w-[600px]"
        src={logo}
        alt="Logo"
        width={50}
        height={50}
        priority
        loading="eager"
        draggable={false}
      />
    </motion.div>
  )
}
