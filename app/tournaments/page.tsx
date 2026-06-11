import Image from 'next/image'
import { MapPin, IndianRupee, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tournaments — Indore Pickleball',
  description: 'Upcoming pickleball tournaments in Indore.',
}

// ─── ADD / EDIT TOURNAMENTS HERE ─────────────────────────────────────────────
const tournaments = [
  {
    name: 'Indore Open 2026',
    subtitle: 'The city\'s biggest annual pickleball championship',
    date: '2026-07-15',
    venue: 'Brilliant Convention Centre, Indore',
    entryFee: 500,
    registrationLink: null as string | null,
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1400&q=80',
    tag: 'Open Championship',
  },
  {
    name: 'Monsoon Smash Cup',
    subtitle: 'Mixed doubles tournament — play through the rains',
    date: '2026-08-03',
    venue: 'Yashwant Club, Indore',
    entryFee: 300,
    registrationLink: null as string | null,
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1400&q=80',
    tag: 'Mixed Doubles',
  },
  {
    name: 'Diwali Doubles Classic',
    subtitle: 'Celebrate Diwali on the court — doubles format',
    date: '2026-10-20',
    venue: 'Nehru Stadium, Indore',
    entryFee: 600,
    registrationLink: null as string | null,
    image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1400&q=80',
    tag: 'Doubles',
  },
]
// ──────────────────────────────────────────────────────────────────────────────

function isUpcoming(dateStr: string) {
  return new Date(dateStr) >= new Date()
}

function fmtShortDate(dateStr: string) {
  const d = new Date(dateStr)
  return {
    day: d.getDate(),
    month: d.toLocaleString('en-IN', { month: 'short' }).toUpperCase(),
    year: d.getFullYear(),
    full: d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

export default function TournamentsPage() {
  const upcoming = tournaments.filter(t => isUpcoming(t.date))
  const past = tournaments.filter(t => !isUpcoming(t.date))
  const [featured, ...rest] = upcoming

  return (
    <div className="bg-[#111]">
      {/* ── HEADER ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">Compete &amp; Win</p>
          <h1 className="font-[family-name:--font-display] text-7xl md:text-9xl text-white tracking-wide leading-none">
            TOURNAMENTS.
          </h1>
          <p className="text-zinc-400 mt-5 text-lg max-w-lg">
            Step up. Compete against Indore&apos;s best. Make your mark.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-20">

        {/* ── FEATURED TOURNAMENT ── */}
        {featured && (
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-lime-400 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse inline-block" />
              Featured Upcoming
            </p>
            <div className="relative rounded-3xl overflow-hidden min-h-[480px] flex items-end">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Tag top-right */}
              <div className="absolute top-6 right-6 bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                {featured.tag}
              </div>

              {/* Content bottom */}
              <div className="relative p-8 md:p-12 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    {(() => { const d = fmtShortDate(featured.date); return (
                      <p className="text-orange-400 font-black text-sm uppercase tracking-widest mb-2">
                        {d.month} {d.day}, {d.year}
                      </p>
                    )})()}
                    <h2 className="font-[family-name:--font-display] text-5xl md:text-7xl text-white tracking-wide leading-none mb-2">
                      {featured.name.toUpperCase()}
                    </h2>
                    <p className="text-zinc-300 text-sm">{featured.subtitle}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-sm text-zinc-400">
                      <span className="flex items-center gap-1.5"><MapPin size={13} /> {featured.venue}</span>
                      {featured.entryFee && (
                        <span className="flex items-center gap-1.5 text-lime-400 font-bold">
                          <IndianRupee size={13} /> {featured.entryFee} entry
                        </span>
                      )}
                    </div>
                  </div>
                  {featured.registrationLink ? (
                    <a
                      href={featured.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-black uppercase tracking-widest px-8 py-4 rounded-full transition-all hover:scale-105 text-sm"
                    >
                      Register Now <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="shrink-0 bg-zinc-800 text-zinc-500 font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full">
                      Registration Opening Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── REST OF UPCOMING ── */}
        {rest.length > 0 && (
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-5 mt-10">More Upcoming</p>
            <div className="space-y-3">
              {rest.map(t => {
                const d = fmtShortDate(t.date)
                return (
                  <div key={t.name} className="relative rounded-2xl overflow-hidden flex items-center min-h-[140px]">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-black/75" />
                    <div className="relative flex flex-col sm:flex-row sm:items-center w-full gap-4 px-6 py-5">
                      {/* Date block */}
                      <div className="shrink-0 bg-orange-500 rounded-xl w-16 text-center py-3">
                        <div className="text-xs font-black uppercase text-orange-200">{d.month}</div>
                        <div className="font-[family-name:--font-display] text-4xl text-white leading-none">{d.day}</div>
                        <div className="text-xs text-orange-200">{d.year}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-orange-400 font-black uppercase tracking-widest mb-0.5">{t.tag}</div>
                        <h3 className="font-[family-name:--font-display] text-3xl text-white tracking-wide leading-none">{t.name.toUpperCase()}</h3>
                        <div className="flex flex-wrap gap-x-4 text-xs text-zinc-400 mt-1.5">
                          <span className="flex items-center gap-1"><MapPin size={11} />{t.venue}</span>
                          {t.entryFee && <span className="flex items-center gap-1 text-lime-400 font-bold"><IndianRupee size={11} />{t.entryFee}</span>}
                        </div>
                      </div>
                      {t.registrationLink ? (
                        <a href={t.registrationLink} target="_blank" rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-400 text-white font-black uppercase tracking-widest text-xs px-5 py-2.5 rounded-full transition-all">
                          Register <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <span className="shrink-0 text-zinc-500 font-bold text-xs uppercase tracking-widest bg-zinc-800/80 px-4 py-2 rounded-full">Soon</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {upcoming.length === 0 && (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
            <div className="text-5xl mb-3">🏆</div>
            <p className="font-black text-zinc-500 uppercase tracking-wide">No upcoming tournaments</p>
            <p className="text-xs text-zinc-600 mt-2">Add them in <code className="bg-zinc-900 px-1 rounded">app/tournaments/page.tsx</code></p>
          </div>
        )}

        {/* ── PAST ── */}
        {past.length > 0 && (
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-zinc-600 mb-5 mt-8">Past Tournaments</p>
            <div className="space-y-2">
              {past.map(t => {
                const d = fmtShortDate(t.date)
                return (
                  <div key={t.name} className="flex items-center gap-4 bg-zinc-900/50 rounded-xl px-5 py-4 opacity-50">
                    <div className="shrink-0 text-center w-12">
                      <div className="text-xs font-bold text-zinc-600 uppercase">{d.month}</div>
                      <div className="font-[family-name:--font-display] text-2xl text-zinc-500 leading-none">{d.day}</div>
                    </div>
                    <div>
                      <p className="font-black text-zinc-400 uppercase tracking-wide text-sm">{t.name}</p>
                      <p className="text-xs text-zinc-600">{t.venue}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
