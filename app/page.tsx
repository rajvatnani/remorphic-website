import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight, ArrowUpRight, Trophy, Users, Star } from 'lucide-react'

// ─── EDIT YOUR FEATURED COURTS HERE ──────────────────────────────────────────
const featuredCourts = [
  {
    name: 'Smash N Serve',
    area: 'Central Indore',
    address: 'Indore, Madhya Pradesh',
    slug: 'smash-n-serve-f730cf',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
  },
]
// ──────────────────────────────────────────────────────────────────────────────

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'

const stats = [
  { value: '500+', label: 'Active Players', icon: Users },
  { value: '10+', label: 'Courts in Indore', icon: Star },
  { value: '3×', label: 'Year-on-Year Growth', icon: Trophy },
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
      <section className="bg-orange-500 relative overflow-hidden">
        {/* diagonal texture */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-0">
          <div className="flex flex-col md:flex-row md:items-end gap-8">
            <div className="flex-1 pb-16">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                🔥 Indore&apos;s #1 Pickleball Community
              </div>
              <h1 className="font-[family-name:--font-display] text-[clamp(5rem,16vw,11rem)] leading-none text-white tracking-wide">
                PLAY<br/>PICKLE<br/>BALL.
              </h1>
              <p className="text-orange-100 text-lg max-w-md mt-5 mb-8 leading-relaxed">
                Find courts, dominate tournaments, and join 500+ players in Indore&apos;s fastest-growing sport.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/courts"
                  className="bg-white text-orange-600 font-black uppercase tracking-widest px-8 py-4 rounded-full text-base hover:bg-orange-50 transition-all hover:scale-105 shadow-lg">
                  Find a Court 🏓
                </Link>
                <Link href="/guide"
                  className="border-2 border-white/60 text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full text-base hover:border-white hover:bg-white/10 transition-all">
                  Learn to Play
                </Link>
              </div>
            </div>

            {/* Hero image — angled bottom */}
            <div className="hidden md:block w-80 shrink-0 self-end">
              <div className="relative h-80 rounded-t-3xl overflow-hidden border-4 border-white/30">
                <Image
                  src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80"
                  alt="Pickleball players"
                  fill
                  className="object-cover"
                  sizes="320px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-zinc-700">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-8 px-4 text-center">
                <div className="font-[family-name:--font-display] text-5xl text-orange-400 leading-none">{value}</div>
                <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest mt-1">{label}</div>
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
                WHY PICKLEBALL?
              </h2>
            </div>
            <Link href="/guide" className="mt-4 md:mt-0 text-sm font-black uppercase tracking-widest text-orange-500 hover:text-orange-600 flex items-center gap-1">
              Full Beginner Guide <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map(({ emoji, title, desc }, i) => (
              <div key={title} className={`rounded-3xl p-8 ${
                i === 0 ? 'bg-orange-500 text-white' :
                i === 1 ? 'bg-lime-400 text-zinc-900' :
                'bg-zinc-100 text-zinc-900'
              }`}>
                <div className="text-4xl mb-5">{emoji}</div>
                <h3 className="font-black text-xl uppercase tracking-wide mb-2">{title}</h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? 'text-orange-100' : 'opacity-70'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURTS ── */}
      <section className="bg-zinc-50 py-24 border-y-2 border-zinc-200">
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
            <div className="text-center py-16 border-2 border-dashed border-zinc-300 rounded-3xl">
              <p className="font-black text-zinc-400 uppercase">Add courts in app/page.tsx</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featuredCourts.map((court) => (
                <div key={court.slug} className="rounded-3xl overflow-hidden border-2 border-zinc-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 group bg-white flex flex-col">
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
      <section className="bg-lime-400 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:--font-display] text-5xl md:text-7xl text-zinc-900 tracking-wide mb-4">
            READY TO SMASH?
          </h2>
          <p className="text-zinc-700 text-lg mb-8 font-medium">
            Browse all courts and book your first slot today.
          </p>
          <Link href="/courts"
            className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white font-black uppercase tracking-widest px-12 py-5 rounded-full text-lg transition-all hover:scale-105">
            Browse All Courts 🏓
          </Link>
        </div>
      </section>
    </>
  )
}
