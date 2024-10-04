"use client"

import { useInView } from "framer-motion"
import React, { useRef } from "react"

export default function IntroText() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <>
      <h1
        ref={ref}
        className="mx-auto text-center text-4xl"
        style={{
          filter: isInView ? "none" : "blur(5px)",
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(25px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Hyper focused indie publishing company. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc ultricies ultricies.
      </h1>
    </>
  )
}
