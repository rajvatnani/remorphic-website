import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

// ─── EDIT YOUR FEATURED COURTS HERE ──────────────────────────────────────────
const featuredCourts = [
  {
    name: 'Smash N Serve',
    area: 'Central Indore',
    address: 'Indore, Madhya Pradesh',
    price: null as string | null,
    slug: 'smash-n-serve-f730cf',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    imgBg: 'bg-[#EAF3DE]',
  },
]
// ──────────────────────────────────────────────────────────────────────────────

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'

const stats = [
  { value: '8+', label: 'Courts in Indore' },
  { value: '500+', label: 'Active Players' },
  { value: '12', label: 'Tournaments this year' },
  { value: '24/7', label: 'Online booking' },
]

const features = [
  { emoji: '📅', title: 'Instant booking', text: 'Book any court in seconds. No calls, no waiting, no hassle.', color: 'text-[#639922]' },
  { emoji: '🏆', title: 'Tournaments', text: 'Stay updated on every upcoming tournament in Indore.', color: 'text-[#BA7517]' },
  { emoji: '👥', title: 'Community', text: 'Connect with players, find partners, grow your game.', color: 'text-[#185FA5]' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#0A1628] px-8 pt-16 pb-14 relative overflow-hidden">
        {/* Decorative ball rings */}
        <div className="absolute right-8 top-10 w-44 h-44 rounded-full border-[3px] border-[#C8F135]/15 flex items-center justify-center pointer-events-none">
          <div className="w-28 h-28 rounded-full border-2 border-[#C8F135]/25 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#C8F135] flex items-center justify-center text-3xl">🏓</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="inline-block bg-[#C8F135] text-[#0A1628] text-[11px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full mb-5">
            Indore&apos;s #1 Pickleball Hub
          </div>
          <h1 className="font-[family-name:--font-display] text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-4 max-w-lg">
            Play More.<br /><span className="text-[#C8F135]">Worry Less.</span><br />Book Fast.
          </h1>
          <p className="text-base text-white/60 leading-relaxed max-w-md mb-7">
            Find courts, book slots, and join Indore&apos;s fastest growing sport community — all in one place.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/courts"
              className="bg-[#C8F135] text-[#0A1628] text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#d4f545] transition-colors">
              Find a Court Near You
            </Link>
            <Link href="/guide"
              className="bg-transparent text-white text-sm font-medium px-6 py-3 rounded-lg border border-white/30 hover:border-white/60 transition-colors">
              What is Pickleball?
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#C8F135]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map(({ value, label }, i) => (
              <div key={label} className={`py-4 px-6 text-center ${i < 3 ? 'border-r border-[#0A1628]/15' : ''}`}>
                <div className="font-[family-name:--font-display] text-2xl font-extrabold text-[#0A1628]">{value}</div>
                <div className="text-xs text-[#3B6D11] font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURTS ── */}
      <section className="bg-white px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-2">Featured Courts</p>
          <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-[#0A1628] tracking-tight mb-2">Book a court today</h2>
          <p className="text-[15px] text-[#6B7280] leading-relaxed max-w-md mb-7">All courts verified and bookable instantly. Show up, play, repeat.</p>

          {featuredCourts.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-zinc-200 rounded-xl">
              <p className="text-sm text-zinc-400 font-medium">Add courts in app/page.tsx</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredCourts.map((court) => (
                <div key={court.slug} className="border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-[#C8F135] hover:shadow-md transition-all group">
                  <div className={`relative h-28 ${court.imgBg} overflow-hidden`}>
                    <Image
                      src={court.image}
                      alt={court.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-3.5">
                    <div className="font-[family-name:--font-display] text-sm font-bold text-[#0A1628] mb-1">{court.name}</div>
                    <div className="flex items-center gap-1 text-xs text-[#9CA3AF] mb-3">
                      <MapPin size={11} /> {court.area}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-[#3B6D11]">
                        {court.price ?? 'Book to see price'}
                      </span>
                      <a
                        href={`${CRM_URL}/book/${court.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#C8F135] text-[#0A1628] text-[11px] font-bold px-3 py-1.5 rounded-[6px] hover:bg-[#d4f545] transition-colors"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-5">
            <Link href="/courts" className="text-sm font-medium text-[#639922] hover:text-[#0A1628] transition-colors">
              View all courts →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-[#F9FAFB] px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-2">Why Indore Pickleball</p>
          <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-[#0A1628] tracking-tight mb-6">Everything in one place</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map(({ emoji, title, text, color }) => (
              <div key={title} className="bg-white rounded-xl p-5">
                <div className={`text-2xl mb-3 ${color}`}>{emoji}</div>
                <div className="font-[family-name:--font-display] text-[15px] font-bold text-[#0A1628] mb-1.5">{title}</div>
                <div className="text-[13px] text-[#6B7280] leading-relaxed">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
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
    </>
  )
}
