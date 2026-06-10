import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { CheckCircle, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Beginner's Guide to Pickleball — Indore Pickleball",
  description: 'Learn pickleball rules, how to play, and what equipment you need to get started in Indore.',
}

const rules = [
  { title: 'The Serve', desc: 'Serve diagonally, underhand, with the paddle below the waist. The ball must land in the diagonal service box.' },
  { title: 'Double Bounce Rule', desc: 'After the serve, each side must let the ball bounce once before they can volley. This ensures long rallies.' },
  { title: 'The Kitchen (Non-Volley Zone)', desc: 'You cannot volley the ball while standing in the 7-foot zone in front of the net — called the kitchen.' },
  { title: 'Scoring', desc: 'Only the serving team can score. Games are typically played to 11 points, win by 2. In tournaments, 15 or 21 points.' },
  { title: 'Faults', desc: 'The ball must stay inbounds. Stepping in the kitchen while volleying, hitting the net, or volleying before the double-bounce are all faults.' },
  { title: 'Doubles Play', desc: "In doubles, partners switch sides after each point won on serve. Communication is key — call 'mine' or 'yours'!" },
]

const equipment = [
  {
    category: 'Paddles',
    badge: 'Essential',
    badgeColor: 'bg-orange-100 text-orange-700',
    items: [
      { name: 'Beginner Paddle (Wood/Composite)', price: '₹800–₹2,000', note: 'Great starting point', link: '#' },
      { name: 'Intermediate Paddle (Graphite)', price: '₹2,500–₹6,000', note: 'Lighter, more control', link: '#' },
      { name: 'Advanced Paddle (Carbon Fibre)', price: '₹6,000–₹15,000', note: 'Tournament grade', link: '#' },
    ],
  },
  {
    category: 'Balls',
    badge: 'Essential',
    badgeColor: 'bg-orange-100 text-orange-700',
    items: [
      { name: 'Indoor Pickleball (26 holes)', price: '₹150–₹300 each', note: 'Softer, quieter', link: '#' },
      { name: 'Outdoor Pickleball (40 holes)', price: '₹200–₹400 each', note: 'Harder, weather-resistant', link: '#' },
    ],
  },
  {
    category: 'Footwear',
    badge: 'Recommended',
    badgeColor: 'bg-blue-100 text-blue-700',
    items: [
      { name: 'Court Shoes (Tennis / Badminton)', price: '₹1,500–₹5,000', note: 'Lateral support is key', link: '#' },
    ],
  },
  {
    category: 'Accessories',
    badge: 'Optional',
    badgeColor: 'bg-gray-100 text-gray-600',
    items: [
      { name: 'Paddle Bag / Cover', price: '₹300–₹800', note: 'Protects the surface', link: '#' },
      { name: 'Grip Tape', price: '₹80–₹200', note: 'Replace every few weeks', link: '#' },
      { name: 'Sports Gloves', price: '₹200–₹600', note: 'Optional but helpful in summer', link: '#' },
    ],
  },
]

const steps = [
  'Find a court near you — start on the Courts page.',
  'Borrow or rent a paddle for your first session.',
  "Learn the kitchen rule — it's the most common beginner mistake.",
  'Play doubles from day one — more rallies, more fun.',
  'Join a beginner open session or group lesson.',
]

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-14">
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">
          Complete Beginner&apos;s Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          How to Play Pickleball
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Everything you need to know to go from zero to your first game — in one page.
        </p>
      </div>

      {/* 5 steps */}
      <section className="mb-16 bg-orange-50 rounded-2xl p-8 border border-orange-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get started in 5 steps</h2>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-orange-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span className="text-gray-700 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <Link href="/courts" className={cn(buttonVariants(), 'bg-orange-600 hover:bg-orange-700')}>
            Find Courts Near You
          </Link>
        </div>
      </section>

      {/* Rules */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">The Rules</h2>
        <p className="text-gray-500 mb-8">
          Pickleball has fewer rules than most racquet sports. Here are the ones that matter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rules.map(({ title, desc }) => (
            <div key={title} className="p-5 rounded-xl border border-gray-100 bg-white hover:border-orange-200 transition-colors">
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Court info */}
      <section className="mb-16 bg-gray-900 text-white rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">🏸</div>
        <h2 className="text-xl font-bold mb-2">The Court</h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          A pickleball court is 20 × 44 ft — the same as a doubles badminton court.
          The kitchen (non-volley zone) extends 7 ft on each side of the net.
          The net is 36 inches on the sides and 34 inches in the middle.
        </p>
      </section>

      {/* Equipment */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Equipment Guide</h2>
        <p className="text-gray-500 mb-8">
          What you need, what it costs, and where to start.{' '}
          <span className="text-xs text-gray-400">(Affiliate links — we may earn a small commission.)</span>
        </p>
        <div className="space-y-8">
          {equipment.map(({ category, badge, badgeColor, items }) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-gray-900">{category}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeColor}`}>{badge}</span>
              </div>
              <div className="space-y-2">
                {items.map(({ name, price, note, link }) => (
                  <Card key={name} className="border border-gray-100">
                    <CardContent className="p-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{name}</p>
                        <p className="text-xs text-gray-400">{note}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-sm font-semibold text-orange-600">{price}</span>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="text-xs text-gray-400 hover:text-orange-600 flex items-center gap-1 transition-colors"
                        >
                          Buy <ExternalLink size={11} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
