import { Mail, MapPin, Link2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About & Contact — Indore Pickleball',
  description: 'Learn who runs Indore Pickleball and get in touch with us.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-600 to-pink-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-widest text-rose-200 mb-2">The People</p>
          <h1 className="font-[family-name:--font-display] text-6xl md:text-8xl text-white tracking-wide leading-none">
            WHO WE ARE.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-rose-400 mb-2">Our Mission</p>
              <h2 className="font-[family-name:--font-display] text-5xl text-white tracking-wide leading-tight mb-4">
                PICKLEBALL FOR<br />EVERYONE<br />IN INDORE.
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We&apos;re a community-driven platform built by pickleball enthusiasts in Indore, dedicated to growing the sport across Madhya Pradesh — connecting players, venues, and tournaments in one place.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: '🏓', label: 'Community First' },
                { emoji: '🏆', label: 'Competitive Spirit' },
                { emoji: '🤝', label: 'Inclusive Sport' },
                { emoji: '🔥', label: 'Always Growing' },
              ].map(({ emoji, label }) => (
                <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{emoji}</div>
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">Behind the Site</p>
          <h2 className="font-[family-name:--font-display] text-5xl text-zinc-900 tracking-wide mb-10">
            THE TEAM.
          </h2>
          <div className="bg-zinc-950 rounded-2xl p-8 flex gap-6 items-start">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl">
              🏓
            </div>
            <div>
              <h3 className="font-black text-white text-xl uppercase tracking-wide">Indore Pickleball Team</h3>
              <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-3">Community Organisers</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A crew of passionate players based in Indore. We play weekly, organise open sessions, and are obsessed with growing pickleball in the city. If you love the sport — or are curious about it — you&apos;re already one of us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-widest text-lime-400 mb-2">Say Hello</p>
          <h2 className="font-[family-name:--font-display] text-5xl text-white tracking-wide mb-10">
            GET IN TOUCH.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <a
              href="mailto:hello@indorepickleball.com"
              className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-2xl p-6 flex flex-col gap-3 group transition-all"
            >
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Mail size={18} className="text-orange-400" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-0.5">Email</p>
                <p className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">hello@indorepickleball.com</p>
              </div>
            </a>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 bg-lime-500/20 rounded-xl flex items-center justify-center">
                <MapPin size={18} className="text-lime-400" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-0.5">Location</p>
                <p className="text-sm font-bold text-white">Indore, Madhya Pradesh</p>
              </div>
            </div>

            <a
              href="https://instagram.com/indorepickleball"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 border border-zinc-800 hover:border-rose-500/40 rounded-2xl p-6 flex flex-col gap-3 group transition-all"
            >
              <div className="w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center">
                <Link2 size={18} className="text-rose-400" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-0.5">Instagram</p>
                <p className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">@indorepickleball</p>
              </div>
            </a>
          </div>

          {/* Simple contact prompt */}
          <div className="bg-gradient-to-r from-orange-600 to-rose-600 rounded-2xl p-8 text-center">
            <h3 className="font-[family-name:--font-display] text-3xl text-white tracking-wide mb-2">
              WANT TO LIST YOUR COURT?
            </h3>
            <p className="text-orange-100 text-sm mb-6">
              Reach out and we&apos;ll add your venue to the directory — completely free.
            </p>
            <a
              href="mailto:hello@indorepickleball.com?subject=List my court on Indore Pickleball"
              className="inline-block bg-zinc-950 text-lime-400 font-black uppercase tracking-widest px-8 py-3 rounded-full text-sm hover:bg-zinc-900 transition-all hover:scale-105"
            >
              Email Us →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
