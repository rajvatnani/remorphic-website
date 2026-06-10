export const dynamic = 'force-dynamic'

import { supabase } from '@/lib/supabase'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MapPin, IndianRupee, Phone } from 'lucide-react'
import Image from 'next/image'
import type { Court } from '@/lib/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pickleball Courts in Indore — Indore Pickleball',
  description: 'Find all pickleball courts in Indore. Book your slot, get directions, and view pricing.',
}

async function getCourts(): Promise<Court[]> {
  const { data } = await supabase
    .from('businesses')
    .select('id, name, slug, photo, address, price_per_slot, phone, owner_name')
    .eq('type', 'pickleball')
    .order('name', { ascending: true })
  return (data as Court[]) ?? []
}

export default async function CourtsPage() {
  const courts = await getCourts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">
          Courts Directory
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Pickleball Courts in Indore
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          All verified pickleball venues in the city. Check availability, pricing, and book your slot.
        </p>
      </div>

      {courts.length === 0 ? (
        <div className="text-center py-24 bg-orange-50 rounded-2xl border border-orange-100">
          <div className="text-6xl mb-4">🏓</div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">No courts listed yet</h2>
          <p className="text-gray-500 max-w-sm mx-auto text-sm">
            Run the Supabase migration and add a business with type = &apos;pickleball&apos; to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
      )}
    </div>
  )
}

function CourtCard({ court }: { court: Court }) {
  const crmUrl = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://remorphic-crm.vercel.app'
  const bookingHref = court.slug ? `${crmUrl}/book/${court.slug}` : (court.phone ? `tel:${court.phone}` : null)

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-200 border border-gray-100 group">
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100 overflow-hidden">
        {court.photo ? (
          <Image
            src={court.photo}
            alt={court.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl opacity-60">🏓</span>
          </div>
        )}
        {court.price_per_slot && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-bold text-orange-600 shadow flex items-center gap-0.5">
            <IndianRupee size={11} />
            {court.price_per_slot}/slot
          </div>
        )}
      </div>

      <CardContent className="p-5">
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{court.name}</h3>

        {court.address && (
          <p className="text-sm text-gray-500 flex items-start gap-1.5 mb-1">
            <MapPin size={13} className="mt-0.5 shrink-0 text-orange-400" />
            {court.address}
          </p>
        )}

        {court.phone && (
          <p className="text-sm text-gray-500 flex items-center gap-1.5 mb-4">
            <Phone size={13} className="shrink-0 text-orange-400" />
            <a href={`tel:${court.phone}`} className="hover:text-orange-600 transition-colors">
              {court.phone}
            </a>
          </p>
        )}

        {!court.address && !court.phone && <div className="mb-4" />}

        {bookingHref ? (
          <a
            href={bookingHref}
            rel="noopener noreferrer"
            className={cn(buttonVariants(), 'w-full bg-orange-600 hover:bg-orange-700')}
          >
            Book Now
          </a>
        ) : (
          <span
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'w-full pointer-events-none opacity-50'
            )}
          >
            Contact for Booking
          </span>
        )}
      </CardContent>
    </Card>
  )
}
