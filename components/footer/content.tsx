import { archivo_black } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Nav } from "@/components/nav"
import Image from "next/image"
import logo_text from "@/public/images/truffle_logo_text.png"


export function Content() {
  return (
    <div className="relative grid grid-cols-4 grid-rows-4 h-full w-full flex-col justify-end bg-[#0f0e0e] px-12 py-8">
      <Section1 />
      <Section2 />
      {/* maybe logo orange: text-[#ff811a] */}
      <p className="row-start-4 col-span-2 self-end text-[#f3f3f3] z-10">© 2024 All Rights Reserved Truffle Pig</p>
      <Image src={logo_text} width={150} alt="logo" className="justify-self-end row-start-4 col-start-4" />
    </div>
  )
}

const Section1 = () => {
  return (
    <div className="row-start-2 col-span-2 self-end text-[#f3f3f3] z-10">
      <Nav justify="justify-center" />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className="text-[#f3f3f304] absolute w-[150vw] select-none">
      <h1 className={cn(archivo_black.className, "text-[45rem]")}>truffle pig</h1>
    </div>
  )
}
