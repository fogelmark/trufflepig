"use client"

import { motion, useInView } from "framer-motion"
import React, { useRef } from "react"

export default function ParallaxContent() {
  return (
    <div className="grid grid-cols-1 gap-6 md:px-6">
      {content.map((item, index) => (
        <InViewItem key={index} item={item} />
      ))}
    </div>
  )
}

interface ContentItem {
  item: {
    type: string
    src?: string
  }
}

function InViewItem(props: ContentItem) {
  const { item } = props
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="min-h-60 bg-cover bg-center"
      style={{
        filter: isInView ? "none" : "blur(5px)",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(25px)",
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <motion.div
        style={{
          backgroundImage: `url(${item.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      />
    </motion.div>
  )
}

const content = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  // {
  //   type: "image",
  //   src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  // },
]
