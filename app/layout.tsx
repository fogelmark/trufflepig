import "./globals.css"
import { Header } from "@/components"
import { OpenContextProvider } from "@/context/open-provider"
import { roboto } from "@/lib/fonts"
import Footer from "@/components/footer/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Punch Publishing",
  description: "Punch Publishing is a music publishing company.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300"
    >
      <body className={`${roboto.className} antialiased selection:bg-black selection:text-white`}>
        <OpenContextProvider>
          <Header />
          {children}
          {/* <Footer /> */}
        </OpenContextProvider>
      </body>
    </html>
  )
}
