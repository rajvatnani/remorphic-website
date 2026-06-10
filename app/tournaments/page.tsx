export const dynamic = 'force-dynamic'

import { supabase } from '@/lib/supabase'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { CalendarDays, MapPin, IndianRupee, ExternalLink, Trophy } from 'lucide-react'
import type { Tournament } from '@/lib/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tournaments — Indore Pickleball',
  description: 'Find upcoming pickleball tournaments in Indore. Dates, venues, entry fees, and registration links.',
}

async function getTournaments(): Promise<Tournament[]> {
  const { data } = await supabase
    .from('tournaments')
    .select('*')
    .order('date', { ascending: true })
  return (data as Tournament[]) ?? []
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function isUpcoming(dateStr: string) {
  return new Date(dateStr) >= new Date()
}

export default async function TournamentsPage() {
  const tournaments = await getTournaments()
  const upcoming = tournaments.filter((t) => isUpcoming(t.date))
  const past = tournaments.filter((t) => !isUpcoming(t.date))

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">
          <Trophy size={12} className="mr-1" /> Tournament Calendar
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Tournaments</h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Upcoming pickleball tournaments in Indore. Compete, connect, and level up your game.
        </p>
      </div>

      {/* Upcoming */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          Upcoming Tournaments
        </h2>

        {upcoming.length === 0 ? (
          <div className="text-center py-16 bg-orange-50 rounded-2xl border border-orange-100">
            <div className="text-5xl mb-4">🏆</div>
            <p className="font-semibold text-gray-700">No upcoming tournaments yet</p>
            <p className="text-sm text-gray-400 mt-1">
              Check back soon — or add tournaments via the Supabase dashboard.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {upcoming.map((t) => (
              <TournamentCard key={t.id} tournament={t} highlight />
            ))}
          </div>
        )}
      </section>

      {past.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-gray-500 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
            Past Tournaments
          </h2>
          <div className="space-y-4 opacity-60">
            {past.map((t) => (
              <TournamentCard key={t.id} tournament={t} highlight={false} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function TournamentCard({ tournament: t, highlight }: { tournament: Tournament; highlight: boolean }) {
  return (
    <Card className={`border ${highlight ? 'border-orange-200 bg-white' : 'border-gray-100 bg-gray-50'}`}>
      <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div
          className={`shrink-0 w-16 text-center rounded-xl py-2 ${
            highlight ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}
        >
          <div className="text-xs font-semibold uppercase tracking-wide">
            {new Date(t.date).toLocaleString('en-IN', { month: 'short' })}
          </div>
          <div className="text-2xl font-extrabold leading-none">{new Date(t.date).getDate()}</div>
          <div className="text-xs">{new Date(t.date).getFullYear()}</div>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{t.name}</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <CalendarDays size={13} />
              {formatDate(t.date)}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={13} />
              {t.venue}
            </span>
            {t.entry_fee && (
              <span className="flex items-center gap-1 font-medium text-orange-600">
                <IndianRupee size={13} />
                {t.entry_fee} entry
              </span>
            )}
          </div>
        </div>

        {t.registration_link && highlight ? (
          <a
            href={t.registration_link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: 'sm' }), 'bg-orange-600 hover:bg-orange-700 shrink-0')}
          >
            Register <ExternalLink size={12} className="ml-1" />
          </a>
        ) : !t.registration_link && highlight ? (
          <span className="text-xs text-gray-400 shrink-0">Registration opening soon</span>
        ) : null}
      </CardContent>
    </Card>
  )
}
