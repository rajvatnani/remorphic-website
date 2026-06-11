import Image from 'next/image'
import { MapPin, Phone, IndianRupee, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pickleball Courts in Indore — Indore Pickleball',
  description: 'Find all pickleball courts in Indore. Book your slot, get directions, and view pricing.',
}

// ─── ADD / EDIT COURTS HERE ───────────────────────────────────────────────────
const courts = [
  {
    name: 'Smash N Serve',
    tagline: 'Indore\'s premier indoor pickleball facility',
    area: 'Central Indore',
    address: 'Indore, Madhya Pradesh',
    phone: null as string | null,
    pricePerSlot: null as number | null,
    slug: 'smash-n-serve-f730cf',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80',
    features: ['Indoor Courts', 'Equipment Available', 'Coaching Sessions'],
  },
]
// ──────────────────────────────────────────────────────────────────────────────

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'

export default function CourtsPage() {
  return (
    <div className="bg-white">
      {/* ── HEADER ── */}
      <section className="bg-orange-500 relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-white/70 mb-3">Where to Play</p>
          <h1 className="font-[family-name:--font-display] text-7xl md:text-9xl text-white tracking-wide leading-none">
            COURTS.
          </h1>
          <p className="text-orange-100 mt-5 text-lg max-w-lg">
            Every verified pickleball venue in Indore, in one place.
          </p>
        </div>
      </section>

      {/* ── COURTS — EDITORIAL LAYOUT ── */}
      {courts.length === 0 ? (
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="text-6xl mb-4">🏓</div>
          <p className="font-black text-xl uppercase text-zinc-400">No courts listed yet</p>
          <p className="text-sm text-zinc-400 mt-2">Add courts in <code className="bg-zinc-100 px-1 rounded">app/courts/page.tsx</code></p>
        </div>
      ) : (
        courts.map((court, i) => {
          const isEven = i % 2 === 0
          const bookingHref = `${CRM_URL}/book/${court.slug}`
          return (
            <div key={court.slug} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[520px]`}>
              {/* Photo */}
              <div className="relative w-full md:w-3/5 min-h-[320px] md:min-h-0 overflow-hidden">
                <Image
                  src={court.image}
                  alt={court.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute top-6 left-6 bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  {court.area}
                </div>
              </div>

              {/* Details — white panel */}
              <div className="w-full md:w-2/5 bg-white flex flex-col justify-center px-10 py-14 border-b-2 border-zinc-100">
                <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">
                  Court {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="font-[family-name:--font-display] text-5xl md:text-6xl text-zinc-900 tracking-wide leading-none mb-4">
                  {court.name.toUpperCase()}
                </h2>
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{court.tagline}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {court.features.map(f => (
                    <span key={f} className="text-xs font-bold uppercase tracking-wide bg-orange-50 text-orange-600 border border-orange-200 px-3 py-1.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="space-y-2 mb-8 text-sm text-zinc-500">
                  {court.address && (
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-orange-500 shrink-0" />
                      {court.address}
                    </div>
                  )}
                  {court.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-orange-500 shrink-0" />
                      <a href={`tel:${court.phone}`} className="hover:text-zinc-900 transition-colors">{court.phone}</a>
                    </div>
                  )}
                  {court.pricePerSlot && (
                    <div className="flex items-center gap-2 text-lime-600 font-bold">
                      <IndianRupee size={14} className="shrink-0" />
                      {court.pricePerSlot} per slot
                    </div>
                  )}
                </div>

                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all hover:scale-105 self-start"
                >
                  Book Now <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          )
        })
      )}

      {/* ── ADD YOUR COURT CTA ── */}
      <div className="bg-zinc-50 border-t-2 border-zinc-200 py-16 text-center">
        <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-3">Own a Court?</p>
        <h3 className="font-[family-name:--font-display] text-4xl text-zinc-900 tracking-wide mb-5">
          LIST YOUR VENUE FOR FREE
        </h3>
        <a
          href="mailto:hello@indorepickleball.com?subject=List my court"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all hover:scale-105"
        >
          Get in Touch →
        </a>
      </div>
    </div>
  )
}
