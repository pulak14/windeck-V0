import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WinDeck - AI-powered proposal generator",
  description: "WinDeck helps freelancers and agencies create persuasive proposal decks in minutes — powered by AI.",
  openGraph: {
    title: "WinDeck - AI-powered proposal generator",
    description: "WinDeck helps freelancers and agencies create persuasive proposal decks in minutes — powered by AI.",
    url: "https://windeck.app",
    siteName: "WinDeck",
    images: [
      {
        url: "/assets/og-windeck.jpg",
        width: 1200,
        height: 630,
        alt: "WinDeck - AI-powered proposal generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WinDeck - AI-powered proposal generator",
    description: "WinDeck helps freelancers and agencies create persuasive proposal decks in minutes — powered by AI.",
    images: ["/assets/og-windeck.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'