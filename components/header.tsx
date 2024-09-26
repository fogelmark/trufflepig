"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { archivo_black } from "@/lib/fonts";

export function Header() {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(scrollY, [0, 50], ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)']);
  const textColor = useTransform(scrollY, [0, 50], ['#fff', '#000']);
  const boxShadow = useTransform(scrollY, [0, 50], ['none', '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)']);

  return (
    <motion.header
      style={{ backgroundColor, boxShadow }}
      className="sticky top-0 z-20 flex justify-between px-4 py-6 transition-all duration-300"
    >
      <motion.span
        style={{ color: textColor }}
        className={`${archivo_black.className} text-2xl tracking-wide`}
      >
        trufflepig.
      </motion.span>
      <nav>
        <ul className="flex space-x-4">
          <motion.li style={{ color: textColor }} className="text-lg">Home</motion.li>
          <motion.li style={{ color: textColor }} className="text-lg">About</motion.li>
          <motion.li style={{ color: textColor }} className="text-lg">Contact</motion.li>
        </ul>
      </nav>
    </motion.header>
  );
}
