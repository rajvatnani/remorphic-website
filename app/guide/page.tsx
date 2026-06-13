import Link from 'next/link'
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
  { emoji: '❌', title: 'Faults', desc: 'Ball out of bounds, volleying from the kitchen, hitting the net, or double-bounce violation.' },
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
  'Find a court — use the Courts page.',
  'Borrow or rent a paddle for your first session.',
  'Memorise the kitchen rule — the #1 beginner mistake.',
  'Play doubles from day one — more fun, faster improvement.',
  'Show up to an open session and meet the community.',
]

export default function GuidePage() {
  return (
    <div className="bg-white">
      {/* ── HEADER ── */}
      <section className="bg-[#0A1628] px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C8F135]/70 mb-3">For New Players</p>
          <h1 className="font-[family-name:--font-display] text-5xl font-extrabold text-white tracking-tight leading-tight">
            Beginner&apos;s Guide
          </h1>
          <p className="text-white/60 mt-3 text-[15px] max-w-md leading-relaxed">
            Zero to first game in one page. No fluff.
          </p>
        </div>
      </section>

      {/* ── 5 STEPS ── */}
      <section className="px-8 py-12 border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-2">Getting Started</p>
          <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-[#0A1628] tracking-tight mb-7">5 Steps to Your First Game.</h2>
          <div className="space-y-3">
            {steps.map((text, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-xl ${
                i === 0 ? 'bg-[#0A1628] text-white' :
                i === 1 ? 'bg-[#C8F135]' :
                'bg-[#F9FAFB] border border-[#E5E7EB]'
              }`}>
                <span className={`font-[family-name:--font-display] text-4xl font-extrabold leading-none shrink-0 ${
                  i === 0 ? 'text-white/20' : i === 1 ? 'text-[#0A1628]/20' : 'text-[#E5E7EB]'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`font-medium text-[15px] ${
                  i === 0 ? 'text-white' : i === 1 ? 'text-[#0A1628]' : 'text-[#374151]'
                }`}>{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/courts" className="inline-block bg-[#C8F135] text-[#0A1628] text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#d4f545] transition-colors">
              Find a Court →
            </Link>
          </div>
        </div>
      </section>

      {/* ── RULES ── */}
      <section className="px-8 py-12 border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-2">Know Before You Play</p>
          <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-[#0A1628] tracking-tight mb-7">The Rules.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {rules.map(({ emoji, title, desc }, i) => (
              <div key={title} className={`rounded-xl p-5 border ${
                i === 0 ? 'bg-[#0A1628] border-[#0A1628]' :
                i === 1 ? 'bg-[#C8F135] border-[#C8F135]' :
                'bg-white border-[#E5E7EB] hover:border-[#C8F135] transition-colors'
              }`}>
                <div className="text-2xl mb-2.5">{emoji}</div>
                <h3 className={`font-[family-name:--font-display] font-bold text-sm mb-1.5 ${
                  i === 0 ? 'text-white' : 'text-[#0A1628]'
                }`}>{title}</h3>
                <p className={`text-[13px] leading-relaxed ${
                  i === 0 ? 'text-white/60' : i === 1 ? 'text-[#3B6D11]' : 'text-[#6B7280]'
                }`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURT INFO ── */}
      <section className="bg-[#F9FAFB] border-b border-[#E5E7EB] px-8 py-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="text-5xl shrink-0">📐</div>
          <div>
            <h2 className="font-[family-name:--font-display] text-2xl font-extrabold text-[#0A1628] tracking-tight mb-1.5">The Court</h2>
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-lg">
              20 × 44 ft — same footprint as a doubles badminton court.
              Kitchen (NVZ): 7 ft either side of the net.
              Net: 36&quot; at the sides, 34&quot; in the middle.
            </p>
          </div>
        </div>
      </section>

      {/* ── GEAR ── */}
      <section className="px-8 py-12 border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-2">Gear Up</p>
          <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-[#0A1628] tracking-tight mb-1.5">What You Need.</h2>
          <p className="text-[#9CA3AF] text-xs mb-8">Approximate prices available in Indore shops and online.</p>
          <div className="space-y-4">
            {gear.map(({ label, emoji, tag, items }) => (
              <div key={label} className="border border-[#E5E7EB] rounded-xl overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-3.5 bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <span className="text-xl">{emoji}</span>
                  <span className="font-[family-name:--font-display] font-bold text-[#0A1628] text-sm">{label}</span>
                  <span className="ml-auto text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wide bg-white border border-[#E5E7EB] px-2 py-0.5 rounded-full">{tag}</span>
                </div>
                <div className="divide-y divide-[#F3F4F6]">
                  {items.map(({ name, price, note }) => (
                    <div key={name} className="flex items-center justify-between px-5 py-3.5 hover:bg-[#F9FAFB] transition-colors">
                      <div>
                        <p className="font-medium text-[#374151] text-sm">{name}</p>
                        <p className="text-xs text-[#9CA3AF]">{note}</p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="font-bold text-[#3B6D11] text-sm">{price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── READY TO PLAY CTA ── */}
      <section className="bg-[#0A1628] px-8 py-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-white tracking-tight mb-2">
              Ready to play your first game?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Find a court near you in Indore — most venues offer paddle rental for first-timers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/courts"
              className="bg-[#C8F135] text-[#0A1628] text-sm font-bold px-7 py-3.5 rounded-lg hover:bg-[#d4f545] transition-colors text-center">
              Find a Court →
            </Link>
            <Link href="/tournaments"
              className="bg-transparent text-white text-sm font-medium px-7 py-3.5 rounded-lg border border-white/30 hover:border-white/60 hover:bg-white/5 transition-colors text-center">
              See Tournaments
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
