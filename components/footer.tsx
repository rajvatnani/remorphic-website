import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
            <span className="text-2xl">🏓</span>
            <span>Indore Pickleball</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Indore's home for pickleball. Find courts, join tournaments, and grow the game in the city.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/courts', label: 'Find Courts' },
              { href: '/tournaments', label: 'Tournaments' },
              { href: '/guide', label: "Beginner's Guide" },
              { href: '/about', label: 'About & Contact' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-orange-400 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">
            Questions about pickleball in Indore?
          </p>
          <Link
            href="/about"
            className="inline-block mt-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Indore Pickleball. All rights reserved.
      </div>
    </footer>
  )
}
