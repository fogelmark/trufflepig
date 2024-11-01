import { fadeInOut } from "@/lib/animations"
import { motion } from "framer-motion"
import Image from "next/image"
import logo from "@/public/images/truffle_logo_2.jpg"

export function Logo() {

  return (
    <motion.div
      {...fadeInOut}
      className="border-4 border-[#d1d1d1] rounded-full"
    >
      <Image src={logo} alt="Logo" height={75} width={75} className="rounded-full" />
    </motion.div>
  )
}
