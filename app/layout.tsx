import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import { ClientWrapper } from "./components/client_wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jeet Garala",
  description: "Full stack developer portfolio showcasing projects and skills",
  generator: "v0.dev",
  icons: {
    icon: [
      {
        url: '/images/icon.png',
        sizes: 'any',
      },
      {
        url: '/images/icon.png',
        type: 'image/png',
        sizes: '32x32',
      }
    ],
    apple: [
      {
        url: '/images/icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}
