/* eslint-disable */

import React, { useRef } from "react"
import Image from "next/image"
import lost_frequencies_4 from "@/public/images/lost_frequencies_4.jpg"
import purple_disco from "@/public/images/purple_disco_1.webp"
import felix_jaehn from "@/public/images/felix_jaehn_1.jpg"
import loreen from "@/public/images/loreen_1.jpg"
import leon from "@/public/images/leon_1.jpg"
import jonas_blue from "@/public/images/jonas_blue_1.jpg"
import vola_tila from "@/public/images/vola_tila_1.jpeg"
import medina from "@/public/images/medina_1.jpg"
import miriam_bryant from "@/public/images/miriam_bryant_1.jpg"
import skott from "@/public/images/skott_1.jpg"
import molly_sanden from "@/public/images/molly_sanden_1.jpg"
import { motion, useScroll, useTransform } from "motion/react"

export default function Showcase() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  // const sm = useTransform(scrollYProgress, [0, 1], [0, -100])
  const md = useTransform(scrollYProgress, [0, 1], [0, 0])
  const lg = useTransform(scrollYProgress, [0, 1], [0, 0])

  const items = [
    {
      image: lost_frequencies_4,
      name: "Lost Frequencies",
      parallax: md,
      col: "4",
      row: "2",
      col_span: null,
      row_span: null,
    },
    {
      image: purple_disco,
      name: "Purple Disco Machine",
      parallax: md,
      col: "2",
      row: "4",
      col_span: null,
      row_span: null,
    },
    {
      image: felix_jaehn,
      name: "Felix Jaehn",
      parallax: md,
      col: "6",
      row: "3",
      col_span: null,
      row_span: null,
    },
    // {
    //   image: loreen,
    //   name: "Loreen",
    //   parallax: md,
    //   col: null,
    //   row: "8",
    //   span: null,
    // },
    // {
    //   image: leon,
    //   name: "LÉON",
    //   parallax: lg,
    //   col: null,
    //   row: "8",
    //   span: null,
    // },
    // {
    //   image: jonas_blue,
    //   name: "Jonas Blue",
    //   parallax: lg,
    //   col: null,
    //   row: "8",
    //   span: null,
    // },
    // {
    //   image: vola_tila,
    //   name: "Vola Tila",
    //   parallax: lg,
    //   col: null,
    //   row: "8",
    //   span: null,
    // },
    // {
    //   image: medina,
    //   name: "Medina",
    //   parallax: lg,
    //   col: null,
    //   row: "8",
    //   span: null,
    // },
    {
      image: miriam_bryant,
      name: "Miriam Bryant",
      parallax: md,
      col: "1",
      row: "1",
      col_span: null,
      row_span: null,
    },
    // {
    //   image: skott,
    //   name: "SKOTT",
    //   parallax: md,
    //   col: null,
    //   row: "8",
    //   span: null,
    // },
    // {
    //   image: molly_sanden,
    //   name: "Molly Sandén",
    //   parallax: md,
    //   col: null,
    //   row: "7",
    //   span: null,
    // },
  ]

  return (
    <div ref={container} className="relative flex h-[200vh] w-full p-2">
      <div className="grid grid-cols-6 grid-rows-10 w-full items-center justify-items-center gap-2 px-20">
        {items.map(({ image, name, parallax, col, row, col_span, row_span }, index) => (
          // <motion.div key={index} style={{ y: parallax }}>
          <div className={`w-full h-fit col-start-${col} row-start-${row} row-span-${row_span}`}>
          <div key={index} className={`w-fit h-fit`}>
            <Image
              src={image}
              alt="Cover"
              loading="lazy"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              draggable={false}
              className="h-auto w-full object-contain transition-all duration-500 ease-in-out"
            />
            {/* <h3 className="text-2xl font-medium tracking-[-0.03em]">
              {name}
            </h3> */}
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}
