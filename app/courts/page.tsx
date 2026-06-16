import Image from 'next/image'
import { MapPin, Phone, IndianRupee, Navigation } from 'lucide-react'
import type { Metadata } from 'next'
import { supabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Book Pickleball Courts in Indore',
  description: 'Find and book pickleball courts in Indore instantly. View court locations, timings, pricing and book your slot online.',
  alternates: { canonical: 'https://www.indorepickleball.com/courts' },
  openGraph: {
    title: 'Book Pickleball Courts in Indore | IndorePickleball',
    description: 'Find and book pickleball courts in Indore instantly. View court locations, timings, pricing and book your slot online.',
    url: 'https://www.indorepickleball.com/courts',
  },
}

export const revalidate = 60

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1710772099352-f8fbb7b30977?auto=format&fit=crop&w=800&q=80'

interface Court {
  id: string
  name: string
  slug: string
  address: string | null
  phone: string
  photo: string | null
  price_per_slot: number | null
  services_offered: string | null
  maps_url: string | null
}

export default async function CourtsPage() {
  const { data } = await supabase
    .from('businesses')
    .select('id, name, slug, address, phone, photo, price_per_slot, services_offered, maps_url')
    .eq('type', 'pickleball')
    .order('name')

  const courts: Court[] = data ?? []

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
          {courts.length > 0 && (
            <div className="inline-flex items-center gap-2 mt-4 bg-[#C8F135]/10 border border-[#C8F135]/25 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 bg-[#C8F135] rounded-full" />
              <span className="text-[#C8F135] text-xs font-semibold">
                {courts.length} venue{courts.length !== 1 ? 's' : ''} listed
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── COURTS GRID ── */}
      <section className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {courts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-zinc-200 rounded-xl">
              <div className="text-5xl mb-3">🏓</div>
              <p className="text-lg font-semibold text-zinc-400 mb-1">Courts coming soon</p>
              <p className="text-sm text-zinc-400">
                We&apos;re onboarding venues across Indore. Check back shortly or call us.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courts.map((court) => {
                const features = court.services_offered
                  ? court.services_offered.split(',').map(s => s.trim()).filter(Boolean)
                  : []
                const area = court.address?.split(',')[0]?.trim() ?? 'Indore'
                const imgSrc = court.photo ?? FALLBACK_IMAGE

                return (
                  <div key={court.slug} className="border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#C8F135] hover:shadow-xl transition-all group flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-[#EAF3DE]">
                      <Image
                        src={imgSrc}
                        alt={court.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
                      <div className="absolute top-4 left-4 bg-[#C8F135] text-[#0A1628] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                        {area}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col flex-1 gap-4">

                      {/* Name */}
                      <div className="font-[family-name:--font-display] text-2xl font-bold text-[#0A1628] leading-tight">
                        {court.name}
                      </div>

                      {/* Service chips */}
                      {features.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {features.slice(0, 4).map(f => (
                            <span key={f} className="text-xs font-semibold bg-[#F3F4F6] text-[#4B5563] px-3 py-1.5 rounded-full">
                              {f}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Address + Phone */}
                      <div className="space-y-2">
                        {court.address && (
                          <div className="flex items-start gap-2 text-sm text-[#6B7280]">
                            <MapPin size={15} className="text-[#639922] shrink-0 mt-0.5" />
                            <span>{court.address}</span>
                          </div>
                        )}
                        {court.phone && (
                          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                            <Phone size={15} className="text-[#639922] shrink-0" />
                            <a href={`tel:${court.phone}`} className="hover:text-[#0A1628] transition-colors">
                              {court.phone}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Map link */}
                      {court.maps_url && (
                        <a
                          href={court.maps_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#639922] hover:text-[#0A1628] transition-colors"
                        >
                          <Navigation size={14} />
                          View on Map
                        </a>
                      )}

                      {/* Price + Book */}
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#F3F4F6]">
                        {court.price_per_slot ? (
                          <div className="flex items-baseline gap-1">
                            <span className="text-[#3B6D11] font-bold text-2xl flex items-center gap-0.5">
                              <IndianRupee size={16} className="mt-0.5" />
                              {Number(court.price_per_slot).toLocaleString('en-IN')}
                            </span>
                            <span className="text-sm text-[#9CA3AF] font-normal">/slot</span>
                          </div>
                        ) : (
                          <span className="text-base font-semibold text-[#9CA3AF]">See pricing</span>
                        )}
                        <a
                          href={`${CRM_URL}/book/${court.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#C8F135] text-[#0A1628] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#d4f545] transition-colors"
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

      {/* ── LIST YOUR COURT CTA ── */}
      <section className="bg-[#0A1628] px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h3 className="font-[family-name:--font-display] text-2xl font-extrabold text-white leading-snug tracking-tight max-w-sm">
            Own a court in Indore?<br /><span className="text-[#C8F135]">Get listed for free.</span>
          </h3>
          <a
            href="tel:+919993905565"
            className="bg-[#C8F135] text-[#0A1628] text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#d4f545] transition-colors shrink-0 text-center"
          >
            📞 Call / WhatsApp<br />
            <span className="font-extrabold tracking-wide">+91-9993905565</span>
          </a>
        </div>
      </section>
    </div>
  )
}
