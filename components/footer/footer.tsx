export default function Footer() {
  return (
    <div
      className="relative h-[30vh] border-t-[1px] border-gray-300 bg-white"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 grid h-[30vh] w-full grid-cols-8 grid-rows-8 items-center tracking-[-0.03em]">
        <ul className="col-start-2 row-start-3 flex gap-4">
          <li className="flex flex-col text-[13px]">
            <a href="#" className="text-black">
              Home
            </a>
            <a href="#" className="text-black">
              Writers
            </a>
            <a href="#" className="text-black">
              Songs
            </a>
            <a href="#" className="text-black">
              Contact
            </a>
          </li>
          <li className="flex flex-col text-[13px]">
            <a href="#" className="text-black">
              Instagram
            </a>
          </li>
        </ul>
        <p className="col-span-3 col-start-6 row-start-8 text-center text-[13px] text-black">
          © 2025 Punch Publishing. All Rights Reserved.
        </p>
        <a
          href="mailto:info@punchpublishing.com"
          className="col-start-2 row-start-8 text-[13px]"
        >
          info@punchpublishing.com
        </a>
      </div>
    </div>
  )
}
