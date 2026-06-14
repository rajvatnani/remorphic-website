'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/courts', label: 'Courts' },
  { href: '/guide', label: 'Beginners' },
  { href: '/tournaments', label: 'Tournaments' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-[#0A1628] border-b-[3px] border-[#C8F135] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Bordered mark */}
          <div className="border-2 border-[#C8F135] rounded-[6px] px-3 py-2 group-hover:bg-[#C8F135]/10 transition-colors">
            <span className="font-[family-name:--font-display] text-[15px] font-bold text-[#C8F135] tracking-[0.06em] leading-none">
              IP
            </span>
          </div>
          {/* Wordmark */}
          <div className="leading-none">
            <div className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.28em] mb-1">Indore</div>
            <div className="font-[family-name:--font-display] text-[20px] font-bold text-white tracking-tight leading-none">
              Pickleball
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[15px] font-medium transition-colors ${
                pathname === href ? 'text-[#C8F135]' : 'text-white/70 hover:text-[#C8F135]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/courts"
          className="hidden md:block bg-[#C8F135] text-[#0A1628] text-[14px] font-bold px-5 py-2.5 rounded-[6px] hover:bg-[#d4f545] transition-colors"
        >
          Find a Court
        </Link>

        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0A1628] border-t border-white/10 px-6 pb-5">
          <nav className="flex flex-col gap-1 pt-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 rounded-lg text-[15px] font-medium ${
                  pathname === href ? 'text-[#C8F135]' : 'text-white/70 hover:text-[#C8F135]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/courts"
              onClick={() => setOpen(false)}
              className="mt-3 bg-[#C8F135] text-[#0A1628] text-[15px] font-bold px-5 py-3 rounded-[6px] text-center"
            >
              Find a Court
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
