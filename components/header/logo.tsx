import { motion } from "framer-motion"
import Image from "next/image"
import logo_black_02 from "@/public/logo/logo_black_02.png"

export function Logo() {

  return (
    <motion.div
      className="row-start-1 justify-self-center"
    >
      <Image src={logo_black_02} alt="Logo" height={75} width={75} />
    </motion.div>
  )
}