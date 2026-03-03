import React, { useEffect, useState } from 'react';

/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
   HVAC Ã¢â‚¬â€ "The Clinical/Service Structure"
   Layout: Tech-forward, rigid symmetrical grids, split-screen hero
   Unique: Sticky dispatch banner, Maintenance Schedule Matrix
   Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Sticky Emergency Dispatch Banner Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
const DispatchBanner: React.FC = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-axiom-accent border-t border-axiom-border">
    <div className="axiom-shell-inner px-6 md:px-10 xl:px-20 h-14 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <span className="text-white text-[13px] font-bold uppercase tracking-wider">24/7 Emergency Dispatch Active</span>
      </div>
      <a href="tel:+15195550199" className="magnetic-primary bg-axiom-text-main text-axiom-base px-6 min-h-[48px] flex items-center text-[12px] font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm">
        Call Now: (519) 555-0199
      </a>
    </div>
  </div>
);

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Header Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
const Header: React.FC = () => (
  <header className="fixed top-4 left-0 right-0 z-40 px-6 md:px-10 xl:px-20">
    <div className="axiom-glass axiom-shell-inner border-b border-axiom-border h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 border border-cyan-400/40 rounded-none flex items-center justify-center bg-cyan-400/10">
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        </div>
        <div>
          <h1 className="text-white font-semibold text-[15px] tracking-tight leading-none">Apex Climate</h1>
          <span className="text-cyan-400/50 text-[10px] font-mono uppercase tracking-[0.25em]">Systems Engineering</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center text-[12px] font-mono text-stone-500 uppercase tracking-widest">
        <a href="#diagnostics" className="px-5 py-4 hover:text-cyan-400 transition-colors">Diagnostics</a>
        <a href="#systems" className="px-5 py-4 hover:text-cyan-400 transition-colors">Systems</a>
        <a href="#maintenance" className="px-5 py-4 hover:text-cyan-400 transition-colors">Maintenance</a>
        <a href="#deploy" className="px-5 py-4 hover:text-cyan-400 transition-colors">Triage</a>
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 border border-white/5 px-3 py-1.5 rounded-none">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Online</span>
        </div>
      </div>
    </div>
  </header>
);

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Split-Screen Hero Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
const Hero: React.FC = () => (
  <section className="min-h-[85vh] flex items-center relative overflow-hidden axiom-grain">
    <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d0c] via-[#0e0d0c] to-cyan-950/20"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,10,11,0.2)_0%,rgba(9,10,11,0.78)_80%,rgba(9,10,11,0.92)_100%)]"></div>

    <div className="axiom-shell-inner w-full relative z-10 axiom-shell-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-cyan-400/40"></div>
            <span className="text-[11px] font-mono text-cyan-400/70 uppercase tracking-[0.3em]">Climate Infrastructure</span>
          </div>

          <h2 className="hero-headline hero-fade-in font-bold text-white mb-6">
            Precision Climate<br />
            <span className="text-cyan-400">Systems Engineering.</span>
          </h2>

          <p className="hero-subheading hero-fade-in text-stone-300 mb-6 max-w-md">
            We deploy, calibrate, and maintain commercial-grade HVAC infrastructure with sub-2-hour emergency response across Ontario.
          </p>

          {/* Grit Scenario */}
          <div className="bg-red-600/10 border border-red-500/20 rounded-sm p-4 mb-8 max-w-md">
            <p className="text-[14px] text-red-300/90 leading-relaxed font-medium">
              When it's 35Ã‚Â°C and your AC dies at 2&nbsp;AM, you don't need a contact form. You need a technician dispatched in under two hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#deploy" className="magnetic-primary bg-axiom-accent text-axiom-text-main px-8 min-h-[52px] flex items-center justify-center text-[13px] font-bold uppercase tracking-widest hover:bg-[#f05f32] transition-colors">
              Request Emergency Triage
            </a>
            <a href="#numbers" className="text-axiom-text-main/80 text-[14px] inline-flex items-center gap-1 hover:text-white transition-colors">
              See the numbers <span aria-hidden>{'->'}</span>
            </a>
            <a href="tel:+15195550199" className="border border-red-500/30 text-red-300 px-8 min-h-[52px] flex items-center justify-center text-[13px] font-bold uppercase tracking-widest hover:border-red-400/50 transition-colors">
              Call: (519) 555-0199
            </a>
          </div>
        </div>

        {/* Right: Technical Schematic */}
        <div className="hidden lg:block">
          <div className="axiom-bento p-8 relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-mono text-cyan-400/60 uppercase tracking-widest">Live System</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Supply Temp', value: '72Ã‚Â°F', status: 'optimal' },
                { label: 'Return Temp', value: '68Ã‚Â°F', status: 'optimal' },
                { label: 'Airflow CFM', value: '1,200', status: 'optimal' },
                { label: 'Humidity', value: '45%', status: 'optimal' },
              ].map((m, i) => (
                <div key={i} className="axiom-bento p-4">
                  <div className="text-[9px] font-mono text-stone-600 uppercase tracking-widest mb-2">{m.label}</div>
                  <div className="text-[24px] font-bold text-white tracking-tight leading-none">{m.value}</div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                    <span className="text-[9px] font-mono text-emerald-400/70 uppercase">{m.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated efficiency bar */}
            <div className="axiom-bento p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] font-mono text-stone-600 uppercase tracking-widest">System Efficiency</span>
                <span className="text-[13px] font-mono text-cyan-400 font-bold">96.4%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" style={{ width: '96.4%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ System Diagnostics Grid Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
const DiagnosticsGrid: React.FC = () => (
  <section id="diagnostics" className="axiom-shell-section axiom-grain border-t border-axiom-border">
    <div className="axiom-shell-inner">
      <div className="grid grid-cols-12 gap-6">
        {/* Label column */}
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-cyan-400/40"></div>
              <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-[0.25em]">01</span>
            </div>
            <h3 className="text-[28px] font-bold text-white tracking-tight leading-tight mb-3">Core<br />Systems</h3>
            <p className="text-stone-500 text-[13px] leading-relaxed">Comprehensive climate solutions engineered for peak performance.</p>
          </div>
        </div>

        {/* Service cards Ã¢â‚¬â€ rigid 3-column grid */}
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-[1px] bg-white/5">
          {[
            { id: 'HX-01', title: 'Furnace Systems', desc: 'High-efficiency forced-air heating deployment. Variable-speed blower calibration and combustion analysis.', metric: '98% AFUE' },
            { id: 'CL-02', title: 'Cooling Infrastructure', desc: 'Precision-sized AC systems with zoned airflow mapping. SEER 21+ rated equipment standard.', metric: 'SEER 21+' },
            { id: 'VN-03', title: 'Ventilation', desc: 'ERV/HRV balanced ventilation. Indoor air quality monitoring with particulate filtration.', metric: 'MERV-16' },
            { id: 'HP-04', title: 'Heat Pumps', desc: 'Cold-climate heat pump deployment rated to -30Ã‚Â°C. Ground-source and air-source configurations.', metric: 'COP 4.2' },
            { id: 'CT-05', title: 'Controls & IoT', desc: 'Smart thermostat integration with building automation systems. Remote diagnostics capability.', metric: '24/7 Link' },
            { id: 'DT-06', title: 'Duct Engineering', desc: 'Manual J/D load calculations. Static pressure testing and leak sealing to <4% loss.', metric: '<4% Loss' },
          ].map((s, i) => (
            <div key={i} className="axiom-bento p-6 group hover:bg-[#161514] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[9px] font-mono text-stone-600 uppercase tracking-widest">{s.id}</span>
                <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">{s.metric}</span>
              </div>
              <h4 className="text-white font-semibold text-[15px] mb-2 tracking-tight">{s.title}</h4>
              <p className="text-stone-500 text-[12px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Maintenance Schedule Matrix (UNIQUE COMPONENT) Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
const ROITerminal: React.FC = () => {
  const [lostCalls, setLostCalls] = useState(2);
  const [displayValue, setDisplayValue] = useState(120000);
  const annualLeak = lostCalls * 5000 * 12;

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
        <div className="axiom-glass terminal-grid p-8 md:p-10">
          <p className="font-axiomMono text-axiom-text-mute text-[11px] uppercase tracking-[0.2em] mb-4">ROI TERMINAL</p>
          <h3 className="hero-headline text-[40px] mb-3">The $120k Dashboard</h3>
          <div className="axiom-bento is-visible p-6 md:p-8">
            <div className="flex justify-between items-center mb-3">
              <label htmlFor="hvac-roi" className="font-axiomMono text-axiom-text-mute">Lost Dispatch Calls / Month</label>
              <span className="font-axiomMono text-[28px]">{lostCalls}</span>
            </div>
            <input id="hvac-roi" type="range" min="1" max="8" value={lostCalls} onChange={(e) => setLostCalls(Number(e.target.value))} className="w-full accent-[#E4572E]" />
            <p className="font-axiomMono text-[30px] mt-6 text-axiom-accent">${displayValue.toLocaleString()}</p>
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
                <div className="h-[1px] w-8 bg-cyan-400/40"></div>
                <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-[0.25em]">02</span>
              </div>
              <h3 className="text-[28px] font-bold text-white tracking-tight leading-tight mb-3">Maintenance<br />Matrix</h3>
              <p className="text-stone-500 text-[13px] leading-relaxed">Year-round preventive maintenance protocol. Each checkmark is a scheduled service touchpoint.</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="axiom-glass overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-5 bg-[#111110]">
                <div className="p-4 border-r border-white/5">
                  <span className="text-[10px] font-mono text-stone-600 uppercase tracking-widest">Service Item</span>
                </div>
                {seasons.map(s => (
                  <div key={s} className="p-4 text-center border-r border-white/5 last:border-r-0">
                    <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">{s}</span>
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {tasks.map((task, i) => (
                <div key={i} className="grid grid-cols-5 border-t border-white/5 hover:bg-[#111110] transition-colors">
                  <div className="p-4 border-r border-white/5 flex items-center">
                    <span className="text-[13px] text-stone-300">{task.name}</span>
                  </div>
                  {[task.spring, task.summer, task.fall, task.winter].map((active, j) => (
                    <div key={j} className="p-4 flex items-center justify-center border-r border-white/5 last:border-r-0">
                      {active ? (
                        <div className="w-3 h-3 bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400"></div>
                        </div>
                      ) : (
                        <div className="w-3 h-3 border border-white/10"></div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Plan CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] mt-[1px] bg-white/5">
              {[
                { name: 'Foundation', price: '$7,500+', includes: 'High-ticket launch stack' },
                { name: "Contractor's Choice", price: '$7,500+', includes: 'Most selected for growth teams', featured: true },
                { name: 'Authority', price: '$7,500+', includes: 'Multi-location expansion stack' },
              ].map((plan, i) => (
                <div key={i} className={`axiom-bento p-6 ${plan.featured ? 'border-t-2 border-t-axiom-accent' : ''}`}>
                  <div className="text-[10px] font-mono text-axiom-text-mute uppercase tracking-widest mb-1">{plan.name}</div>
                  <div className="text-[32px] font-bold text-white tracking-tight mb-1">{plan.price}</div>
                  <div className="text-[11px] text-axiom-text-mute">{plan.includes}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Emergency Triage Form (Multi-Step) Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
const TriageForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [triage, setTriage] = useState({ status: '', systemType: '', systemAge: '', urgency: '', name: '', phone: '', address: '' });

  const statusOptions = ['Complete Failure', 'Making Noise', 'Leaking', 'Poor Airflow'];
  const typeOptions = ['AC / Central Air', 'Furnace', 'Heat Pump', 'Boiler / Radiant'];
  const ageOptions = ['Under 5 years', '5Ã¢â‚¬â€œ10 years', 'Over 10 years', 'Unknown'];

  const OptionButton = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
    <button type="button" onClick={onClick} className={`w-full text-left p-4 border transition-colors min-h-[52px] text-[14px] font-medium ${selected ? 'border-cyan-400/40 bg-cyan-400/10 text-white' : 'border-white/5 bg-[#0e0d0c] text-stone-400 hover:border-white/15'
      }`}>{label}</button>
  );

  return (
    <section id="deploy" className="axiom-shell-section axiom-grain border-t border-axiom-border">
      <div className="axiom-shell-inner">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-cyan-400/40"></div>
                <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-[0.25em]">03</span>
              </div>
              <h3 className="text-[28px] font-bold text-white tracking-tight leading-tight mb-3">Emergency<br />Triage</h3>
              <p className="text-stone-500 text-[13px] leading-relaxed">Answer 4 quick questions so we can dispatch the right technician with the right parts.</p>

              {/* Step indicator */}
              <div className="flex items-center gap-2 mt-6">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${step >= s || submitted ? 'bg-cyan-400' : 'bg-white/10'}`}></div>
                ))}
              </div>
              <p className="text-[10px] font-mono text-stone-600 uppercase tracking-widest mt-2">{submitted ? 'Complete' : `Step ${step} of 4`}</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            {submitted ? (
              <div className="axiom-glass border-cyan-400/20 bg-cyan-400/5 p-16 text-center">
                <div className="w-12 h-12 border border-cyan-400/30 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-white font-semibold text-xl mb-2">Triage Complete Ã¢â‚¬â€ Dispatch Queued.</h4>
                <p className="text-stone-500 text-[14px]">A technician matched to your system type will confirm within 2 hours.</p>
              </div>
            ) : (
              <div className="axiom-glass">
                {/* Step 1: System Status */}
                {step === 1 && (
                  <div className="p-6 flex flex-col gap-4">
                    <p className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest mb-2">What's happening with your system?</p>
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
                      <p className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">System Type</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {typeOptions.map((opt) => (
                          <OptionButton key={opt} label={opt} selected={triage.systemType === opt} onClick={() => setTriage({ ...triage, systemType: opt })} />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">System Age</p>
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
                    <p className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest mb-2">How urgent is this?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button type="button" onClick={() => { setTriage({ ...triage, urgency: 'emergency' }); setTimeout(() => setStep(4), 200); }}
                        className={`w-full text-left p-5 border transition-colors min-h-[52px] ${triage.urgency === 'emergency' ? 'border-red-500/40 bg-red-500/10 text-white' : 'border-white/5 bg-[#0e0d0c] text-stone-400 hover:border-red-500/20'
                          }`}>
                        <span className="block text-[14px] font-semibold">Ã°Å¸Å¡Â¨ Emergency Dispatch Required</span>
                        <span className="block text-[12px] text-stone-500 mt-1">Technician dispatched within 2 hours</span>
                      </button>
                      <button type="button" onClick={() => { setTriage({ ...triage, urgency: 'maintenance' }); setTimeout(() => setStep(4), 200); }}
                        className={`w-full text-left p-5 border transition-colors min-h-[52px] ${triage.urgency === 'maintenance' ? 'border-cyan-400/40 bg-cyan-400/10 text-white' : 'border-white/5 bg-[#0e0d0c] text-stone-400 hover:border-white/15'
                          }`}>
                        <span className="block text-[14px] font-semibold">Ã°Å¸â€Â§ Schedule Maintenance</span>
                        <span className="block text-[12px] text-stone-500 mt-1">Next available slot, usually within 48 hours</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Details */}
                {step === 4 && (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div className="p-6 flex flex-col gap-4">
                      <p className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest mb-2">Your Contact Details</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-white/5">
                        <div className="p-4 bg-[#111110]">
                          <label className="text-[10px] font-mono text-stone-600 uppercase tracking-widest block mb-2">Full Name</label>
                          <input type="text" required value={triage.name} onChange={(e) => setTriage({ ...triage, name: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-3 min-h-[48px] text-white text-[15px] focus:border-cyan-400/40 outline-none transition-colors" />
                        </div>
                        <div className="p-4 bg-[#111110]">
                          <label className="text-[10px] font-mono text-stone-600 uppercase tracking-widest block mb-2">Phone</label>
                          <input type="tel" required value={triage.phone} onChange={(e) => setTriage({ ...triage, phone: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-3 min-h-[48px] text-white text-[15px] focus:border-cyan-400/40 outline-none transition-colors" />
                        </div>
                      </div>
                      <div className="p-4 bg-[#0e0d0c] border border-white/5">
                        <label className="text-[10px] font-mono text-stone-600 uppercase tracking-widest block mb-2">Service Address</label>
                        <input type="text" required value={triage.address} onChange={(e) => setTriage({ ...triage, address: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-3 min-h-[48px] text-white text-[15px] focus:border-cyan-400/40 outline-none transition-colors" />
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
                    <button type="button" onClick={() => setStep(step - 1)} className="text-[11px] font-mono text-stone-600 uppercase tracking-widest hover:text-stone-400 transition-colors min-h-[48px]">
                      Ã¢â€ Â Back
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

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Footer Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
const Footer: React.FC = () => (
  <footer className="axiom-shell-section border-t border-axiom-border mb-14">
    <div className="axiom-shell-inner flex flex-col gap-6">
      {/* Trust Badges */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { badge: 'TSSA Certified', icon: 'Ã°Å¸â€ºÂ¡Ã¯Â¸Â' },
          { badge: 'WSIB Insured', icon: 'Ã¢Å“â€¦' },
          { badge: '24/7 Dispatch', icon: 'Ã°Å¸Å¡Â¨' },
        ].map((item) => (
          <div key={item.badge} className="axiom-bento flex items-center gap-2 px-4 py-2">
            <span className="text-[12px]">{item.icon}</span>
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">{item.badge}</span>
          </div>
        ))}
      </div>

      {/* Info row */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="axiom-bento flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[10px] font-mono text-stone-600 uppercase tracking-widest">
          <span>Apex Climate Systems</span>
          <span>LIC# 8492021</span>
          <a href="tel:+15195550199" className="hover:text-stone-400 transition-colors min-h-[48px] inline-flex items-center">(519) 555-0199</a>
          <span>Ã‚Â© {new Date().getFullYear()}</span>
        </div>
        <div className="axiom-bento flex items-center gap-6 text-[10px] font-mono text-axiom-text-mute uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors min-h-[48px] inline-flex items-center">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors min-h-[48px] inline-flex items-center">Terms of Service</a>
        </div>
        <div className="axiom-bento flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ App Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
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
