import { archivo_black } from "@/lib/fonts";

export function Header() {
  return (
    <header className={`sticky top-0 z-20 flex justify-between px-4 py-6 bg-transparent backdrop-blur-md`}>
      <span className={`${archivo_black.className} text-2xl tracking-wide text-white`}>
        trufflepig.
      </span>
      <nav>
        <ul className="flex space-x-4">
          <li className="text-lg text-white">Home</li>
          <li className="text-lg text-white">About</li>
          <li className="text-lg text-white">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
