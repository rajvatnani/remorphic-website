import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Indore Pickleball — Find Courts, Tournaments & More',
  description:
    "Indore's home for pickleball. Find courts, join tournaments, and learn the game.",
  metadataBase: new URL('https://indorepickleball.com'),
  openGraph: {
    title: 'Indore Pickleball',
    description: "Indore's home for pickleball.",
    url: 'https://indorepickleball.com',
    siteName: 'Indore Pickleball',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
