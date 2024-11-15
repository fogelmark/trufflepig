import Image from "next/image"
import logo from "@/public/logo/Logo_white.png"


export function Footer() {
  return (
    <div
      className="relative h-screen bg-gray-primary"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 grid h-screen w-full grid-cols-8 grid-rows-8">
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          src={logo}
          alt="kuk"
          width={300}
          height={300}
          priority
          draggable={false}
        />
        <p className="text-[12px] row-start-8 col-span-2 ml-6 self-end mb-4 uppercase text-red-primary">
          © 2024 truffle pig publishing
        </p>
        <p className="text-[12px] row-start-8 col-start-7 text-end mr-6 col-span-2 self-end mb-4 uppercase text-red-primary">
          website by alex
        </p>
      </div>
    </div>
  )
}
