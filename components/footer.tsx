import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-white/8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 bg-[#C8F135] rounded-lg flex items-center justify-center text-lg shrink-0">🏓</div>
              <div className="font-[family-name:--font-display] text-lg font-extrabold text-[#C8F135] tracking-tight">
                Indore Pickleball
              </div>
            </div>
            <p className="text-xs text-white/35 leading-relaxed max-w-[200px]">
              Indore&apos;s home for pickleball — courts, tournaments, and community.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/25 mb-3">Explore</p>
            <div className="flex flex-col gap-2">
              {[
                { href: '/courts', label: 'Find Courts' },
                { href: '/tournaments', label: 'Tournaments' },
                { href: '/guide', label: "Beginner's Guide" },
                { href: '/about', label: 'About & Contact' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-xs text-white/40 hover:text-[#C8F135] transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/25 mb-3">Get in Touch</p>
            <div className="flex flex-col gap-2">
              <a href="tel:+919993905565" className="text-xs text-white/40 hover:text-[#C8F135] transition-colors">
                📞 +91-9993905565
              </a>
              <a href="https://instagram.com/indorepickleball" target="_blank" rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-[#C8F135] transition-colors">
                📸 @indorepickleball
              </a>
              <a href="mailto:hello@indorepickleball.com" className="text-xs text-white/40 hover:text-[#C8F135] transition-colors">
                ✉ hello@indorepickleball.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/20">© {new Date().getFullYear()} indorepickleball.com · All rights reserved</p>
          <p className="text-[11px] text-white/15">Indore, Madhya Pradesh</p>
        </div>
      </div>
    </footer>
  )
}
