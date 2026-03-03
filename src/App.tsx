import React, { useEffect, useRef, useState } from 'react';

/*
 HVAC  "The Clinical/Service Structure"
   Layout: Tech-forward, rigid symmetrical grids, split-screen hero
   Unique: Sticky dispatch banner, Maintenance Schedule Matrix
 */

/*  Sticky Emergency Dispatch Banner  */
const DispatchBanner: React.FC = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-axiom-accent border-t border-axiom-border">
    <div className="axiom-shell-inner px-6 md:px-10 xl:px-20 h-14 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <span className="text-axiom-text-main text-[13px] font-bold uppercase tracking-wider">24/7 Emergency Dispatch Active</span>
      </div>
      <a href="tel:+15195550199" className="magnetic-primary bg-axiom-text-main text-axiom-base px-6 min-h-[48px] flex items-center text-[12px] font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm">
        Call Now: (519) 555-0199
      </a>
    </div>
  </div>
);

/*  Header  */
const Header: React.FC = () => (
  <header className="fixed top-4 left-0 right-0 z-40 px-6 md:px-10 xl:px-20">
    <div className="axiom-glass axiom-shell-inner border-b border-axiom-border h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 border border-axiom-border rounded-none flex items-center justify-center bg-axiom-surface">
          <svg className="w-4 h-4 text-axiom-text-mute" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        </div>
        <div>
          <h1 className="text-axiom-text-main font-semibold text-[15px] tracking-tight leading-none">Apex Climate</h1>
          <span className="text-axiom-text-mute text-[10px] font-axiomMono uppercase tracking-[0.25em]">Systems Engineering</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center text-[12px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">
        <a href="#diagnostics" className="px-5 py-4 hover:text-axiom-text-mute transition-colors">Diagnostics</a>
        <a href="#systems" className="px-5 py-4 hover:text-axiom-text-mute transition-colors">Systems</a>
        <a href="#maintenance" className="px-5 py-4 hover:text-axiom-text-mute transition-colors">Maintenance</a>
        <a href="#deploy" className="px-5 py-4 hover:text-axiom-text-mute transition-colors">Triage</a>
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 border border-white/5 px-3 py-1.5 rounded-none">
          <div className="w-1.5 h-1.5 bg-axiom-surface rounded-full animate-pulse"></div>
          <span className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">Online</span>
        </div>
      </div>
    </div>
  </header>
);

/*  Split-Screen Hero  */
const Hero: React.FC = () => {
  const heroBgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (heroBgRef.current) {
          const y = Math.min(window.scrollY * 0.11, 84);
          heroBgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="min-h-[86vh] flex items-center relative overflow-hidden axiom-grain">
      <div
        ref={heroBgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: "url('/hero-industrial.png')", transform: 'translate3d(0,0,0) scale(1.08)' }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,10,11,0.3)_0%,rgba(9,10,11,0.74)_58%,rgba(9,10,11,0.95)_100%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/56 to-black/38"></div>

      <div className="axiom-shell-inner w-full relative z-10 axiom-shell-section">
        <div className="max-w-4xl">
          <p className="font-axiomMono text-axiom-text-mute text-[11px] uppercase tracking-[0.32em] mb-6">STATUS: DISPATCH INFRASTRUCTURE ACTIVE</p>

          <h2 className="hero-headline hero-fade-in text-axiom-text-main mb-6">
            Engineer premium HVAC demand into booked service calls.
          </h2>

          <p className="hero-subheading hero-fade-in text-axiom-text-main/90 mb-10 max-w-2xl">
            Deploy a conversion-first digital system that keeps your dispatch pipeline full during heat waves, cold snaps, and emergency surge traffic.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#deploy" className="magnetic-primary hero-primary-cta bg-axiom-accent text-axiom-text-main px-8 min-h-[52px] flex items-center justify-center text-[13px] font-bold uppercase tracking-widest transition-colors">
              Request Emergency Triage
            </a>
            <a href="#numbers" className="text-axiom-text-main/85 text-[15px] inline-flex items-center gap-1 hover:text-axiom-text-main transition-colors">
              See the numbers <span aria-hidden>{'->'}</span>
            </a>
            <a href="tel:+15195550199" className="border border-white/30 text-axiom-text-main px-8 min-h-[52px] flex items-center justify-center text-[13px] font-bold uppercase tracking-widest hover:border-axiom-accent/65 transition-colors">
              Call: (519) 555-0199
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border border-white/15 bg-axiom-base backdrop-blur-sm">
            {[
              { label: 'Response Target', value: '<2 Hours' },
              { label: 'Dispatch Coverage', value: '24/7' },
              { label: 'Uptime', value: '99.99%' },
              { label: 'Lead Quality', value: 'Pre-Qualified' },
            ].map((item) => (
              <div key={item.label} className="p-4 border-r border-b md:border-b-0 border-white/15 last:border-r-0">
                <div className="font-axiomMono text-[22px] text-axiom-text-main leading-none">{item.value}</div>
                <div className="font-axiomMono text-[10px] text-axiom-text-mute uppercase tracking-[0.2em] mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/*  System Diagnostics Grid  */
const DiagnosticsGrid: React.FC = () => (
  <section id="diagnostics" className="axiom-shell-section axiom-grain border-t border-axiom-border">
    <div className="axiom-shell-inner">
      <div className="grid grid-cols-12 gap-6">
        {/* Label column */}
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-axiom-surface"></div>
                <span className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-[0.25em]">01</span>
              </div>
              <h3 className="text-[28px] font-bold text-axiom-text-main tracking-tight leading-tight mb-3">Core<br />Systems</h3>
              <h4 className="axiom-command-heading mb-3">ELIMINATING ROI FRICTION</h4>
              <div className="axiom-reading-measure">
                <div className="axiom-reading-prose">
                  <p>Comprehensive climate solutions engineered for peak performance.</p>
                  <p>Dispatch reliability and pre-qualified intake prevent emergency demand from turning into lost revenue windows.</p>
                </div>
              </div>
              <div className="axiom-mono-callout mt-4">AXIOM // Every minute of downtime reroutes urgent calls to faster operators.</div>
              <div className="axiom-chapter-divider mt-5"></div>
            </div>
          </div>

 {/* Service cards  rigid 3-column grid */}
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-[1px] bg-white/5">
          {[
            { id: 'HX-01', title: 'Furnace Systems', desc: 'High-efficiency forced-air heating deployment. Variable-speed blower calibration and combustion analysis.', metric: '98% AFUE' },
            { id: 'CL-02', title: 'Cooling Infrastructure', desc: 'Precision-sized AC systems with zoned airflow mapping. SEER 21+ rated equipment standard.', metric: 'SEER 21+' },
            { id: 'VN-03', title: 'Ventilation', desc: 'ERV/HRV balanced ventilation. Indoor air quality monitoring with particulate filtration.', metric: 'MERV-16' },
 { id: 'HP-04', title: 'Heat Pumps', desc: 'Cold-climate heat pump deployment rated to -30°C. Ground-source and air-source configurations.', metric: 'COP 4.2' },
            { id: 'CT-05', title: 'Controls & IoT', desc: 'Smart thermostat integration with building automation systems. Remote diagnostics capability.', metric: '24/7 Link' },
            { id: 'DT-06', title: 'Duct Engineering', desc: 'Manual J/D load calculations. Static pressure testing and leak sealing to <4% loss.', metric: '<4% Loss' },
          ].map((s, i) => (
            <div key={i} className="axiom-bento p-6 group hover:bg-[#161514] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[9px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">{s.id}</span>
                <span className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">{s.metric}</span>
              </div>
              <h4 className="text-axiom-text-main font-semibold text-[15px] mb-2 tracking-tight">{s.title}</h4>
              <p className="text-axiom-text-mute text-[12px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/*  Maintenance Schedule Matrix (UNIQUE COMPONENT)  */
const ROITerminal: React.FC = () => {
  const [lostCalls, setLostCalls] = useState(2);
  const [displayValue, setDisplayValue] = useState(120000);
  const annualLeak = lostCalls * 5000 * 12;
  const monthlyLeak = Math.round(displayValue / 12);
  const infrastructureInvestment = 7500;
  const paybackMonths = monthlyLeak > 0 ? infrastructureInvestment / monthlyLeak : 0;
  const valueTone = displayValue >= 0 ? 'text-axiom-accent' : 'text-[#d27474]';

  useEffect(() => {
    const start = displayValue;
    const delta = annualLeak - start;
    const startTime = performance.now();
    let raf = 0;
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / 450, 1);
      setDisplayValue(Math.round(start + delta * progress));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [annualLeak]);

  return (
    <section id="numbers" className="axiom-shell-section axiom-grain border-t border-axiom-border">
      <div className="axiom-shell-inner max-w-5xl">
        <div className="axiom-bento is-visible relative overflow-hidden p-0 bg-axiom-surface border border-axiom-border">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="h-px w-full bg-axiom-accent" />
          <div className="relative axiom-glass border-0 rounded-none p-6 md:p-8">
            <p className="font-axiomMono text-axiom-text-mute text-[11px] uppercase tracking-[0.2em] mb-4">ROI TERMINAL</p>
            <h3 className="hero-headline text-[32px] md:text-[40px] mb-6">The $120k Dashboard</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="hvac-roi" className="font-axiomMono text-[12px] uppercase tracking-[0.12em] text-axiom-text-mute">
                      Lost Dispatch Calls / Month
                    </label>
                    <button
                      type="button"
                      title="Estimated high-intent repair calls lost due to speed and trust friction."
                      className="font-axiomMono text-[11px] text-axiom-text-mute border border-axiom-border rounded-full w-5 h-5"
                    >
                      ?
                    </button>
                  </div>
                  <div className="flex items-end justify-between mb-2">
                    <span className="font-axiomMono text-[12px] text-axiom-text-mute">Current estimate</span>
                    <span className="font-axiomMono text-[26px] leading-none text-axiom-accent tabular-nums">{lostCalls}</span>
                  </div>
                  <input
                    id="hvac-roi"
                    type="range"
                    min="1"
                    max="8"
                    value={lostCalls}
                    onChange={(e) => setLostCalls(Number(e.target.value))}
                    className="w-full h-2 rounded-full cursor-pointer accent-[#E4572E]"
                  />
                  <div
                    aria-hidden="true"
                    className="h-[10px] rounded mt-2 border border-axiom-border/60"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(to right, rgba(228,87,46,0.45), rgba(228,87,46,0.45) 1px, transparent 1px, transparent 14.285%)',
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="space-y-2">
                    <span className="flex items-center gap-2 font-axiomMono text-[11px] uppercase tracking-[0.12em] text-axiom-text-mute">
                      Avg Ticket Value
                      <button
                        type="button"
                        title="Financial baseline used in the model."
                        className="font-axiomMono text-[10px] text-axiom-text-mute border border-axiom-border rounded-full w-4 h-4 leading-none"
                      >
                        ?
                      </button>
                    </span>
                    <input
                      type="number"
                      value={5000}
                      readOnly
                      className="w-full bg-axiom-base/60 border border-axiom-border rounded-lg px-3 py-2 font-axiomMono text-axiom-text-main focus:outline-none focus:border-axiom-accent/70"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="font-axiomMono text-[11px] uppercase tracking-[0.12em] text-axiom-text-mute">Months / Year</span>
                    <input
                      type="number"
                      value={12}
                      readOnly
                      className="w-full bg-axiom-base/60 border border-axiom-border rounded-lg px-3 py-2 font-axiomMono text-axiom-text-main focus:outline-none focus:border-axiom-accent/70"
                    />
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <div className="axiom-bento p-4">
                  <p className="font-axiomMono text-[11px] uppercase tracking-[0.12em] text-axiom-text-mute mb-2">Annual ROI Leak</p>
                  <p className={`font-axiomMono text-[30px] leading-none tabular-nums ${valueTone}`}>
                    ${displayValue.toLocaleString()}
                  </p>
                </div>
                <div className="axiom-bento p-4">
                  <p className="font-axiomMono text-[11px] uppercase tracking-[0.12em] text-axiom-text-mute mb-2">Monthly Recovery Potential</p>
                  <p className="font-axiomMono text-[24px] leading-none tabular-nums text-axiom-text-main">
                    ${monthlyLeak.toLocaleString()}
                  </p>
                </div>
                <div className="axiom-bento p-4">
                  <p className="font-axiomMono text-[11px] uppercase tracking-[0.12em] text-axiom-text-mute mb-2">Payback Period</p>
                  <p className="font-axiomMono text-[24px] leading-none tabular-nums text-axiom-text-main">
                    {paybackMonths.toFixed(1)} months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MaintenanceMatrix: React.FC = () => {
  const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
  const tasks = [
    { name: 'Filter Replacement', spring: true, summer: true, fall: true, winter: true },
    { name: 'Coil Cleaning', spring: true, summer: false, fall: true, winter: false },
    { name: 'Refrigerant Check', spring: true, summer: true, fall: false, winter: false },
    { name: 'Combustion Analysis', spring: false, summer: false, fall: true, winter: true },
    { name: 'Duct Inspection', spring: true, summer: false, fall: false, winter: true },
    { name: 'Thermostat Calibration', spring: true, summer: false, fall: true, winter: false },
    { name: 'Blower Motor Service', spring: false, summer: true, fall: false, winter: true },
    { name: 'Safety Control Test', spring: true, summer: true, fall: true, winter: true },
  ];

  return (
    <section id="maintenance" className="axiom-shell-section axiom-grain border-t border-axiom-border">
      <div className="axiom-shell-inner">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-axiom-surface"></div>
                <span className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-[0.25em]">02</span>
              </div>
              <h3 className="text-[28px] font-bold text-axiom-text-main tracking-tight leading-tight mb-3">Maintenance<br />Matrix</h3>
              <p className="text-axiom-text-mute text-[13px] leading-relaxed">Year-round preventive maintenance protocol. Each checkmark is a scheduled service touchpoint.</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="axiom-glass overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-5 bg-[#111110]">
                <div className="p-4 border-r border-white/5">
                  <span className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">Service Item</span>
                </div>
                {seasons.map(s => (
                  <div key={s} className="p-4 text-center border-r border-white/5 last:border-r-0">
                    <span className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">{s}</span>
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {tasks.map((task, i) => (
                <div key={i} className="grid grid-cols-5 border-t border-white/5 hover:bg-[#111110] transition-colors">
                  <div className="p-4 border-r border-white/5 flex items-center">
                    <span className="text-[13px] text-axiom-text-mute">{task.name}</span>
                  </div>
                  {[task.spring, task.summer, task.fall, task.winter].map((active, j) => (
                    <div key={j} className="p-4 flex items-center justify-center border-r border-white/5 last:border-r-0">
                      {active ? (
                        <div className="w-3 h-3 bg-axiom-surface border border-axiom-border flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-axiom-surface"></div>
                        </div>
                      ) : (
                        <div className="w-3 h-3 border border-white/10"></div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Pricing Offer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                {
                  name: 'Foundation',
                  price: '$7,500+',
                  summary: 'Launch-grade HVAC infrastructure engineered for conversion speed.',
                  qualifier: 'Best for single-market operators building authority.',
                  technical: '3-5 pages // edge delivery // dispatch form stack',
                  outcomes: [
                    'Clear service hierarchy for high-intent visitors',
                    'Emergency funnel designed for fast mobile actions',
                    'Instrumentation for calls, forms, and qualified leads',
                  ],
                },
                {
                  name: "Contractor's Choice",
                  price: '$12,500',
                  featured: true,
                  summary: 'Most selected by teams scaling install volume and service agreements.',
                  qualifier: 'Best for teams of 10+ targeting premium ticket mix.',
                  technical: '7-10 pages // ROI terminal // trust architecture',
                  outcomes: [
                    'Qualification-first flows that reduce low-margin calls',
                    'High-ticket offer framing across replacement services',
                    'Launch support through first campaign and dispatch cycle',
                  ],
                },
                {
                  name: 'Elite Command',
                  price: '$18,500+',
                  elite: true,
                  summary: 'Bespoke multi-location architecture for expanding HVAC groups.',
                  qualifier: 'Best for operators running multiple crews and territories.',
                  technical: 'custom stack // workflow mapping // executive reporting',
                  outcomes: [
                    'CRM-aware conversion routing for service categories',
                    'Market expansion templates with local proof blocks',
                    'Quarterly optimization and instrumentation reviews',
                  ],
                },
              ].map((plan) => (
                <article
                  key={plan.name}
                  className={`axiom-bento bg-axiom-surface border border-axiom-border p-6 sm:p-8 flex flex-col gap-5 ${plan.featured ? 'border-t-2 border-t-axiom-accent' : ''} ${plan.elite ? 'ring-1 ring-axiom-accent/50' : ''}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-axiomSans text-[24px] font-semibold tracking-tight text-axiom-text-main">{plan.name}</h3>
                    {plan.featured ? (
                      <span className="font-axiomMono text-[10px] uppercase tracking-[0.14em] text-axiom-accent border border-axiom-accent/40 px-2 py-1 rounded">
                        Contractor's Choice
                      </span>
                    ) : plan.elite ? (
                      <span className="font-axiomMono text-[10px] uppercase tracking-[0.14em] text-axiom-accent border border-axiom-accent/50 px-2 py-1 rounded">
                        Elite Package
                      </span>
                    ) : null}
                  </div>

                  <p className="font-axiomSans text-[14px] leading-relaxed text-axiom-text-main/90">{plan.summary}</p>
                  <p className="font-axiomSans text-[32px] leading-none font-bold text-axiom-text-main">{plan.price}</p>
                  <p className="font-axiomMono text-[11px] uppercase tracking-[0.14em] text-axiom-text-mute">{plan.technical}</p>

                  <ul className="space-y-3 flex-1">
                    {plan.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-axiom-text-main/90 leading-relaxed">
                        <span className="mt-[2px] text-axiom-accent">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M20 7L10 17L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="font-axiomSans text-[12px] text-axiom-text-mute">{plan.qualifier}</p>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              {[
                { label: 'Guarantee', value: 'Sub-second HVAC page tuning included.' },
                { label: 'Proof', value: 'Lead-to-dispatch visibility delivered at handoff.' },
                { label: 'Partner Fit', value: 'Limited to 4 active build partners monthly.' },
              ].map((item) => (
                <div key={item.label} className="axiom-bento bg-axiom-surface border border-axiom-border p-4">
                  <p className="font-axiomMono text-[10px] uppercase tracking-[0.14em] text-axiom-text-mute">{item.label}</p>
                  <p className="font-axiomSans text-[14px] text-axiom-text-main mt-2">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/*  Emergency Triage Form (Multi-Step)  */
const TriageForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [triage, setTriage] = useState({ status: '', systemType: '', systemAge: '', urgency: '', name: '', phone: '', address: '' });

  const statusOptions = ['Complete Failure', 'Making Noise', 'Leaking', 'Poor Airflow'];
  const typeOptions = ['AC / Central Air', 'Furnace', 'Heat Pump', 'Boiler / Radiant'];
 const ageOptions = ['Under 5 years', '5-10 years', 'Over 10 years', 'Unknown'];

  const OptionButton = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
    <button type="button" onClick={onClick} className={`w-full text-left p-4 border transition-colors min-h-[52px] text-[14px] font-medium ${selected ? 'border-axiom-border bg-axiom-surface text-axiom-text-main' : 'border-white/5 bg-[#0e0d0c] text-axiom-text-mute hover:border-white/15'
      }`}>{label}</button>
  );

  return (
    <section id="deploy" className="axiom-shell-section axiom-grain border-t border-axiom-border">
      <div className="axiom-shell-inner">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-axiom-surface"></div>
                <span className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-[0.25em]">03</span>
              </div>
              <h3 className="text-[28px] font-bold text-axiom-text-main tracking-tight leading-tight mb-3">Emergency<br />Triage</h3>
              <p className="text-axiom-text-mute text-[13px] leading-relaxed">Answer 4 quick questions so we can dispatch the right technician with the right parts.</p>

              {/* Step indicator */}
              <div className="flex items-center gap-2 mt-6">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${step >= s || submitted ? 'bg-axiom-surface' : 'bg-white/10'}`}></div>
                ))}
              </div>
              <p className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest mt-2">{submitted ? 'Complete' : `Step ${step} of 4`}</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            {submitted ? (
              <div className="axiom-glass border-axiom-border bg-axiom-surface p-16 text-center">
                <div className="w-12 h-12 border border-axiom-border mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-axiom-text-mute" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
 <h4 className="text-axiom-text-main font-semibold text-xl mb-2">Triage Complete  Dispatch Queued.</h4>
                <p className="text-axiom-text-mute text-[14px]">A technician matched to your system type will confirm within 2 hours.</p>
              </div>
            ) : (
              <div className="axiom-glass">
                {/* Step 1: System Status */}
                {step === 1 && (
                  <div className="p-6 flex flex-col gap-4">
                    <p className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest mb-2">What's happening with your system?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {statusOptions.map((opt) => (
                        <OptionButton key={opt} label={opt} selected={triage.status === opt} onClick={() => { setTriage({ ...triage, status: opt }); setTimeout(() => setStep(2), 200); }} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: System Type & Age */}
                {step === 2 && (
                  <div className="p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <p className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">System Type</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {typeOptions.map((opt) => (
                          <OptionButton key={opt} label={opt} selected={triage.systemType === opt} onClick={() => setTriage({ ...triage, systemType: opt })} />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">System Age</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {ageOptions.map((opt) => (
                          <OptionButton key={opt} label={opt} selected={triage.systemAge === opt} onClick={() => { setTriage({ ...triage, systemAge: opt }); setTimeout(() => setStep(3), 200); }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Urgency */}
                {step === 3 && (
                  <div className="p-6 flex flex-col gap-4">
                    <p className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest mb-2">How urgent is this?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button type="button" onClick={() => { setTriage({ ...triage, urgency: 'emergency' }); setTimeout(() => setStep(4), 200); }}
                        className={`w-full text-left p-5 border transition-colors min-h-[52px] ${triage.urgency === 'emergency' ? 'border-axiom-border bg-axiom-surface text-axiom-text-main' : 'border-white/5 bg-[#0e0d0c] text-axiom-text-mute hover:border-axiom-border'
                          }`}>
                        <span className="block text-[14px] font-semibold"> Emergency Dispatch Required</span>
                        <span className="block text-[12px] text-axiom-text-mute mt-1">Technician dispatched within 2 hours</span>
                      </button>
                      <button type="button" onClick={() => { setTriage({ ...triage, urgency: 'maintenance' }); setTimeout(() => setStep(4), 200); }}
                        className={`w-full text-left p-5 border transition-colors min-h-[52px] ${triage.urgency === 'maintenance' ? 'border-axiom-border bg-axiom-surface text-axiom-text-main' : 'border-white/5 bg-[#0e0d0c] text-axiom-text-mute hover:border-white/15'
                          }`}>
                        <span className="block text-[14px] font-semibold"> Schedule Maintenance</span>
                        <span className="block text-[12px] text-axiom-text-mute mt-1">Next available slot, usually within 48 hours</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Details */}
                {step === 4 && (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div className="p-6 flex flex-col gap-4">
                      <p className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest mb-2">Your Contact Details</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-white/5">
                        <div className="p-4 bg-[#111110]">
                          <label className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest block mb-2">Full Name</label>
                          <input type="text" required value={triage.name} onChange={(e) => setTriage({ ...triage, name: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-3 min-h-[48px] text-axiom-text-main text-[15px] focus:border-axiom-border outline-none transition-colors" />
                        </div>
                        <div className="p-4 bg-[#111110]">
                          <label className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest block mb-2">Phone</label>
                          <input type="tel" required value={triage.phone} onChange={(e) => setTriage({ ...triage, phone: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-3 min-h-[48px] text-axiom-text-main text-[15px] focus:border-axiom-border outline-none transition-colors" />
                        </div>
                      </div>
                      <div className="p-4 bg-[#0e0d0c] border border-white/5">
                        <label className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest block mb-2">Service Address</label>
                        <input type="text" required value={triage.address} onChange={(e) => setTriage({ ...triage, address: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-3 min-h-[48px] text-axiom-text-main text-[15px] focus:border-axiom-border outline-none transition-colors" />
                      </div>
                    </div>
                    <div className="p-6 border-t border-white/5">
                      <button type="submit" className="magnetic-primary w-full bg-axiom-accent text-axiom-text-main min-h-[52px] text-[13px] font-bold uppercase tracking-widest hover:bg-[#f05f32] transition-colors">
                        {triage.urgency === 'emergency' ? 'Dispatch Emergency Technician' : 'Schedule Service Visit'}
                      </button>
                    </div>
                  </form>
                )}

                {/* Back button (steps 2-4) */}
                {step > 1 && !submitted && (
                  <div className="px-6 pb-4">
                    <button type="button" onClick={() => setStep(step - 1)} className="text-[11px] font-axiomMono text-axiom-text-mute uppercase tracking-widest hover:text-axiom-text-mute transition-colors min-h-[48px]">
 Back
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/*  Footer  */
const Footer: React.FC = () => (
  <footer className="axiom-shell-section border-t border-axiom-border mb-14">
    <div className="axiom-shell-inner flex flex-col gap-6">
      {/* Trust Badges */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { badge: 'TSSA Certified', icon: '�' },
 { badge: 'WSIB Insured', icon: '�' },
          { badge: '24/7 Dispatch', icon: '�' },
        ].map((item) => (
          <div key={item.badge} className="axiom-bento flex items-center gap-2 px-4 py-2">
            <span className="text-[12px]">{item.icon}</span>
            <span className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">{item.badge}</span>
          </div>
        ))}
      </div>

      {/* Info row */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="axiom-bento flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">
          <span>Apex Climate Systems</span>
          <span>LIC# 8492021</span>
          <a href="tel:+15195550199" className="hover:text-axiom-text-mute transition-colors min-h-[48px] inline-flex items-center">(519) 555-0199</a>
 <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="axiom-bento flex items-center gap-6 text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">
          <a href="#" className="hover:text-axiom-text-main transition-colors min-h-[48px] inline-flex items-center">Privacy Policy</a>
          <a href="#" className="hover:text-axiom-text-main transition-colors min-h-[48px] inline-flex items-center">Terms of Service</a>
        </div>
        <div className="axiom-bento flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 bg-axiom-surface rounded-full animate-pulse"></div>
          <span className="text-[10px] font-axiomMono text-axiom-text-mute uppercase tracking-widest">All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

/*  App  */
const App: React.FC = () => {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.magnetic-primary'));
    const radius = 50;
    const maxShift = 5;
    const onMove = (event: MouseEvent) => {
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = event.clientX - cx;
        const dy = event.clientY - cy;
        const distance = Math.hypot(dx, dy);
        if (distance <= radius) {
          const power = 1 - distance / radius;
          node.style.setProperty('--mx', `${(dx / radius) * maxShift * power}px`);
          node.style.setProperty('--my', `${(dy / radius) * maxShift * power}px`);
          return;
        }
        node.style.setProperty('--mx', '0px');
        node.style.setProperty('--my', '0px');
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.axiom-bento').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-axiom-base flex flex-col font-axiomSans text-axiom-text-main">
      <Header />
      <main className="flex-1">
        <Hero />
        <DiagnosticsGrid />
        <ROITerminal />
        <MaintenanceMatrix />
        <TriageForm />
      </main>
      <Footer />
      <DispatchBanner />
    </div>
  );
};

export default App;


