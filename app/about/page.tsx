import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import ContactForm from './contact-form'
import { Mail, Link2, MapPin } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About & Contact — Indore Pickleball',
  description: 'Learn who runs Indore Pickleball and get in touch with us.',
}

const team = [
  {
    name: 'The Indore Pickleball Team',
    role: 'Community Organisers',
    bio: 'A group of pickleball enthusiasts based in Indore, passionate about growing the sport in Madhya Pradesh. We play weekly and organise open sessions for all skill levels.',
    emoji: '🏓',
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-14">
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">About Us</Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Who We Are
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          We&apos;re a community-driven platform dedicated to growing pickleball in Indore — connecting players, venues, and tournaments in one place.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-14 bg-gradient-to-br from-orange-600 to-amber-400 text-white rounded-2xl p-8 md:p-12 text-center">
        <div className="text-5xl mb-4">🎯</div>
        <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
        <p className="text-orange-100 max-w-lg mx-auto leading-relaxed">
          To make pickleball accessible to every person in Indore — whether you&apos;re picking up a paddle for the first time or competing in your tenth tournament.
        </p>
      </section>

      {/* Team */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Team</h2>
        <div className="grid grid-cols-1 gap-4">
          {team.map(({ name, role, bio, emoji }) => (
            <Card key={name} className="border border-orange-100">
              <CardContent className="p-6 flex gap-5">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
                  {emoji}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
                  <p className="text-sm text-orange-600 font-medium mb-2">{role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick info */}
      <section className="mb-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
          <MapPin size={18} className="text-orange-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Location</p>
            <p className="text-sm font-medium text-gray-800">Indore, Madhya Pradesh</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
          <Mail size={18} className="text-orange-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Email</p>
            <a
              href="mailto:hello@indorepickleball.com"
              className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors"
            >
              hello@indorepickleball.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
          <Link2 size={18} className="text-orange-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Instagram</p>
            <a
              href="https://instagram.com/indorepickleball"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors"
            >
              @indorepickleball
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
          <p className="text-gray-500">
            Want to list your court, sponsor a tournament, or just say hi? Drop us a message.
          </p>
        </div>
        <Card className="border border-orange-100">
          <CardContent className="p-6 md:p-8">
            <ContactForm />
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
