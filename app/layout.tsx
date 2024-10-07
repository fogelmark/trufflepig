import type { Metadata } from "next"
import "./globals.css"
import { inter } from "@/lib/fonts"
import { Footer, Header } from "@/components"
import { OpenContextProvider } from "@/contexts/open-provider"

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
      className="scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-400"
    >
      <body className={`${inter.className} antialiased`}>
        <OpenContextProvider>
          <Header />
          {children}
          <Footer />
        </OpenContextProvider>
      </body>
    </html>
  )
}
