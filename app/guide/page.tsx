import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Beginner's Guide to Pickleball — Indore Pickleball",
  description: 'Learn pickleball rules, how to play, and what gear you need.',
}

const rules = [
  { emoji: '🎯', title: 'The Serve', desc: 'Serve diagonally, underhand, paddle below the waist. Must land in the opposite diagonal service box.' },
  { emoji: '🏀', title: 'Double Bounce Rule', desc: 'After the serve, both teams must let the ball bounce once before volleying. Sets up the rally.' },
  { emoji: '🚫', title: 'The Kitchen', desc: 'No volleying while standing in the 7 ft non-volley zone (NVZ) in front of the net. Called "the kitchen."' },
  { emoji: '🔢', title: 'Scoring', desc: 'Only the serving team scores. Play to 11, win by 2. Tournaments: 15 or 21 points.' },
  { emoji: '❌', title: 'Faults', desc: 'Ball out of bounds, volleying from the kitchen, hitting the net, or violating the double-bounce rule.' },
  { emoji: '👥', title: 'Doubles Play', desc: "Partners alternate serving. Call 'mine' or 'yours' early. Communication wins points." },
]

const gear = [
  {
    label: '🏓 Paddles', color: 'bg-orange-500', textColor: 'text-white',
    items: [
      { name: 'Beginner (Wood/Composite)', price: '₹800–₹2,000', tag: 'Start here' },
      { name: 'Intermediate (Graphite)', price: '₹2,500–₹6,000', tag: 'Upgrade' },
      { name: 'Advanced (Carbon Fibre)', price: '₹6,000–₹15,000', tag: 'Pro level' },
    ],
  },
  {
    label: '🟡 Balls', color: 'bg-lime-400', textColor: 'text-black',
    items: [
      { name: 'Indoor (26 holes)', price: '₹150–₹300', tag: 'Softer' },
      { name: 'Outdoor (40 holes)', price: '₹200–₹400', tag: 'Durable' },
    ],
  },
  {
    label: '👟 Footwear', color: 'bg-rose-500', textColor: 'text-white',
    items: [
      { name: 'Court Shoes (Tennis/Badminton)', price: '₹1,500–₹5,000', tag: 'Lateral support' },
    ],
  },
  {
    label: '🎽 Extras', color: 'bg-purple-500', textColor: 'text-white',
    items: [
      { name: 'Paddle Bag/Cover', price: '₹300–₹800', tag: 'Optional' },
      { name: 'Grip Tape', price: '₹80–₹200', tag: 'Replace often' },
      { name: 'Sports Gloves', price: '₹200–₹600', tag: 'Summer essential' },
    ],
  },
]

const steps = [
  { n: '01', text: 'Find a court — use the Courts page.' },
  { n: '02', text: 'Borrow or rent a paddle for your first session.' },
  { n: '03', text: "Memorise the kitchen rule — the #1 beginner mistake." },
  { n: '04', text: 'Play doubles from day one — more fun, faster improvement.' },
  { n: '05', text: 'Show up to an open session and meet the community.' },
]

export default function GuidePage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-zinc-950 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-widest text-purple-400 mb-2">For New Players</p>
          <h1 className="font-[family-name:--font-display] text-6xl md:text-8xl text-white tracking-wide leading-none">
            BEGINNER&apos;S<br />GUIDE.
          </h1>
          <p className="text-zinc-400 mt-4 max-w-lg">
            Zero to first game in one page. No fluff.
          </p>
        </div>
      </section>

      {/* 5 Steps */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">Getting Started</p>
          <h2 className="font-[family-name:--font-display] text-5xl md:text-6xl text-zinc-900 tracking-wide mb-10">
            5 STEPS TO YOUR<br />FIRST GAME.
          </h2>
          <div className="space-y-3">
            {steps.map(({ n, text }, i) => (
              <div key={n} className={`flex items-center gap-5 p-5 rounded-2xl ${
                i === 0 ? 'bg-orange-500 text-white' :
                i === 1 ? 'bg-lime-400 text-black' :
                'bg-zinc-50 text-zinc-800'
              }`}>
                <span className={`font-[family-name:--font-display] text-4xl leading-none shrink-0 ${i === 0 ? 'text-white/40' : i === 1 ? 'text-black/30' : 'text-zinc-200'}`}>
                  {n}
                </span>
                <span className="font-bold text-base">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/courts"
              className="inline-block bg-orange-500 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-orange-600 transition-all hover:scale-105"
            >
              Find a Court →
            </Link>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-widest text-lime-400 mb-2">Know Before You Play</p>
          <h2 className="font-[family-name:--font-display] text-5xl md:text-6xl text-white tracking-wide mb-10">
            THE RULES.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rules.map(({ emoji, title, desc }, i) => (
              <div key={title} className={`p-6 rounded-2xl border ${
                i % 4 === 0 ? 'border-orange-500/20 bg-orange-500/5' :
                i % 4 === 1 ? 'border-lime-500/20 bg-lime-500/5' :
                i % 4 === 2 ? 'border-rose-500/20 bg-rose-500/5' :
                'border-purple-500/20 bg-purple-500/5'
              }`}>
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-black text-white uppercase tracking-wide text-sm mb-2">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Court dimensions callout */}
      <section className="bg-gradient-to-r from-purple-600 to-violet-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">📐</div>
          <h2 className="font-[family-name:--font-display] text-4xl md:text-5xl text-white tracking-wide mb-3">
            THE COURT
          </h2>
          <p className="text-purple-200 max-w-md mx-auto text-sm leading-relaxed">
            20 × 44 ft — same as a doubles badminton court.
            Kitchen: 7 ft either side of the net.
            Net height: 36&quot; at sides, 34&quot; in the middle.
          </p>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-widest text-rose-500 mb-2">Gear Up</p>
          <h2 className="font-[family-name:--font-display] text-5xl md:text-6xl text-zinc-900 tracking-wide mb-2">
            WHAT YOU NEED.
          </h2>
          <p className="text-zinc-400 text-sm mb-10">
            Affiliate links — we may earn a small commission at no extra cost to you.
          </p>
          <div className="space-y-6">
            {gear.map(({ label, color, textColor, items }) => (
              <div key={label} className="rounded-2xl overflow-hidden border border-zinc-100">
                <div className={`px-5 py-3 font-black uppercase tracking-widest text-sm ${color} ${textColor}`}>
                  {label}
                </div>
                <div className="divide-y divide-zinc-50">
                  {items.map(({ name, price, tag }) => (
                    <div key={name} className="flex items-center justify-between px-5 py-4 bg-white hover:bg-zinc-50 transition-colors">
                      <div>
                        <p className="font-bold text-zinc-900 text-sm">{name}</p>
                        <span className="text-xs text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">{tag}</span>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="font-black text-orange-500 text-sm">{price}</span>
                        <a
                          href="#"
                          className="text-xs font-bold text-zinc-400 hover:text-orange-500 flex items-center gap-1 transition-colors"
                        >
                          Buy <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
