import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight, IndianRupee } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export const revalidate = 60

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1710772099352-f8fbb7b30977?auto=format&fit=crop&w=800&q=80'

const stats = [
  { value: '8+', label: 'Courts in Indore' },
  { value: '500+', label: 'Active Players' },
  { value: '12', label: 'Tournaments this year' },
  { value: '24/7', label: 'Online booking' },
]

export default async function HomePage() {
  const { data } = await supabase
    .from('businesses')
    .select('id, name, slug, address, photo, price_per_slot')
    .eq('type', 'pickleball')
    .order('name')
    .limit(3)

  const featuredCourts = data ?? []

  return (
    <>
      {/* ── HERO — full-bleed image ── */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://plus.unsplash.com/premium_photo-1709932754800-051606368c90?auto=format&fit=crop&w=1600&q=80"
          alt="Pickleball players on court"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Navy tinted gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/40" />

        <div className="relative max-w-6xl mx-auto px-8 py-20 w-full">
          <div className="max-w-xl">
            <div className="inline-block bg-[#C8F135] text-[#0A1628] text-[11px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full mb-5">
              Indore&apos;s #1 Pickleball Hub
            </div>
            <h1 className="font-[family-name:--font-display] text-5xl md:text-7xl font-extrabold text-white leading-[1.02] tracking-[-1.5px] mb-5">
              Play More.<br />
              <span className="text-[#C8F135]">Worry Less.</span><br />
              Book Fast.
            </h1>
            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-sm">
              Find courts, book slots, and join Indore&apos;s fastest growing sport community — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/courts"
                className="bg-[#C8F135] text-[#0A1628] text-sm font-bold px-7 py-3.5 rounded-lg hover:bg-[#d4f545] transition-colors">
                Find a Court Near You
              </Link>
              <Link href="/guide"
                className="bg-transparent text-white text-sm font-medium px-7 py-3.5 rounded-lg border border-white/40 hover:border-white/70 hover:bg-white/5 transition-colors">
                What is Pickleball?
              </Link>
            </div>
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
      <section className="bg-white px-8 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-7">
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-1.5">Featured Courts</p>
              <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-[#0A1628] tracking-tight">Book a court today</h2>
            </div>
            <Link href="/courts" className="text-sm font-medium text-[#639922] hover:text-[#0A1628] transition-colors flex items-center gap-1 shrink-0">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          {featuredCourts.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-zinc-200 rounded-xl">
              <div className="text-4xl mb-2">🏓</div>
              <p className="text-sm text-zinc-400 font-medium">Courts being added — check back soon</p>
            </div>
          ) : (
            <div className={`grid gap-5 ${featuredCourts.length === 1 ? 'grid-cols-1 max-w-lg mx-auto' : featuredCourts.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
              {featuredCourts.map((court) => {
                const area = court.address?.split(',')[0]?.trim() ?? 'Indore'
                const imgSrc = court.photo ?? FALLBACK_IMAGE
                return (
                  <div key={court.slug} className="border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-[#C8F135] hover:shadow-lg transition-all group flex flex-col">
                    <div className="relative h-52 overflow-hidden bg-[#EAF3DE]">
                      <Image
                        src={imgSrc}
                        alt={court.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-[#C8F135] text-[#0A1628] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                          {area}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="font-[family-name:--font-display] text-lg font-extrabold text-[#0A1628] mb-1">{court.name}</div>
                      {court.address && (
                        <div className="flex items-center gap-1 text-xs text-[#9CA3AF] mb-5">
                          <MapPin size={11} /> {court.address}
                        </div>
                      )}
                      <div className="flex items-center justify-between mt-auto">
                        {court.price_per_slot ? (
                          <span className="font-bold text-[#3B6D11] flex items-center gap-0.5">
                            <IndianRupee size={12} />
                            <span className="text-sm">{Number(court.price_per_slot).toLocaleString('en-IN')}</span>
                            <span className="text-[11px] font-normal text-[#9CA3AF] ml-0.5">/slot</span>
                          </span>
                        ) : (
                          <span className="text-[13px] font-semibold text-[#9CA3AF]">See pricing</span>
                        )}
                        <a
                          href={`${CRM_URL}/book/${court.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#C8F135] text-[#0A1628] text-[12px] font-bold px-5 py-2.5 rounded-[6px] hover:bg-[#d4f545] transition-colors"
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

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#0A1628] px-8 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C8F135]/60 mb-2">Simple Process</p>
            <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-white tracking-tight">Get on the court in 3 steps.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { step: '01', title: 'Find a Court', desc: 'Browse verified pickleball venues in Indore — indoor, outdoor, all areas covered.', icon: '🗺️' },
              { step: '02', title: 'Book Online', desc: 'Pick your slot, pay securely. No calls, no waiting. Instant confirmation.', icon: '📅' },
              { step: '03', title: 'Show Up & Play', desc: 'Arrive at your booked time, pick up a paddle, and join the game. That simple.', icon: '🏓' },
            ].map(({ step, title, desc, icon }) => (
              <div key={step} className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#C8F135]/40 transition-colors">
                <div className="font-[family-name:--font-display] text-6xl font-extrabold text-white/[0.06] absolute top-3 right-4 leading-none select-none">{step}</div>
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-[family-name:--font-display] text-lg font-extrabold text-white tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/courts" className="inline-block bg-[#C8F135] text-[#0A1628] text-sm font-bold px-8 py-3.5 rounded-lg hover:bg-[#d4f545] transition-colors">
              Browse All Courts
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY PICKLEBALL — image + text ── */}
      <section className="bg-[#F9FAFB] border-y border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Image side */}
            <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[420px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1734161081396-0f0572a16bf6?auto=format&fit=crop&w=800&q=80"
                alt="Pickleball players with paddles"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Text side */}
            <div className="w-full md:w-1/2 px-8 py-12 flex flex-col justify-center">
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-2">Why Play?</p>
              <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-[#0A1628] tracking-tight mb-5">
                The fastest growing sport in India.
              </h2>
              <div className="space-y-4">
                {[
                  { emoji: '⚡', title: 'Easy to learn', desc: 'Most beginners rally within minutes. Smaller court, slower ball.' },
                  { emoji: '🏆', title: 'Highly competitive', desc: 'From casual games to national tournaments — there\'s a level for everyone.' },
                  { emoji: '🤝', title: 'Social by nature', desc: 'Doubles format means you\'re always playing with someone, not just against.' },
                ].map(({ emoji, title, desc }) => (
                  <div key={title} className="flex gap-3 items-start">
                    <div className="w-9 h-9 rounded-lg bg-[#C8F135] flex items-center justify-center text-base shrink-0">{emoji}</div>
                    <div>
                      <div className="font-[family-name:--font-display] font-bold text-[#0A1628] text-sm">{title}</div>
                      <div className="text-xs text-[#6B7280] leading-relaxed mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/guide" className="inline-block mt-7 bg-[#0A1628] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#0d1f3a] transition-colors self-start">
                Read the Beginner&apos;s Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOURNAMENTS TEASER ── */}
      <section className="relative overflow-hidden px-8 py-16">
        <Image
          src="https://images.unsplash.com/photo-1693142518820-78d7a05f1546?auto=format&fit=crop&w=1600&q=80"
          alt="Pickleball paddles and balls"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A1628]/85" />
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C8F135]/70 mb-2">Compete</p>
            <h2 className="font-[family-name:--font-display] text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tournaments happening<br /><span className="text-[#C8F135]">right here in Indore.</span>
            </h2>
            <p className="text-white/60 text-sm mt-3 max-w-sm leading-relaxed">
              Open championships, doubles cups, seasonal events — there&apos;s always something to compete in.
            </p>
          </div>
          <Link href="/tournaments"
            className="shrink-0 bg-[#C8F135] text-[#0A1628] text-sm font-bold px-7 py-3.5 rounded-lg hover:bg-[#d4f545] transition-colors">
            View Tournaments →
          </Link>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-[#0A1628] px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
          <h3 className="font-[family-name:--font-display] text-2xl font-extrabold text-white leading-snug tracking-tight flex-1">
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
    </>
  )
}
