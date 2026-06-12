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
      <section className="bg-[#0A1628] px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C8F135]/70 mb-3">The People</p>
          <h1 className="font-[family-name:--font-display] text-5xl font-extrabold text-white tracking-tight leading-tight">
            Who We Are
          </h1>
          <p className="text-white/60 mt-3 text-[15px] max-w-md leading-relaxed">
            A community of players building Indore&apos;s pickleball scene from the ground up.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="px-8 py-12 border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-2">Our Mission</p>
              <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-[#0A1628] tracking-tight mb-4">
                Pickleball for everyone in Indore.
              </h2>
              <p className="text-[15px] text-[#6B7280] leading-relaxed">
                We&apos;re a community-driven platform built by pickleball enthusiasts in Indore, dedicated to growing the sport across Madhya Pradesh — connecting players, venues, and tournaments in one place.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: '🏓', label: 'Community First', bg: 'bg-[#EAF3DE] text-[#0A1628]' },
                { emoji: '🏆', label: 'Competitive Spirit', bg: 'bg-[#0A1628] text-white' },
                { emoji: '🤝', label: 'Inclusive Sport', bg: 'bg-[#F9FAFB] text-[#0A1628]' },
                { emoji: '🔥', label: 'Always Growing', bg: 'bg-[#C8F135] text-[#0A1628]' },
              ].map(({ emoji, label, bg }) => (
                <div key={label} className={`${bg} rounded-xl p-5 text-center`}>
                  <div className="text-2xl mb-2">{emoji}</div>
                  <p className="text-xs font-bold uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="px-8 py-12 border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-2">Behind the Site</p>
          <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-[#0A1628] tracking-tight mb-6">The Team.</h2>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 flex gap-5 items-start">
            <div className="shrink-0 w-14 h-14 rounded-xl bg-[#0A1628] flex items-center justify-center text-2xl">
              🏓
            </div>
            <div>
              <h3 className="font-[family-name:--font-display] font-extrabold text-[#0A1628] tracking-tight mb-0.5">Indore Pickleball Team</h3>
              <p className="text-[#639922] font-semibold text-xs mb-3">Community Organisers · Indore, MP</p>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                A crew of passionate players based in Indore. We play weekly, organise open sessions, and are obsessed with growing pickleball in the city. If you love the sport — or are curious about it — you&apos;re already one of us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#639922] mb-2">Say Hello</p>
          <h2 className="font-[family-name:--font-display] text-3xl font-extrabold text-[#0A1628] tracking-tight mb-6">Get in Touch.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <a href="mailto:hello@indorepickleball.com"
              className="bg-white border border-[#E5E7EB] hover:border-[#C8F135] rounded-xl p-5 flex flex-col gap-3 group transition-all">
              <div className="w-9 h-9 bg-[#EAF3DE] rounded-lg flex items-center justify-center">
                <Mail size={16} className="text-[#639922]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-[#9CA3AF] mb-0.5">Email</p>
                <p className="text-sm font-semibold text-[#0A1628] group-hover:text-[#639922] transition-colors">hello@indorepickleball.com</p>
              </div>
            </a>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex flex-col gap-3">
              <div className="w-9 h-9 bg-[#E1F5EE] rounded-lg flex items-center justify-center">
                <MapPin size={16} className="text-[#0F6E56]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-[#9CA3AF] mb-0.5">Location</p>
                <p className="text-sm font-semibold text-[#0A1628]">Indore, Madhya Pradesh</p>
              </div>
            </div>

            <a href="https://instagram.com/indorepickleball" target="_blank" rel="noopener noreferrer"
              className="bg-white border border-[#E5E7EB] hover:border-[#C8F135] rounded-xl p-5 flex flex-col gap-3 group transition-all">
              <div className="w-9 h-9 bg-[#FAEEDA] rounded-lg flex items-center justify-center">
                <Link2 size={16} className="text-[#BA7517]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-[#9CA3AF] mb-0.5">Instagram</p>
                <p className="text-sm font-semibold text-[#0A1628] group-hover:text-[#639922] transition-colors">@indorepickleball</p>
              </div>
            </a>
          </div>

          <div className="bg-[#0A1628] rounded-xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <h3 className="font-[family-name:--font-display] text-2xl font-extrabold text-white tracking-tight leading-snug mb-1">
                Own a court in Indore?<br /><span className="text-[#C8F135]">Get listed for free.</span>
              </h3>
              <p className="text-white/50 text-sm">Reach thousands of Indore players instantly.</p>
            </div>
            <a href="tel:+919993905565"
              className="shrink-0 bg-[#C8F135] text-[#0A1628] font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#d4f545] transition-colors text-center">
              📞 Call / WhatsApp<br />
              <span className="font-extrabold tracking-wide">+91-9993905565</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
