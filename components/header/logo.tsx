import { motion } from "framer-motion"
import Image from "next/image"
import logo_black_02 from "@/public/logo/logo_black_02.png"

export function Logo() {

  return (
    <motion.div
      className="mb-auto p-4"
    >
      <Image src={logo_black_02} alt="Logo" height={100} width={100} />
    </motion.div>
  )
}
