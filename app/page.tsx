import Link from 'next/link'
import { MapPin, IndianRupee, ArrowRight } from 'lucide-react'

// ─── EDIT YOUR COURTS HERE ────────────────────────────────────────────────────
const featuredCourts = [
  {
    name: 'Smash N Serve',
    area: 'Indore',
    address: 'Indore, Madhya Pradesh',
    pricePerSlot: null as number | null,
    slug: 'smash-n-serve-f730cf',
    accentColor: 'orange' as const,
  },
]
// ──────────────────────────────────────────────────────────────────────────────

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'

const stats = [
  { value: '500+', label: 'Active Players', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  { value: '10+', label: 'Courts in Indore', color: 'text-lime-400', bg: 'bg-lime-500/10 border-lime-500/20' },
  { value: '3×', label: 'YoY Growth', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
]

const whyCards = [
  { emoji: '🏸', title: 'Easy to learn', desc: 'Most beginners play a real rally within minutes.', bg: 'bg-orange-500', text: 'text-white' },
  { emoji: '⚡', title: 'Fast & fun', desc: 'Smaller court, slower ball — more rallies, more laughs.', bg: 'bg-lime-400', text: 'text-black' },
  { emoji: '🤝', title: 'Doubles format', desc: 'Built for pairs — the most social sport in Indore.', bg: 'bg-zinc-900 border border-zinc-700', text: 'text-white' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-zinc-950 relative overflow-hidden min-h-[88vh] flex items-center">
        {/* background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
            🔥 Indore&apos;s #1 Pickleball Community
          </div>

          <h1 className="font-[family-name:--font-display] text-[clamp(5rem,15vw,10rem)] leading-none text-white mb-2 tracking-wide">
            PLAY
          </h1>
          <h1 className="font-[family-name:--font-display] text-[clamp(5rem,15vw,10rem)] leading-none mb-6 tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">PICKLE</span>
            <span className="text-lime-400">BALL.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed">
            Indore&apos;s fastest-growing sport is here. Find courts, dominate tournaments, and join a community of 500+ players.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/courts"
              className="bg-lime-400 text-black font-black uppercase tracking-widest px-8 py-4 rounded-full text-base hover:bg-lime-300 transition-all hover:scale-105 shadow-lg shadow-lime-400/20"
            >
              Find a Court 🏓
            </Link>
            <Link
              href="/guide"
              className="border-2 border-zinc-700 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-full text-base hover:border-zinc-500 transition-all"
            >
              Learn the Game ⚡
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {stats.map(({ value, label, bg }) => (
              <div key={label} className={`border rounded-full px-5 py-2 text-sm font-bold text-white ${bg}`}>
                {value} {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PICKLEBALL ── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">The Sport</p>
            <h2 className="font-[family-name:--font-display] text-5xl md:text-7xl text-zinc-900 tracking-wide">
              WHAT IS PICKLEBALL?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whyCards.map(({ emoji, title, desc, bg, text }) => (
              <div key={title} className={`rounded-2xl p-8 ${bg} ${text}`}>
                <div className="text-5xl mb-5">{emoji}</div>
                <h3 className="font-black text-xl uppercase tracking-wide mb-2">{title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-zinc-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-lime-400 mb-2">By The Numbers</p>
            <h2 className="font-[family-name:--font-display] text-5xl md:text-7xl text-white tracking-wide">
              PICKLEBALL IS<br />BOOMING IN INDORE.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map(({ value, label, color, bg }) => (
              <div key={label} className={`rounded-2xl p-8 border ${bg}`}>
                <div className={`font-[family-name:--font-display] text-7xl md:text-8xl ${color} leading-none mb-2`}>
                  {value}
                </div>
                <div className="text-zinc-400 font-bold uppercase tracking-widest text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURTS ── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">Play Here</p>
              <h2 className="font-[family-name:--font-display] text-5xl md:text-6xl text-zinc-900 tracking-wide">
                FEATURED COURTS
              </h2>
            </div>
            <Link href="/courts" className="hidden sm:flex items-center gap-1 text-sm font-black uppercase tracking-widest text-orange-500 hover:text-orange-600">
              All Courts <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredCourts.map((court) => (
              <div key={court.slug} className="rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-xl transition-all duration-200 group">
                <div className="h-44 bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center relative">
                  <span className="text-6xl drop-shadow-lg">🏓</span>
                  {court.pricePerSlot && (
                    <div className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1 text-xs font-black text-orange-600 flex items-center gap-0.5">
                      <IndianRupee size={11} />{court.pricePerSlot}/slot
                    </div>
                  )}
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-black text-lg uppercase tracking-wide text-zinc-900 mb-1">{court.name}</h3>
                  <p className="text-sm text-zinc-500 flex items-center gap-1 mb-4">
                    <MapPin size={12} className="text-orange-400" /> {court.address}
                  </p>
                  <a
                    href={`${CRM_URL}/book/${court.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest text-sm text-center py-3 rounded-xl transition-all hover:scale-[1.02]"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:--font-display] text-5xl md:text-7xl text-white tracking-wide mb-4">
            READY TO SMASH?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Browse all courts in Indore and book your first slot today.
          </p>
          <Link
            href="/courts"
            className="inline-block bg-zinc-950 text-lime-400 font-black uppercase tracking-widest px-10 py-4 rounded-full text-lg hover:bg-zinc-900 transition-all hover:scale-105 shadow-xl"
          >
            Browse All Courts 🏓
          </Link>
        </div>
      </section>
    </>
  )
}
