import { archivo_black } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Nav } from "@/components/nav"
import Image from "next/image"
import logo_text from "@/public/images/truffle_logo_text.png"


export function Content() {
  return (
    <div className="relative grid md:grid-cols-4 md:grid-rows-4 h-full w-full bg-[#0f0e0e] px-12 py-8">
      <Section1 />
      <Section2 />
      {/* maybe logo orange: text-[#ff811a] */}
      <p className="row-start-4 col-span-2 self-end max-sm:text-center max-sm:text-sm text-[#f3f3f3] z-10">© 2024 All Rights Reserved Truffle Pig</p>
      <Image src={logo_text} width={150} alt="logo" className="justify-self-center md:justify-self-end self-center col-span-2 md:row-start-4 md:col-start-4" />
    </div>
  )
}

const Section1 = () => {
  return (
    <div className="md:row-start-2 row-start-3 col-span-2 self-end text-[#f3f3f3] z-10 !block">
      <Nav justify="justify-center" inFooter={true} />
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
