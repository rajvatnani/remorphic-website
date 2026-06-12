import Image from 'next/image'
import { MapPin, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pickleball Courts in Indore — Indore Pickleball',
  description: 'Find all pickleball courts in Indore. Book your slot, get directions, and view pricing.',
}

// ─── ADD / EDIT COURTS HERE ───────────────────────────────────────────────────
const courts = [
  {
    name: 'Smash N Serve',
    area: 'Central Indore',
    address: 'Indore, Madhya Pradesh',
    phone: null as string | null,
    price: null as string | null,
    slug: 'smash-n-serve-f730cf',
    image: 'https://images.unsplash.com/photo-t4PNFAcPTd4?auto=format&fit=crop&w=800&q=80',
    features: ['Indoor Courts', 'Equipment Available', 'Coaching Sessions'],
    imgBg: 'bg-[#EAF3DE]',
  },
]
// ──────────────────────────────────────────────────────────────────────────────

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'

export default function CourtsPage() {
  return (
    <div className="bg-white">
      {/* ── HEADER ── */}
      <section className="bg-[#0A1628] px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C8F135]/70 mb-3">Where to Play</p>
          <h1 className="font-[family-name:--font-display] text-5xl font-extrabold text-white tracking-tight leading-tight">
            Courts in Indore
          </h1>
          <p className="text-white/60 mt-3 text-[15px] max-w-md leading-relaxed">
            Every verified pickleball venue in Indore, bookable in seconds.
          </p>
        </div>
      </section>

      {/* ── COURTS GRID ── */}
      <section className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {courts.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-zinc-200 rounded-xl">
              <div className="text-5xl mb-3">🏓</div>
              <p className="text-sm text-zinc-400 font-medium">Add courts in app/courts/page.tsx</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {courts.map((court) => {
                const bookingHref = `${CRM_URL}/book/${court.slug}`
                return (
                  <div key={court.slug} className="border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-[#C8F135] hover:shadow-lg transition-all group flex flex-col">
                    <div className={`relative h-44 ${court.imgBg} overflow-hidden`}>
                      <Image
                        src={court.image}
                        alt={court.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-[#C8F135] text-[#0A1628] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                        {court.area}
                      </div>
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <div className="font-[family-name:--font-display] text-lg font-bold text-[#0A1628] mb-1">{court.name}</div>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {court.features.map(f => (
                          <span key={f} className="text-[10px] font-semibold bg-[#F3F4F6] text-[#6B7280] px-2.5 py-1 rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-1.5 text-xs text-[#9CA3AF] mb-4">
                        {court.address && (
                          <div className="flex items-center gap-1.5">
                            <MapPin size={11} className="text-[#639922] shrink-0" /> {court.address}
                          </div>
                        )}
                        {court.phone && (
                          <div className="flex items-center gap-1.5">
                            <Phone size={11} className="text-[#639922] shrink-0" />
                            <a href={`tel:${court.phone}`} className="hover:text-[#0A1628] transition-colors">{court.phone}</a>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm font-semibold text-[#3B6D11]">
                          {court.price ?? 'See pricing'}
                        </span>
                        <a
                          href={bookingHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#C8F135] text-[#0A1628] text-xs font-bold px-4 py-2 rounded-[6px] hover:bg-[#d4f545] transition-colors"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── LIST YOUR COURT CTA ── */}
      <section className="bg-[#0A1628] px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h3 className="font-[family-name:--font-display] text-2xl font-extrabold text-white leading-snug tracking-tight max-w-sm">
            Own a court in Indore?<br /><span className="text-[#C8F135]">Get listed for free.</span>
          </h3>
          <a
            href="mailto:hello@indorepickleball.com?subject=List my court"
            className="bg-[#C8F135] text-[#0A1628] text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#d4f545] transition-colors shrink-0"
          >
            List Your Court
          </a>
        </div>
      </section>
    </div>
  )
}
