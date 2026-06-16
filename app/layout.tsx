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
  metadataBase: new URL('https://www.indorepickleball.com'),
  title: {
    default: 'Pickleball Courts in Indore | Book Online | IndorePickleball',
    template: '%s | IndorePickleball',
  },
  description:
    'Find and book pickleball courts in Indore instantly. List of all courts, timings, pricing and online booking.',
  keywords: [
    'pickleball',
    'pickle ball',
    'pickleball Indore',
    'pickle ball Indore',
    'pickleball courts Indore',
    'book pickleball court Indore',
    'pickleball club Indore',
    'indoor pickleball Indore',
    'pickleball court near me Indore',
    'pickleball tournaments Indore',
    'pickleball coaching Indore',
    'IndorePickleball',
    'indore pickleball',
  ],
  authors: [{ name: 'IndorePickleball', url: 'https://www.indorepickleball.com' }],
  creator: 'IndorePickleball',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.indorepickleball.com',
    siteName: 'IndorePickleball',
    title: 'Pickleball Courts in Indore | Book Online | IndorePickleball',
    description:
      'Find and book pickleball courts in Indore instantly. List of all courts, timings, pricing and online booking.',
    images: [
      {
        url: 'https://plus.unsplash.com/premium_photo-1709932754800-051606368c90?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Pickleball courts in Indore — IndorePickleball',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pickleball Courts in Indore | Book Online | IndorePickleball',
    description:
      'Find and book pickleball courts in Indore instantly. List of all courts, timings, pricing and online booking.',
    images: ['https://plus.unsplash.com/premium_photo-1709932754800-051606368c90?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://www.indorepickleball.com',
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
