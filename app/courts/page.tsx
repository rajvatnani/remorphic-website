import { MapPin, Phone, IndianRupee } from 'lucide-react'
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
    pricePerSlot: null as number | null,
    slug: 'smash-n-serve-f730cf',
    // accent: one of orange | lime | rose | purple | amber
    accent: 'orange' as const,
  },
]
// ──────────────────────────────────────────────────────────────────────────────

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'

const accentMap = {
  orange: { bar: 'bg-gradient-to-r from-orange-500 to-amber-400', badge: 'bg-orange-500/10 text-orange-500 border-orange-500/20', btn: 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/20' },
  lime:   { bar: 'bg-gradient-to-r from-lime-400 to-emerald-400', badge: 'bg-lime-500/10 text-lime-600 border-lime-500/20', btn: 'bg-lime-500 hover:bg-lime-600 shadow-lime-500/20' },
  rose:   { bar: 'bg-gradient-to-r from-rose-500 to-pink-500', badge: 'bg-rose-500/10 text-rose-500 border-rose-500/20', btn: 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20' },
  purple: { bar: 'bg-gradient-to-r from-purple-500 to-violet-500', badge: 'bg-purple-500/10 text-purple-500 border-purple-500/20', btn: 'bg-purple-500 hover:bg-purple-600 shadow-purple-500/20' },
  amber:  { bar: 'bg-gradient-to-r from-amber-400 to-yellow-400', badge: 'bg-amber-500/10 text-amber-600 border-amber-500/20', btn: 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20' },
}

export default function CourtsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-zinc-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-6xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-widest text-lime-400 mb-2">Where to Play</p>
          <h1 className="font-[family-name:--font-display] text-6xl md:text-8xl text-white tracking-wide leading-none">
            COURTS IN<br />INDORE.
          </h1>
          <p className="text-zinc-400 mt-4 max-w-lg">
            All verified pickleball venues in the city. Book your slot and get on the court.
          </p>
        </div>
      </section>

      {/* Courts Grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {courts.length === 0 ? (
            <div className="text-center py-24 border-2 border-dashed border-zinc-200 rounded-2xl">
              <div className="text-6xl mb-4">🏓</div>
              <p className="font-black text-xl uppercase text-zinc-400">No courts listed yet</p>
              <p className="text-sm text-zinc-400 mt-2">Add courts in <code className="bg-zinc-100 px-1 rounded">app/courts/page.tsx</code></p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courts.map((court) => {
                const a = accentMap[court.accent]
                const bookingHref = `${CRM_URL}/book/${court.slug}`
                return (
                  <div key={court.slug} className="rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-2xl transition-all duration-300 group bg-white flex flex-col">
                    {/* Color bar */}
                    <div className={`h-3 w-full ${a.bar}`} />

                    {/* Court image placeholder */}
                    <div className="h-44 bg-zinc-50 flex items-center justify-center relative overflow-hidden">
                      <span className="text-7xl opacity-30 group-hover:opacity-50 transition-opacity">🏓</span>
                      <div className={`absolute top-3 left-3 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border ${a.badge}`}>
                        {court.area}
                      </div>
                      {court.pricePerSlot && (
                        <div className="absolute top-3 right-3 bg-zinc-900 text-lime-400 text-xs font-black px-3 py-1 rounded-full flex items-center gap-0.5">
                          <IndianRupee size={11} />{court.pricePerSlot}/slot
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-black text-xl uppercase tracking-wide text-zinc-900 mb-1">{court.name}</h3>

                      {court.address && (
                        <p className="text-sm text-zinc-500 flex items-start gap-1.5 mb-1">
                          <MapPin size={13} className="mt-0.5 shrink-0 text-orange-400" />
                          {court.address}
                        </p>
                      )}
                      {court.phone && (
                        <a href={`tel:${court.phone}`} className="text-sm text-zinc-500 flex items-center gap-1.5 mb-1 hover:text-orange-500 transition-colors">
                          <Phone size={13} className="shrink-0 text-orange-400" />
                          {court.phone}
                        </a>
                      )}

                      <div className="mt-auto pt-4">
                        <a
                          href={bookingHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block w-full text-white font-black uppercase tracking-widest text-sm text-center py-3 rounded-xl transition-all hover:scale-[1.02] shadow-lg ${a.btn}`}
                        >
                          Book Now →
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
    </div>
  )
}
