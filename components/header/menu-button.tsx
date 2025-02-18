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
      className={cn("z-10 col-start-3 justify-self-center w-fit row-start-1 hidden max-sm:block", { "!text-black": isOpen })}
    >
      <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
    </motion.div>
  )
}
