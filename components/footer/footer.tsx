import Image from "next/image"
import logo from "@/public/logo/Logo_white.png"
import { FooterNav } from "./footer-nav"
import { cn } from "@/lib/utils"
import { playfair } from "@/lib/fonts"


export function Footer() {
  return (
    <div
      className="relative h-screen bg-gray-primary"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 grid h-screen w-full grid-cols-8 grid-rows-8">
        <p className={cn(playfair.className, "col-start-4 col-span-2 row-start-8 text-center self-center text-lg text-white")}>Truffle Pig Publishing</p>
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          src={logo}
          alt="kuk"
          width={300}
          height={300}
          priority
          draggable={false}
        />
        <FooterNav />
        <p className="text-[12px] row-start-8 col-span-2 ml-4 self-center uppercase text-red-primary">
          © 2024 truffle pig publishing
        </p>
        <p className="text-[12px] row-start-8 col-start-7 text-end mr-4 col-span-2 self-center uppercase text-red-primary">
          website by alex
        </p>
      </div>
    </div>
  )
}
