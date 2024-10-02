import { motion, MotionValue } from "framer-motion"
import Instagram from "@/public/svg/instagram.svg"
import X from "@/public/svg/x.svg"
import Youtube from "@/public/svg/youtube.svg"

type IconsProps = {
  textColor: MotionValue<string>
}

export function Icons(props: IconsProps) {
  const { textColor } = props

  return (
    <motion.div className="flex gap-4" style={{ color: textColor }}>
      <Instagram />
      <Youtube />
      <X />
    </motion.div>
  )
}
