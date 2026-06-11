import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#060E1A]">
      <div className="max-w-6xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-[family-name:--font-display] text-base font-extrabold text-white">
          Indore<span className="text-[#C8F135]">Pickleball</span>
        </div>
        <div className="flex items-center gap-6">
          {[
            { href: '/courts', label: 'Courts' },
            { href: '/tournaments', label: 'Tournaments' },
            { href: '/guide', label: 'Guide' },
            { href: '/about', label: 'About' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="text-xs text-white/30 hover:text-white/60 transition-colors">
              {label}
            </Link>
          ))}
        </div>
        <div className="text-xs text-white/30">
          © {new Date().getFullYear()} indorepickleball.com
        </div>
      </div>
    </footer>
  )
}
