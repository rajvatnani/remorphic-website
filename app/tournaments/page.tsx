import { MapPin, IndianRupee, ExternalLink, Calendar } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tournaments — Indore Pickleball',
  description: 'Upcoming pickleball tournaments in Indore. Dates, venues, entry fees, and registration.',
}

// ─── ADD / EDIT TOURNAMENTS HERE ─────────────────────────────────────────────
const tournaments = [
  {
    name: 'Indore Open 2026',
    date: '2026-07-15',
    venue: 'Brilliant Convention Centre, Indore',
    entryFee: 500,
    registrationLink: null as string | null,
    accentColor: 'orange' as const,
  },
  {
    name: 'Monsoon Smash Cup',
    date: '2026-08-03',
    venue: 'Yashwant Club, Indore',
    entryFee: 300,
    registrationLink: null as string | null,
    accentColor: 'lime' as const,
  },
  {
    name: 'Diwali Doubles Classic',
    date: '2026-10-20',
    venue: 'Nehru Stadium, Indore',
    entryFee: 600,
    registrationLink: null as string | null,
    accentColor: 'rose' as const,
  },
]
// ──────────────────────────────────────────────────────────────────────────────

const accentMap = {
  orange: { date: 'bg-orange-500 text-white', badge: 'bg-orange-500/10 text-orange-500 border-orange-500/20', btn: 'bg-orange-500 hover:bg-orange-600', border: 'border-l-4 border-orange-500' },
  lime:   { date: 'bg-lime-400 text-black', badge: 'bg-lime-500/10 text-lime-700 border-lime-500/20', btn: 'bg-lime-500 hover:bg-lime-600', border: 'border-l-4 border-lime-400' },
  rose:   { date: 'bg-rose-500 text-white', badge: 'bg-rose-500/10 text-rose-500 border-rose-500/20', btn: 'bg-rose-500 hover:bg-rose-600', border: 'border-l-4 border-rose-500' },
  purple: { date: 'bg-purple-500 text-white', badge: 'bg-purple-500/10 text-purple-500 border-purple-500/20', btn: 'bg-purple-500 hover:bg-purple-600', border: 'border-l-4 border-purple-500' },
  amber:  { date: 'bg-amber-400 text-black', badge: 'bg-amber-500/10 text-amber-600 border-amber-500/20', btn: 'bg-amber-500 hover:bg-amber-600', border: 'border-l-4 border-amber-400' },
}

function isUpcoming(dateStr: string) {
  return new Date(dateStr) >= new Date()
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

export default function TournamentsPage() {
  const upcoming = tournaments.filter((t) => isUpcoming(t.date))
  const past = tournaments.filter((t) => !isUpcoming(t.date))

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-6xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-widest text-orange-200 mb-2">Compete &amp; Win</p>
          <h1 className="font-[family-name:--font-display] text-6xl md:text-8xl text-white tracking-wide leading-none">
            TOURNAMENTS.
          </h1>
          <p className="text-orange-100 mt-4 max-w-lg">
            Step up your game. Find upcoming tournaments, register, and compete against Indore&apos;s best.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 py-16">
        <div className="max-w-4xl mx-auto px-4">

          {/* Upcoming */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <h2 className="text-white font-black uppercase tracking-widest text-sm">Upcoming Tournaments</h2>
            </div>

            {upcoming.length === 0 ? (
              <div className="border border-dashed border-zinc-700 rounded-2xl py-16 text-center">
                <div className="text-5xl mb-3">🏆</div>
                <p className="font-black text-zinc-500 uppercase tracking-wide">No upcoming tournaments</p>
                <p className="text-xs text-zinc-600 mt-2">Add them in <code className="bg-zinc-900 px-1 rounded">app/tournaments/page.tsx</code></p>
              </div>
            ) : (
              <div className="space-y-4">
                {upcoming.map((t) => {
                  const a = accentMap[t.accentColor]
                  const d = new Date(t.date)
                  return (
                    <div key={t.name} className={`bg-zinc-900 rounded-2xl overflow-hidden flex gap-0 ${a.border}`}>
                      {/* Date block */}
                      <div className={`shrink-0 w-20 flex flex-col items-center justify-center py-5 px-2 ${a.date}`}>
                        <span className="text-xs font-black uppercase tracking-widest">
                          {d.toLocaleString('en-IN', { month: 'short' })}
                        </span>
                        <span className="font-[family-name:--font-display] text-4xl leading-none">{d.getDate()}</span>
                        <span className="text-xs font-bold">{d.getFullYear()}</span>
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4 p-5">
                        <div className="flex-1">
                          <h3 className="font-black text-white text-lg uppercase tracking-wide leading-tight">{t.name}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-zinc-400">
                            <span className="flex items-center gap-1.5"><Calendar size={12} />{formatDate(t.date)}</span>
                            <span className="flex items-center gap-1.5"><MapPin size={12} />{t.venue}</span>
                            {t.entryFee && (
                              <span className="flex items-center gap-1.5 font-bold text-lime-400">
                                <IndianRupee size={12} />{t.entryFee} entry
                              </span>
                            )}
                          </div>
                        </div>

                        {t.registrationLink ? (
                          <a
                            href={t.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`shrink-0 text-white font-black uppercase tracking-widest text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-1.5 ${a.btn}`}
                          >
                            Register <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="shrink-0 text-xs font-bold text-zinc-500 uppercase tracking-widest bg-zinc-800 px-4 py-2 rounded-xl">
                            Opening Soon
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Past */}
          {past.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                <h2 className="text-zinc-500 font-black uppercase tracking-widest text-sm">Past Tournaments</h2>
              </div>
              <div className="space-y-3 opacity-50">
                {past.map((t) => {
                  const a = accentMap[t.accentColor]
                  const d = new Date(t.date)
                  return (
                    <div key={t.name} className="bg-zinc-900 rounded-xl overflow-hidden flex border-l-4 border-zinc-700">
                      <div className="shrink-0 w-16 flex flex-col items-center justify-center py-4 bg-zinc-800 text-zinc-400">
                        <span className="text-xs font-bold uppercase">{d.toLocaleString('en-IN', { month: 'short' })}</span>
                        <span className="font-[family-name:--font-display] text-3xl leading-none">{d.getDate()}</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-black text-zinc-300 uppercase tracking-wide text-sm">{t.name}</h3>
                        <p className="text-xs text-zinc-500 mt-1">{t.venue}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
