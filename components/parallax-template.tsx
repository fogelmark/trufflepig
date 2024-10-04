"use client"

import { motion, useInView } from "framer-motion"
import React, { useRef } from "react"

export default function ParallaxContent() {
  return (
    <div className="grid grid-cols-2 gap-6 px-6">
      {content.map((item, index) => (
        <InViewItem key={index} item={item} />
      ))}
    </div>
  )
}

interface ContentItem {
  item: {
    type: string
    src?: string;
  }
}

function InViewItem(props: ContentItem) {
  const { item } = props
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.div
      ref={ref}
      className={`h-auto ${item.type === "image" ? "bg-cover bg-center" : "flex flex-col items-start justify-center"}`}
      style={{
        filter: isInView ? "none" : "blur(5px)",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(25px)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {item.type === "image" ? (
        <motion.div
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />
      ) : (
        <div className="flex flex-col items-start justify-center bg-gray-100 p-6">
          <h2 className="mb-4 text-2xl font-bold">Lorem Ipsum</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Learn More</button>
        </div>
      )}
    </motion.div>
  )
}

const content = [
  { type: "text" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  },
  { type: "text" },
  { type: "text" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
]
