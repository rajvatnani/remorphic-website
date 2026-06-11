import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-0">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🏓</span>
            <span className="font-black text-white uppercase tracking-tight text-xl">
              Indore <span className="text-orange-500">Pickleball</span>
            </span>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Indore&apos;s home for pickleball. Find courts, join tournaments, and grow the game.
          </p>
          <div className="flex gap-2 mt-4">
            <span className="bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              🔥 Growing Fast
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { href: '/courts', label: 'Find Courts' },
              { href: '/tournaments', label: 'Tournaments' },
              { href: '/guide', label: "Beginner's Guide" },
              { href: '/about', label: 'About & Contact' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-zinc-400 hover:text-lime-400 transition-colors font-medium">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">Contact</h4>
          <a
            href="mailto:hello@indorepickleball.com"
            className="text-sm text-zinc-400 hover:text-lime-400 transition-colors"
          >
            hello@indorepickleball.com
          </a>
          <p className="text-xs text-zinc-600 mt-2">Indore, Madhya Pradesh</p>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Indore Pickleball. All rights reserved.
      </div>
    </footer>
  )
}
