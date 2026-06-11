import { Mail, MapPin, Link2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About & Contact — Indore Pickleball',
  description: 'Learn who runs Indore Pickleball and get in touch with us.',
}

export default function AboutPage() {
  return (
    <div className="bg-[#111]">
      {/* ── HEADER ── */}
      <section className="py-24 relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">The People</p>
          <h1 className="font-[family-name:--font-display] text-7xl md:text-9xl text-white tracking-wide leading-none">
            WHO WE ARE.
          </h1>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-lime-400 mb-3">Our Mission</p>
              <h2 className="font-[family-name:--font-display] text-5xl text-white tracking-wide leading-tight mb-5">
                PICKLEBALL FOR EVERYONE IN INDORE.
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm">
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
                <div key={label} className="bg-zinc-900 border border-zinc-700 hover:border-orange-500/40 rounded-2xl p-5 text-center transition-colors">
                  <div className="text-3xl mb-2">{emoji}</div>
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">Behind the Site</p>
          <h2 className="font-[family-name:--font-display] text-5xl text-white tracking-wide mb-8">THE TEAM.</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex gap-6 items-start">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl">
              🏓
            </div>
            <div>
              <h3 className="font-black text-white text-lg uppercase tracking-wide">Indore Pickleball Team</h3>
              <p className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-3">Community Organisers · Indore, MP</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A crew of passionate players based in Indore. We play weekly, organise open sessions, and are obsessed with growing pickleball in the city. If you love the sport — or are curious about it — you&apos;re already one of us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-lime-400 mb-3">Say Hello</p>
          <h2 className="font-[family-name:--font-display] text-5xl text-white tracking-wide mb-8">GET IN TOUCH.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <a href="mailto:hello@indorepickleball.com"
              className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 rounded-2xl p-6 flex flex-col gap-3 group transition-all">
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Mail size={18} className="text-orange-400" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-600 mb-0.5">Email</p>
                <p className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">hello@indorepickleball.com</p>
              </div>
            </a>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 bg-lime-500/20 rounded-xl flex items-center justify-center">
                <MapPin size={18} className="text-lime-400" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-600 mb-0.5">Location</p>
                <p className="text-sm font-bold text-white">Indore, Madhya Pradesh</p>
              </div>
            </div>

            <a href="https://instagram.com/indorepickleball" target="_blank" rel="noopener noreferrer"
              className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 rounded-2xl p-6 flex flex-col gap-3 group transition-all">
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Link2 size={18} className="text-orange-400" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-600 mb-0.5">Instagram</p>
                <p className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">@indorepickleball</p>
              </div>
            </a>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-[family-name:--font-display] text-3xl text-white tracking-wide mb-1">
                OWN A COURT?
              </h3>
              <p className="text-zinc-400 text-sm">List your venue for free — reach thousands of Indore players.</p>
            </div>
            <a href="mailto:hello@indorepickleball.com?subject=List my court on Indore Pickleball"
              className="shrink-0 bg-orange-500 hover:bg-orange-400 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full text-sm transition-all hover:scale-105">
              Email Us →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
