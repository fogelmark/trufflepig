import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import { Spiral as Hamburger } from "hamburger-react";
import { fadeInOut } from "@/lib/animations";

type MenuButtonProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
};

export function MenuButton(props: MenuButtonProps) {
  const { isOpen, setOpen } = props;
  
  return (
    <motion.div
      {...fadeInOut}
      className={cn("z-10 hidden max-md:block", { "!text-black": isOpen })}
    >
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </motion.div>
  )
}
