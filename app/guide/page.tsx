import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Beginner's Guide to Pickleball — Indore Pickleball",
  description: 'Learn pickleball rules, how to play, and what gear you need.',
}

const rules = [
  { emoji: '🎯', title: 'The Serve', desc: 'Serve diagonally, underhand, paddle below the waist. Must land in the opposite service box.' },
  { emoji: '🏀', title: 'Double Bounce Rule', desc: 'After the serve, both teams must let the ball bounce once before volleying.' },
  { emoji: '🚫', title: 'The Kitchen (NVZ)', desc: 'No volleying while standing in the 7 ft non-volley zone in front of the net.' },
  { emoji: '🔢', title: 'Scoring', desc: 'Only the serving team scores. Play to 11, win by 2. Tournaments use 15 or 21.' },
  { emoji: '❌', title: 'Faults', desc: 'Ball out of bounds, volleying from the kitchen, hitting the net, or violating double-bounce.' },
  { emoji: '👥', title: 'Doubles Play', desc: "Partners alternate serving. Communication wins — call 'mine' early." },
]

const gear = [
  { label: 'Paddles', emoji: '🏓', tag: 'Essential',
    items: [
      { name: 'Beginner (Wood/Composite)', price: '₹800–₹2,000', note: 'Start here' },
      { name: 'Intermediate (Graphite)', price: '₹2,500–₹6,000', note: 'Upgrade pick' },
      { name: 'Advanced (Carbon Fibre)', price: '₹6,000–₹15,000', note: 'Pro level' },
    ],
  },
  { label: 'Balls', emoji: '🟡', tag: 'Essential',
    items: [
      { name: 'Indoor (26 holes)', price: '₹150–₹300', note: 'Softer & quieter' },
      { name: 'Outdoor (40 holes)', price: '₹200–₹400', note: 'More durable' },
    ],
  },
  { label: 'Footwear', emoji: '👟', tag: 'Important',
    items: [
      { name: 'Court Shoes (Tennis/Badminton)', price: '₹1,500–₹5,000', note: 'Lateral support is key' },
    ],
  },
  { label: 'Accessories', emoji: '🎽', tag: 'Optional',
    items: [
      { name: 'Paddle Bag/Cover', price: '₹300–₹800', note: 'Protects the surface' },
      { name: 'Grip Tape', price: '₹80–₹200', note: 'Replace every few weeks' },
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
    <div className="bg-white">
      {/* ── HEADER ── */}
      <section className="bg-lime-400 relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-zinc-600 mb-3">For New Players</p>
          <h1 className="font-[family-name:--font-display] text-7xl md:text-9xl text-zinc-900 tracking-wide leading-none">
            GUIDE.
          </h1>
          <p className="text-zinc-700 mt-4 text-lg font-medium">Zero to first game in one page. No fluff.</p>
        </div>
      </section>

      {/* ── 5 STEPS ── */}
      <section className="py-20 border-b-2 border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">Getting Started</p>
          <h2 className="font-[family-name:--font-display] text-5xl text-zinc-900 tracking-wide mb-10">5 STEPS TO YOUR FIRST GAME.</h2>
          <div className="space-y-3">
            {steps.map(({ n, text }, i) => (
              <div key={n} className={`flex items-center gap-5 p-5 rounded-2xl transition-all ${
                i === 0 ? 'bg-orange-500' :
                i === 1 ? 'bg-lime-400' :
                'bg-zinc-50 border-2 border-zinc-100'
              }`}>
                <span className={`font-[family-name:--font-display] text-5xl leading-none shrink-0 ${
                  i === 0 ? 'text-white/30' : i === 1 ? 'text-zinc-900/20' : 'text-zinc-300'
                }`}>{n}</span>
                <span className={`font-bold text-base ${
                  i === 0 ? 'text-white' : i === 1 ? 'text-zinc-900' : 'text-zinc-700'
                }`}>{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/courts" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full transition-all hover:scale-105">
              Find a Court →
            </Link>
          </div>
        </div>
      </section>

      {/* ── RULES ── */}
      <section className="py-20 border-b-2 border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">Know Before You Play</p>
          <h2 className="font-[family-name:--font-display] text-5xl text-zinc-900 tracking-wide mb-10">THE RULES.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {rules.map(({ emoji, title, desc }, i) => (
              <div key={title} className={`rounded-2xl p-6 border-2 ${
                i === 0 ? 'bg-orange-500 border-orange-500 text-white' :
                i === 1 ? 'bg-lime-400 border-lime-400 text-zinc-900' :
                'bg-white border-zinc-200 hover:border-orange-300 transition-colors'
              }`}>
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className={`font-black uppercase tracking-wide text-sm mb-2 ${i < 2 ? '' : 'text-zinc-900'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed ${
                  i === 0 ? 'text-orange-100' : i === 1 ? 'text-zinc-700' : 'text-zinc-500'
                }`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURT DIMENSIONS ── */}
      <section className="bg-zinc-50 border-y-2 border-zinc-100 py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="text-6xl shrink-0">📐</div>
          <div>
            <h2 className="font-[family-name:--font-display] text-4xl text-zinc-900 tracking-wide mb-2">THE COURT</h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-lg">
              20 × 44 ft — same footprint as a doubles badminton court.
              Kitchen (NVZ): 7 ft either side of the net.
              Net: 36&quot; at the sides, 34&quot; in the middle.
            </p>
          </div>
        </div>
      </section>

      {/* ── GEAR ── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">Gear Up</p>
          <h2 className="font-[family-name:--font-display] text-5xl text-zinc-900 tracking-wide mb-2">WHAT YOU NEED.</h2>
          <p className="text-zinc-400 text-xs mb-10">Affiliate links — we may earn a small commission.</p>
          <div className="space-y-5">
            {gear.map(({ label, emoji, tag, items }) => (
              <div key={label} className="bg-white border-2 border-zinc-200 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b-2 border-zinc-100 bg-zinc-50">
                  <span className="text-2xl">{emoji}</span>
                  <span className="font-black text-zinc-900 uppercase tracking-wide">{label}</span>
                  <span className="ml-auto text-xs font-bold text-zinc-500 uppercase tracking-widest bg-white border border-zinc-200 px-2.5 py-1 rounded-full">{tag}</span>
                </div>
                <div className="divide-y divide-zinc-100">
                  {items.map(({ name, price, note }) => (
                    <div key={name} className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 transition-colors">
                      <div>
                        <p className="font-bold text-zinc-800 text-sm">{name}</p>
                        <p className="text-xs text-zinc-400">{note}</p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="font-black text-orange-500 text-sm">{price}</span>
                        <a href="#" className="text-xs font-bold text-zinc-400 hover:text-orange-500 flex items-center gap-1 transition-colors">
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
