import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const outfit = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
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
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
