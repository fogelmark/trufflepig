import type { Metadata } from "next"
import "./globals.css"
import { inter } from "@/lib/fonts"
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
        className={`${inter.className} text-[#f5f3ee] bg-[#0f0e0e] antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
