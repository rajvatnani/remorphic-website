'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/courts', label: 'Courts' },
  { href: '/tournaments', label: 'Tournaments' },
  { href: '/guide', label: 'Guide' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white border-b-2 border-zinc-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🏓</span>
          <span className="font-black text-zinc-900 uppercase tracking-tight text-lg leading-none">
            Indore <span className="text-orange-500">Pickleball</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                pathname === href
                  ? 'text-orange-500'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/courts"
          className="hidden md:block bg-orange-500 text-white font-black text-sm uppercase tracking-widest px-5 py-2 rounded-full hover:bg-orange-600 transition-all hover:scale-105"
        >
          Find Court →
        </Link>

        <button
          className="md:hidden p-2 text-zinc-600 hover:text-zinc-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t-2 border-zinc-900 px-4 pb-5">
          <nav className="flex flex-col gap-1 pt-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide ${
                  pathname === href
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/courts"
              onClick={() => setOpen(false)}
              className="mt-3 bg-orange-500 text-white font-black text-sm uppercase tracking-widest px-5 py-3 rounded-full text-center hover:bg-orange-600"
            >
              Find Court →
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
