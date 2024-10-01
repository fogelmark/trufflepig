import { motion, MotionValue } from "framer-motion"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

type IconsProps = {
  textColor: MotionValue<string>
}

export function Icons(props: IconsProps) {
  const { textColor } = props

  return (
    <motion.div className="flex gap-4" style={{ color: textColor }}>
      <FaYoutube />
      <FaInstagram />
      <FaXTwitter />
    </motion.div>
  )
}
