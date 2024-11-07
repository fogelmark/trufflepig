import type { Metadata } from "next"
import "./globals.css"
import { inter, monteserrat } from "@/lib/fonts"
import { Header } from "@/components"

export const metadata: Metadata = {
  title: "Truffle Pig",
  description: "Truffle Pig is a music publishing company.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="scrollbar-thin scrollbar-track-[#f5f3ee] scrollbar-thumb-gray-400"
    >
      <body
        className={`${monteserrat.className} text-[#f5f3ee] bg-[hsl(0,3%,4%)] antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
