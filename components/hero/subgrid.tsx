"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { fadeInOut } from "@/lib/animations";

export function Subgrid() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime()
    const intervalId = setInterval(updateTime, 15000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <motion.div {...fadeInOut} className="subgrid row-start-5 grid grid-cols-8 grid-rows-1 self-end">
      <div className="col-span-2 col-start-1 self-end">
        Stockholm{" "}
        <span className="uppercase">{time}</span>
      </div>
    </motion.div>
  );
}
