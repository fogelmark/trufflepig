import Image from "next/image"
import logo_text from "@/public/images/truffle_logo_text.png"
import { Icons } from "@/components"


export function Content() {
  return (
    <div className="relative grid grid-cols-4 grid-rows-4 h-full w-full flex-col justify-end bg-[#0f0e0e] px-12 py-8">
      <Section1 />
      <Section2 />
      {/* maybe logo orange: text-[#ff811a] */}
      <p className="row-start-4 col-span-2 self-end text-[#f3f3f3]">© 2024 All Rights Reserved Truffle Pig</p>
      <Image src={logo_text} width={150} alt="logo" className="justify-self-end row-start-4 col-start-4" />
    </div>
  )
}

const Section1 = () => {
  return (
    <div className="row-start-2 col-span-2 self-end">
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className="text-[#f3f3f302] absolute">
      {/* <h1 className="text-[30rem]">truffle </h1> */}
      {/* <p className="text-[#ff811a]">© 2024 All Rights Reserved Truffle Pig</p> */}
      {/* <Image src={logo_text} width={150} alt="logo" className="row-start-4 col-start-4" /> */}
    </div>
  )
}

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-4 items-center justify-center text-[#f3f3f3]">
      <div className="flex flex-col gap-2">
        <h3 className="lowercase">About</h3>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="lowercase">Songs</h3>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="lowercase">Contact</h3>
      </div>
      <Icons />
    </div>
  )
}
