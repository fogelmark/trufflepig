import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { motion, MotionValue } from "framer-motion";
import { Spiral as Hamburger } from "hamburger-react";

type MenuButtonProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
  textColor: MotionValue<string>;
};

export function MenuButton(props: MenuButtonProps) {
  const { isOpen, setOpen, textColor } = props;
  return (
    <motion.div
      className={cn("z-10 hidden max-md:block", { "!text-black": isOpen })}
      style={{ color: textColor }}
    >
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </motion.div>
  )
}
