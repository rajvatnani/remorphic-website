import { Mail, MapPin, Link2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About & Contact — Indore Pickleball',
  description: 'Learn who runs Indore Pickleball and get in touch with us.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ── HEADER ── */}
      <section className="bg-zinc-900 relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-orange-400 mb-3">The People</p>
          <h1 className="font-[family-name:--font-display] text-7xl md:text-9xl text-white tracking-wide leading-none">
            WHO WE ARE.
          </h1>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 border-b-2 border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">Our Mission</p>
              <h2 className="font-[family-name:--font-display] text-5xl text-zinc-900 tracking-wide leading-tight mb-5">
                PICKLEBALL FOR EVERYONE IN INDORE.
              </h2>
              <p className="text-zinc-500 leading-relaxed text-sm">
                We&apos;re a community-driven platform built by pickleball enthusiasts in Indore, dedicated to growing the sport across Madhya Pradesh — connecting players, venues, and tournaments in one place.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: '🏓', label: 'Community First', bg: 'bg-orange-500 text-white' },
                { emoji: '🏆', label: 'Competitive Spirit', bg: 'bg-lime-400 text-zinc-900' },
                { emoji: '🤝', label: 'Inclusive Sport', bg: 'bg-zinc-100 text-zinc-900' },
                { emoji: '🔥', label: 'Always Growing', bg: 'bg-zinc-900 text-white' },
              ].map(({ emoji, label, bg }) => (
                <div key={label} className={`${bg} rounded-3xl p-5 text-center`}>
                  <div className="text-3xl mb-2">{emoji}</div>
                  <p className="text-xs font-black uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 border-b-2 border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">Behind the Site</p>
          <h2 className="font-[family-name:--font-display] text-5xl text-zinc-900 tracking-wide mb-8">THE TEAM.</h2>
          <div className="bg-zinc-50 border-2 border-zinc-200 rounded-3xl p-8 flex gap-6 items-start">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl">
              🏓
            </div>
            <div>
              <h3 className="font-black text-zinc-900 text-lg uppercase tracking-wide">Indore Pickleball Team</h3>
              <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-3">Community Organisers · Indore, MP</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                A crew of passionate players based in Indore. We play weekly, organise open sessions, and are obsessed with growing pickleball in the city. If you love the sport — or are curious about it — you&apos;re already one of us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">Say Hello</p>
          <h2 className="font-[family-name:--font-display] text-5xl text-zinc-900 tracking-wide mb-8">GET IN TOUCH.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <a href="mailto:hello@indorepickleball.com"
              className="bg-white border-2 border-zinc-200 hover:border-orange-400 rounded-3xl p-6 flex flex-col gap-3 group transition-all">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Mail size={18} className="text-orange-500" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-0.5">Email</p>
                <p className="text-sm font-bold text-zinc-900 group-hover:text-orange-500 transition-colors">hello@indorepickleball.com</p>
              </div>
            </a>

            <div className="bg-white border-2 border-zinc-200 rounded-3xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 bg-lime-100 rounded-xl flex items-center justify-center">
                <MapPin size={18} className="text-lime-600" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-0.5">Location</p>
                <p className="text-sm font-bold text-zinc-900">Indore, Madhya Pradesh</p>
              </div>
            </div>

            <a href="https://instagram.com/indorepickleball" target="_blank" rel="noopener noreferrer"
              className="bg-white border-2 border-zinc-200 hover:border-orange-400 rounded-3xl p-6 flex flex-col gap-3 group transition-all">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Link2 size={18} className="text-orange-500" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-0.5">Instagram</p>
                <p className="text-sm font-bold text-zinc-900 group-hover:text-orange-500 transition-colors">@indorepickleball</p>
              </div>
            </a>
          </div>

          <div className="bg-orange-500 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-[family-name:--font-display] text-3xl text-white tracking-wide mb-1">
                OWN A COURT?
              </h3>
              <p className="text-orange-100 text-sm">List your venue for free — reach thousands of Indore players.</p>
            </div>
            <a href="mailto:hello@indorepickleball.com?subject=List my court on Indore Pickleball"
              className="shrink-0 bg-white text-orange-600 hover:bg-orange-50 font-black uppercase tracking-widest px-8 py-4 rounded-full text-sm transition-all hover:scale-105">
              Email Us →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
