import "./globals.css"
import { Header } from "@/components"
import { OpenContextProvider } from "@/context/open-provider"
import { monteserrat } from "@/lib/fonts"
import type { Metadata } from "next"

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
      className="scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300"
    >
      <body
        className={`${monteserrat.className} text-white antialiased`}
      >
        <OpenContextProvider>
          <Header />
          {children}
        </OpenContextProvider>
      </body>
    </html>
  )
}
