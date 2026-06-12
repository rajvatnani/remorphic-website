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
    image: 'https://plus.unsplash.com/premium_photo-1709932754800-051606368c90?auto=format&fit=crop&w=1400&q=80',
    tag: 'Open Championship',
  },
  {
    name: 'Monsoon Smash Cup',
    subtitle: 'Mixed doubles tournament — play through the rains',
    date: '2026-08-03',
    venue: 'Yashwant Club, Indore',
    entryFee: 300,
    registrationLink: null as string | null,
    image: 'https://images.unsplash.com/photo-1734161081396-0f0572a16bf6?auto=format&fit=crop&w=1400&q=80',
    tag: 'Mixed Doubles',
  },
  {
    name: 'Diwali Doubles Classic',
    subtitle: 'Celebrate Diwali on the court — doubles format',
    date: '2026-10-20',
    venue: 'Nehru Stadium, Indore',
    entryFee: 600,
    registrationLink: null as string | null,
    image: 'https://images.unsplash.com/photo-1642104798671-01a4129f4fdc?auto=format&fit=crop&w=1400&q=80',
    tag: 'Doubles',
  },
]
// ──────────────────────────────────────────────────────────────────────────────

function isUpcoming(dateStr: string) {
  return new Date(dateStr) >= new Date()
}

function fmtDate(dateStr: string) {
  const d = new Date(dateStr)
  return {
    day: d.getDate(),
    month: d.toLocaleString('en-IN', { month: 'short' }).toUpperCase(),
    year: d.getFullYear(),
  }
}

export default function TournamentsPage() {
  const upcoming = tournaments.filter(t => isUpcoming(t.date))
  const past = tournaments.filter(t => !isUpcoming(t.date))
  const [featured, ...rest] = upcoming

  return (
    <div className="bg-white">
      {/* ── HEADER ── */}
      <section className="bg-[#0A1628] px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C8F135]/70 mb-3">Compete &amp; Win</p>
          <h1 className="font-[family-name:--font-display] text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tournaments
          </h1>
          <p className="text-white/60 mt-3 text-[15px] max-w-md leading-relaxed">
            Step up, compete, and make your mark in Indore&apos;s growing pickleball scene.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 py-12">

        {/* ── FEATURED ── */}
        {featured && (
          <div className="mb-8">
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#639922] rounded-full animate-pulse inline-block" />
              Featured Upcoming
            </p>
            <div className="relative rounded-xl overflow-hidden min-h-[400px] flex items-end border border-[#E5E7EB]">
              <Image src={featured.image} alt={featured.name} fill className="object-cover" sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/50 to-transparent" />
              <div className="absolute top-4 right-4 bg-[#C8F135] text-[#0A1628] text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                {featured.tag}
              </div>
              <div className="relative p-6 md:p-8 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
                  <div>
                    {(() => { const d = fmtDate(featured.date); return (
                      <p className="text-[#C8F135] font-bold text-xs uppercase tracking-widest mb-1.5">
                        {d.month} {d.day}, {d.year}
                      </p>
                    )})()}
                    <h2 className="font-[family-name:--font-display] text-3xl md:text-5xl text-white font-extrabold tracking-tight leading-tight mb-1.5">
                      {featured.name}
                    </h2>
                    <p className="text-white/70 text-sm mb-2">{featured.subtitle}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1.5"><MapPin size={11} />{featured.venue}</span>
                      {featured.entryFee && (
                        <span className="flex items-center gap-1.5 text-[#C8F135] font-semibold">
                          <IndianRupee size={11} />{featured.entryFee} entry
                        </span>
                      )}
                    </div>
                  </div>
                  {featured.registrationLink ? (
                    <a href={featured.registrationLink} target="_blank" rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 bg-[#C8F135] text-[#0A1628] font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#d4f545] transition-colors">
                      Register Now <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="shrink-0 bg-white/10 text-white/60 font-medium text-xs px-5 py-2.5 rounded-lg">
                      Registration Opening Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── MORE UPCOMING ── */}
        {rest.length > 0 && (
          <div className="mb-10">
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#9CA3AF] mb-4 mt-2">More Upcoming</p>
            <div className="space-y-3">
              {rest.map(t => {
                const d = fmtDate(t.date)
                return (
                  <div key={t.name} className="relative rounded-xl overflow-hidden flex items-center border border-[#E5E7EB] hover:border-[#C8F135] transition-colors min-h-[110px]">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-white/88" />
                    <div className="relative flex flex-col sm:flex-row sm:items-center w-full gap-4 px-5 py-4">
                      <div className="shrink-0 bg-[#0A1628] rounded-lg w-14 text-center py-2.5">
                        <div className="text-[10px] font-bold uppercase text-[#C8F135]/70">{d.month}</div>
                        <div className="font-[family-name:--font-display] text-3xl text-[#C8F135] font-extrabold leading-none">{d.day}</div>
                        <div className="text-[10px] text-white/50">{d.year}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] text-[#639922] font-bold uppercase tracking-wide mb-0.5">{t.tag}</div>
                        <div className="font-[family-name:--font-display] text-xl font-extrabold text-[#0A1628] tracking-tight">{t.name}</div>
                        <div className="flex flex-wrap gap-3 text-xs text-[#9CA3AF] mt-1">
                          <span className="flex items-center gap-1"><MapPin size={10} />{t.venue}</span>
                          {t.entryFee && <span className="flex items-center gap-1 text-[#3B6D11] font-semibold"><IndianRupee size={10} />{t.entryFee}</span>}
                        </div>
                      </div>
                      {t.registrationLink ? (
                        <a href={t.registrationLink} target="_blank" rel="noopener noreferrer"
                          className="shrink-0 bg-[#C8F135] text-[#0A1628] font-bold text-xs px-4 py-2 rounded-[6px] hover:bg-[#d4f545] transition-colors">
                          Register
                        </a>
                      ) : (
                        <span className="shrink-0 text-[#9CA3AF] font-medium text-xs border border-[#E5E7EB] px-3 py-1.5 rounded-[6px]">Soon</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {upcoming.length === 0 && (
          <div className="text-center py-16 border border-dashed border-zinc-200 rounded-xl">
            <div className="text-4xl mb-3">🏆</div>
            <p className="text-sm text-zinc-400 font-medium">No upcoming tournaments — add them in app/tournaments/page.tsx</p>
          </div>
        )}

        {/* ── PAST ── */}
        {past.length > 0 && (
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#9CA3AF] mb-4">Past Tournaments</p>
            <div className="space-y-2">
              {past.map(t => {
                const d = fmtDate(t.date)
                return (
                  <div key={t.name} className="flex items-center gap-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-5 py-3.5 opacity-60">
                    <div className="shrink-0 text-center w-10">
                      <div className="text-[10px] font-bold text-[#9CA3AF] uppercase">{d.month}</div>
                      <div className="font-[family-name:--font-display] text-xl text-[#9CA3AF] font-extrabold leading-none">{d.day}</div>
                    </div>
                    <div>
                      <p className="font-semibold text-[#6B7280] text-sm">{t.name}</p>
                      <p className="text-xs text-[#9CA3AF]">{t.venue}</p>
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
