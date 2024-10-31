"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export function Hero() {
  const container = useRef(null);
  const { scrollY } = useScroll();
  
  const x = useTransform(scrollY, [0, 1000], ["0%", "-350%"]);
  
  return (
    <div ref={container} className="relative h-[250vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-end overflow-hidden">
        <motion.h1
          style={{ x }}
          className="ml-4 text-nowrap font-serif text-[13vw] uppercase leading-none"
        >
          Truffle Pig Publishing
        </motion.h1>
      </div>
    </div>
  );
}
