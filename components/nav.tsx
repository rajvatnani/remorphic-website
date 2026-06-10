'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/courts', label: 'Courts' },
  { href: '/tournaments', label: 'Tournaments' },
  { href: '/guide', label: 'Beginners Guide' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-orange-600">
          <span className="text-2xl">🏓</span>
          <span>Indore Pickleball</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === href
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/courts"
          className={cn(buttonVariants({ size: 'sm' }), 'hidden md:inline-flex bg-orange-600 hover:bg-orange-700')}
        >
          Find a Court
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-orange-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-orange-100 bg-white px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium ${
                  pathname === href
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/courts"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants(), 'mt-2 bg-orange-600 hover:bg-orange-700')}
            >
              Find a Court
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
