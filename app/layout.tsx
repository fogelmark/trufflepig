import type { Metadata } from "next"
import "./globals.css"
import { inter } from "@/lib/fonts"
import { Footer } from "@/components"

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
      className="scrollbar-thin scrollbar-track-[#0f0e0e] scrollbar-thumb-gray-400"
    >
      <body className={`${inter.className} antialiased bg-[#0f0e0e] text-[#f5f3ee]`}>
          {children}
          {/* <Footer /> */}
      </body>
    </html>
  )
}
