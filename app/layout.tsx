import type { Metadata } from "next"
import { M_PLUS_1 } from "next/font/google"
import "./global.css"
import Link from "next/link"
import React from "react"

const font = M_PLUS_1({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Map sandbox with leaflet",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body style={{ ...font.style }}>
        <header
          style={{
            background: "#277",
            color: "#eee",
            padding: ".5rem",
            position: "fixed",
            width: "100%",
            zIndex: "2000",
          }}
        >
          <Link href={"/"}>Map sandbox with leaflet</Link>
        </header>
        <main
          style={{
            height: "100%",
            minHeight: "100dvh",
            paddingTop: "2rem",
          }}
        >
          <>{children}</>
        </main>
      </body>
    </html>
  )
}
