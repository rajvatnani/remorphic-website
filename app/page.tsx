export const dynamic = 'force-dynamic'

import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { supabase } from '@/lib/supabase'
import type { Court } from '@/lib/types'
import { MapPin, IndianRupee, ArrowRight, Zap, Users, Trophy } from 'lucide-react'

async function getFeaturedCourts(): Promise<Court[]> {
  const { data } = await supabase
    .from('businesses')
    .select('id, name, slug, photo, address, price_per_slot, phone, owner_name')
    .eq('type', 'pickleball')
    .limit(3)
  return (data as Court[]) ?? []
}

const stats = [
  { icon: Users, value: '500+', label: 'Active Players', sub: 'and growing fast' },
  { icon: MapPin, value: '10+', label: 'Courts in Indore', sub: 'across all neighbourhoods' },
  { icon: Trophy, value: '3×', label: 'Growth This Year', sub: 'year-on-year player count' },
]

const whatIsPickleball = [
  {
    emoji: '🏸',
    title: 'A sport for everyone',
    desc: 'Pickleball combines elements of tennis, badminton, and ping-pong — playable at any age or fitness level.',
  },
  {
    emoji: '⚡',
    title: 'Fast to learn',
    desc: 'Most beginners play their first real rally within minutes. The smaller court and slower ball make it beginner-friendly.',
  },
  {
    emoji: '🤝',
    title: 'Built for doubles',
    desc: 'The standard format is doubles, making it one of the most social sports you can pick up in the city.',
  },
]

export default async function HomePage() {
  const courts = await getFeaturedCourts()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-400 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Zap size={14} />
            Indore&apos;s fastest growing sport
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Indore&apos;s Home for
            <br />
            <span className="text-white drop-shadow-lg">Pickleball</span>
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-xl mx-auto mb-10 leading-relaxed">
            Find courts, join tournaments, and connect with hundreds of players across the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/courts"
              className={cn(buttonVariants({ size: 'lg' }), 'bg-white text-orange-600 hover:bg-orange-50 font-bold shadow-lg')}
            >
              Find a Court
            </Link>
            <Link
              href="/guide"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'border-white text-white hover:bg-white/10 bg-transparent'
              )}
            >
              Beginner&apos;s Guide
            </Link>
          </div>
        </div>
      </section>

      {/* What is Pickleball */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What is Pickleball?</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            The sport taking India by storm — and Indore is leading the charge.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatIsPickleball.map(({ emoji, title, desc }) => (
            <div key={title} className="text-center p-6 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Pickleball is Exploding in Indore</h2>
            <p className="text-gray-400 max-w-md mx-auto">The numbers speak for themselves.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map(({ icon: Icon, value, label, sub }) => (
              <div key={label} className="text-center p-8 rounded-2xl bg-gray-800 border border-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 mb-4">
                  <Icon size={24} />
                </div>
                <div className="text-5xl font-extrabold text-orange-400 mb-1">{value}</div>
                <div className="text-lg font-semibold text-white mb-1">{label}</div>
                <div className="text-sm text-gray-400">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courts */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Featured Courts</h2>
            <p className="text-gray-500">Top pickleball venues in Indore</p>
          </div>
          <Link
            href="/courts"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'hidden sm:inline-flex border-orange-200 text-orange-600 hover:bg-orange-50'
            )}
          >
            View all <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>

        {courts.length === 0 ? (
          <div className="text-center py-16 bg-orange-50 rounded-2xl border border-orange-100">
            <div className="text-5xl mb-4">🏓</div>
            <p className="text-gray-600 font-medium">Courts coming soon!</p>
            <p className="text-sm text-gray-400 mt-1">Run the Supabase migration and add your first court.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courts.map((court) => (
              <CourtCard key={court.id} court={court} />
            ))}
          </div>
        )}

        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/courts"
            className={cn(buttonVariants({ variant: 'outline' }), 'border-orange-200 text-orange-600 hover:bg-orange-50')}
          >
            View all courts <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to play?</h2>
          <p className="text-orange-100 mb-8">
            Browse all courts, find your nearest venue, and book a slot today.
          </p>
          <Link
            href="/courts"
            className={cn(buttonVariants({ size: 'lg' }), 'bg-white text-orange-600 hover:bg-orange-50 font-bold')}
          >
            Browse All Courts
          </Link>
        </div>
      </section>
    </>
  )
}

function CourtCard({ court }: { court: Court }) {
  const crmUrl = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'
  const bookingHref = court.slug ? `${crmUrl}/book/${court.slug}` : (court.phone ? `tel:${court.phone}` : '#')

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <div className="relative h-44 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
        {court.photo ? (
          <Image src={court.photo} alt={court.name} fill className="object-cover" />
        ) : (
          <span className="text-5xl">🏓</span>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{court.name}</h3>
        {court.address && (
          <p className="text-sm text-gray-500 flex items-start gap-1.5 mb-3">
            <MapPin size={14} className="mt-0.5 shrink-0 text-orange-400" />
            {court.address}
          </p>
        )}
        <div className="flex items-center justify-between">
          {court.price_per_slot ? (
            <span className="flex items-center gap-0.5 text-sm font-semibold text-gray-700">
              <IndianRupee size={13} />
              {court.price_per_slot}/slot
            </span>
          ) : (
            <span className="text-sm text-gray-400">Price on request</span>
          )}
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: 'sm' }), 'bg-orange-600 hover:bg-orange-700 text-xs')}
          >
            Book Now
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
