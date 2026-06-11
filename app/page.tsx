import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight, ArrowUpRight } from 'lucide-react'

// ─── EDIT YOUR FEATURED COURTS HERE ──────────────────────────────────────────
const featuredCourts = [
  {
    name: 'Smash N Serve',
    area: 'Central Indore',
    address: 'Indore, Madhya Pradesh',
    pricePerSlot: null as number | null,
    slug: 'smash-n-serve-f730cf',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
  },
]
// ──────────────────────────────────────────────────────────────────────────────

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'

const stats = [
  { value: '500+', label: 'Active Players', color: 'text-orange-400' },
  { value: '10+', label: 'Courts in Indore', color: 'text-lime-400' },
  { value: '3×', label: 'Year-on-Year Growth', color: 'text-white' },
]

const pillars = [
  { emoji: '🏸', title: 'Easy to Learn', desc: 'Most beginners play a real rally within minutes. Smaller court, slower ball.' },
  { emoji: '⚡', title: 'High Energy', desc: 'Fast rallies, smart positioning — addictive from the very first point.' },
  { emoji: '🤝', title: 'Social by Nature', desc: "Doubles format means you're always playing with someone, not just against." },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#111] relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            🔥 Indore&apos;s #1 Pickleball Community
          </div>

          <h1 className="font-[family-name:--font-display] text-[clamp(4.5rem,14vw,10rem)] leading-none text-white tracking-wide mb-2">
            PLAY
          </h1>
          <h1 className="font-[family-name:--font-display] text-[clamp(4.5rem,14vw,10rem)] leading-none tracking-wide mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">PICKLE</span>
            <span className="text-lime-400">BALL.</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Indore&apos;s fastest-growing sport is here. Find courts, dominate tournaments, and join a community of 500+ players.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="/courts"
              className="bg-lime-400 hover:bg-lime-300 text-black font-black uppercase tracking-widest px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-lime-400/10">
              Find a Court 🏓
            </Link>
            <Link href="/guide"
              className="border border-zinc-700 hover:border-zinc-500 text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full text-base transition-all">
              Learn the Game
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-zinc-800">
            {stats.map(({ value, label, color }) => (
              <div key={label}>
                <div className={`font-[family-name:--font-display] text-4xl ${color} leading-none`}>{value}</div>
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS PICKLEBALL ── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">The Sport</p>
              <h2 className="font-[family-name:--font-display] text-5xl md:text-7xl text-zinc-900 tracking-wide">
                WHAT IS PICKLEBALL?
              </h2>
            </div>
            <Link href="/guide" className="mt-4 md:mt-0 text-sm font-black uppercase tracking-widest text-orange-500 hover:text-orange-600 flex items-center gap-1">
              Full Guide <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map(({ emoji, title, desc }, i) => (
              <div key={title} className={`rounded-2xl p-8 ${
                i === 0 ? 'bg-orange-500 text-white' :
                i === 1 ? 'bg-zinc-900 text-white' :
                'bg-zinc-100 text-zinc-900'
              }`}>
                <div className="text-4xl mb-5">{emoji}</div>
                <h3 className="font-black text-lg uppercase tracking-wide mb-2">{title}</h3>
                <p className={`text-sm leading-relaxed ${i === 2 ? 'text-zinc-600' : 'opacity-75'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#111] py-24 relative overflow-hidden border-y border-zinc-800">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {stats.map(({ value, label, color }) => (
              <div key={label} className="px-8 py-10 text-center first:pl-0 last:pr-0">
                <div className={`font-[family-name:--font-display] text-8xl ${color} leading-none mb-2`}>{value}</div>
                <div className="text-zinc-500 font-bold uppercase tracking-widest text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURTS ── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
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

          {featuredCourts.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-zinc-200 rounded-2xl">
              <p className="font-black text-zinc-400 uppercase">Add courts in app/page.tsx</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featuredCourts.map((court) => (
                <div key={court.slug} className="rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-2xl transition-all duration-300 group bg-white flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={court.image}
                      alt={court.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-xs font-black uppercase tracking-widest text-orange-300 mb-0.5">{court.area}</p>
                      <h3 className="font-[family-name:--font-display] text-2xl text-white tracking-wide leading-none">{court.name.toUpperCase()}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between flex-1">
                    <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                      <MapPin size={13} className="text-orange-400" />
                      {court.address}
                    </div>
                    <a
                      href={`${CRM_URL}/book/${court.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest text-xs px-4 py-2.5 rounded-full transition-all"
                    >
                      Book <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#111] border-t border-zinc-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:--font-display] text-5xl md:text-7xl text-white tracking-wide mb-4">
            READY TO <span className="text-orange-400">SMASH?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Browse all courts and book your first slot today.
          </p>
          <Link href="/courts"
            className="inline-block bg-lime-400 hover:bg-lime-300 text-black font-black uppercase tracking-widest px-12 py-5 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-lime-400/10">
            Browse All Courts 🏓
          </Link>
        </div>
      </section>
    </>
  )
}
