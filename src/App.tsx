import React, { useState } from 'react';

/* ─── Header ─── */
const Header: React.FC = () => (
  <header className="sticky top-0 z-50 w-full bg-surface-base/80 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-frost-400 rounded-sm flex items-center justify-center">
          <svg className="w-5 h-5 text-surface-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <div>
          <h1 className="text-white font-bold text-lg tracking-tight leading-none">Apex Climate</h1>
          <span className="text-frost-300/60 text-[11px] font-mono uppercase tracking-widest">Precision HVAC</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium text-stone-400">
        <a href="#services" className="px-4 py-3 hover:text-white transition-colors">Services</a>
        <a href="#maintenance" className="px-4 py-3 hover:text-white transition-colors">Maintenance</a>
        <a href="#contact" className="px-4 py-3 hover:text-white transition-colors">Contact</a>
      </nav>

      <a href="tel:1-800-555-0199" className="flex items-center gap-2 bg-white hover:bg-stone-100 text-surface-base px-5 min-h-[48px] text-[13px] font-bold uppercase tracking-wider transition-all active:scale-[0.97] rounded-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-frost-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-frost-500"></span>
        </span>
        24/7 Emergency
      </a>
    </div>
  </header>
);

/* ─── Hero ─── */
const Hero: React.FC = () => (
  <section className="relative pt-28 pb-36 px-4 overflow-hidden">
    {/* Ambient background */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-frost-600/10 via-surface-base to-surface-base"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-frost-400/5 blur-[120px]"></div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-frost-400/10 border border-frost-400/20 text-frost-300 px-4 py-2 rounded-sm text-[12px] font-mono uppercase tracking-widest mb-8">
          <div className="w-1.5 h-1.5 bg-frost-400 rounded-full animate-pulse"></div>
          Climate Architecture Experts
        </div>

        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-white mb-6 leading-[1.05] tracking-tight">
          Precision Heating<br />& Cooling Systems.
        </h2>

        <p className="text-[17px] text-stone-400 mb-10 max-w-lg leading-relaxed">
          We engineer, install, and maintain residential and commercial climate infrastructure across Ontario. Rapid deployment when you need it most.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a href="#contact" className="text-center bg-white text-surface-base px-8 min-h-[52px] flex items-center justify-center text-[14px] font-bold uppercase tracking-widest hover:bg-stone-100 transition-all active:scale-[0.98] rounded-sm">
            Request Climate Audit
          </a>
          <a href="tel:1-800-555-0199" className="text-center border border-white/10 hover:border-white/30 text-white px-8 min-h-[52px] flex items-center justify-center text-[14px] font-bold uppercase tracking-widest transition-all rounded-sm">
            1-800-555-0199
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Services ─── */
const services = [
  {
    title: 'Furnace Systems',
    desc: 'High-efficiency heating deployment and emergency repair. Sub-2-hour response for residential failures.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
    ),
  },
  {
    title: 'Cooling Infrastructure',
    desc: 'Precision-sized AC installation with airflow optimization. 90%+ efficiency ratings guaranteed.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
  },
  {
    title: 'Commercial Maintenance',
    desc: 'Scheduled climate system diagnostics and preventive servicing for commercial-grade HVAC infrastructure.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
];

const Services: React.FC = () => (
  <section id="services" className="py-28 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <span className="text-[11px] font-mono text-frost-400/70 uppercase tracking-[0.2em] mb-4 block">Core Capabilities</span>
        <h3 className="text-[32px] font-bold text-white tracking-tight">Climate Engineering Services</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="group bg-surface-card border border-white/5 p-8 rounded-sm hover:border-frost-400/20 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-frost-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-frost-400 mb-6 w-12 h-12 flex items-center justify-center bg-frost-400/10 rounded-sm border border-frost-400/10">
              {s.icon}
            </div>
            <h4 className="text-white font-semibold text-lg mb-3 tracking-tight">{s.title}</h4>
            <p className="text-stone-500 text-[14px] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Stats ─── */
const Stats: React.FC = () => (
  <section className="py-20 px-4 border-y border-white/5">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { value: '2,400+', label: 'Systems Deployed' },
        { value: '<2hr', label: 'Emergency Response' },
        { value: '98%', label: 'Client Retention' },
        { value: '15+', label: 'Years Operating' },
      ].map((stat, i) => (
        <div key={i}>
          <div className="text-[28px] font-bold text-white tracking-tight mb-1">{stat.value}</div>
          <div className="text-[12px] font-mono text-stone-500 uppercase tracking-widest">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

/* ─── Contact Form ─── */
const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-28 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-frost-400/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-xl mx-auto relative z-10">
        <div className="mb-12">
          <span className="text-[11px] font-mono text-frost-400/70 uppercase tracking-[0.2em] mb-4 block">Get Started</span>
          <h3 className="text-[32px] font-bold text-white tracking-tight mb-4">Request a Climate Audit</h3>
          <p className="text-stone-500 text-[15px]">Our certified technicians will assess your system and provide a detailed efficiency report.</p>
        </div>

        {submitted ? (
          <div className="bg-surface-card border border-frost-400/20 p-12 text-center rounded-sm glow-blue">
            <div className="text-frost-400 mb-4 w-12 h-12 mx-auto flex items-center justify-center rounded-full border border-frost-400/30 bg-frost-400/10">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h4 className="text-white font-semibold text-xl mb-2">Audit Request Received.</h4>
            <p className="text-stone-500 text-[14px]">Our dispatch team will contact you within 2 hours.</p>
          </div>
        ) : (
          <form className="bg-surface-card border border-white/5 p-8 md:p-10 rounded-sm space-y-6 relative" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-frost-400/20 to-transparent"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-mono text-stone-500 uppercase tracking-widest">Full Name</label>
                <input type="text" required className="bg-surface-base border border-white/10 p-4 min-h-[48px] text-white text-[15px] focus:border-frost-400/40 outline-none transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-mono text-stone-500 uppercase tracking-widest">Phone</label>
                <input type="tel" required className="bg-surface-base border border-white/10 p-4 min-h-[48px] text-white text-[15px] focus:border-frost-400/40 outline-none transition-colors rounded-sm" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-mono text-stone-500 uppercase tracking-widest">Service Address</label>
              <input type="text" placeholder="e.g. 100 Main St, Ontario" className="bg-surface-base border border-white/10 p-4 min-h-[48px] text-white text-[15px] placeholder:text-stone-600 focus:border-frost-400/40 outline-none transition-colors rounded-sm" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-mono text-stone-500 uppercase tracking-widest">Service Details</label>
              <textarea rows={4} required className="bg-surface-base border border-white/10 p-4 min-h-[48px] text-white text-[15px] focus:border-frost-400/40 outline-none transition-colors resize-none rounded-sm"></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-surface-base min-h-[52px] text-[14px] font-bold uppercase tracking-widest hover:bg-stone-100 transition-all active:scale-[0.98] mt-2 rounded-sm">
              Request Service
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

/* ─── Footer ─── */
const Footer: React.FC = () => (
  <footer className="py-12 px-4 border-t border-white/5">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Apex Climate</h5>
        <p className="text-stone-600 text-[12px] font-mono">LIC# 8492021 · Bonded & Insured</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-surface-card border border-white/5 px-4 py-2 rounded-sm">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest">Performance: Optimized</span>
        </div>
      </div>

      <div className="text-[11px] font-mono text-stone-600 tracking-wide">
        © {new Date().getFullYear()} Apex Climate. All rights reserved.
      </div>
    </div>
  </footer>
);

/* ─── App ─── */
const App: React.FC = () => (
  <div className="min-h-screen bg-surface-base flex flex-col">
    <Header />
    <main className="flex-1">
      <Hero />
      <Services />
      <Stats />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default App;
