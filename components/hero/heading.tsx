import { cn } from "@/lib/utils"

export function Heading() {
  const heading = "truffle pig publishing"
  const words = heading.split(" ")

  return (
    <h1 className="px-4 font-serif text-[12vw] uppercase leading-none">
      {words.map((word, index) => (
        <span
          key={index}
          className={cn({ "tracking-wide": word === "publishing" })}
        >
          {word}
          {index < words.length - 1 && (index === 1 ? <br /> : " ")}
        </span>
      ))}
    </h1>
  )
}
