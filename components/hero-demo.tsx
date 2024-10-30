"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://i.scdn.co/image/ab67616d0000b2738d7a7f1855b04104ba59c18b",
    "https://i.scdn.co/image/ab67616d0000b273a8bcf8fac8520ac2cbf72ea7",
    "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/13/43/1b/13431b37-0e7b-29ed-53fa-5a7b59092b75/196871163484.jpg/1200x1200bf-60.jpg",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Hyper focused indie company.
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
