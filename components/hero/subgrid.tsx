"use client";

import { useEffect, useState } from "react";

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

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 15000); // Update every second


    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="subgrid row-start-5 grid grid-cols-8 grid-rows-1 self-end">
      <div className="col-span-2 col-start-1 self-end">
        Stockholm{" "}
        <span className="uppercase">{time}</span>
      </div>
      {/* <div className="col-start-8 text-end font-semibold self-end">SCROLL</div> */}
    </div>
  );
}
