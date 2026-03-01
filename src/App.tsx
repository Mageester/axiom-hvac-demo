import React, { useState } from 'react';

/* ═══════════════════════════════════════════════════════════════════
   HVAC — "The Clinical/Service Structure"
   Layout: Tech-forward, rigid symmetrical grids, split-screen hero
   Unique: Sticky dispatch banner, Maintenance Schedule Matrix
   ═══════════════════════════════════════════════════════════════════ */

/* ─── Sticky Emergency Dispatch Banner ─── */
const DispatchBanner: React.FC = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-red-600 border-t border-red-500">
    <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <span className="text-white text-[13px] font-bold uppercase tracking-wider">24/7 Emergency Dispatch Active</span>
      </div>
      <a href="tel:+15195550199" className="bg-white text-red-600 px-6 min-h-[48px] flex items-center text-[12px] font-bold uppercase tracking-widest hover:bg-red-50 transition-colors rounded-sm">
        Call Now: (519) 555-0199
      </a>
    </div>
  </div>
);

/* ─── Header ─── */
const Header: React.FC = () => (
  <header className="sticky top-0 z-40 w-full bg-[#0e0d0c]/95 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
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

/* ─── Split-Screen Hero ─── */
const Hero: React.FC = () => (
  <section className="min-h-[85vh] flex items-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d0c] via-[#0e0d0c] to-cyan-950/20"></div>

    <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-cyan-400/40"></div>
            <span className="text-[11px] font-mono text-cyan-400/70 uppercase tracking-[0.3em]">Climate Infrastructure</span>
          </div>

          <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight mb-6">
            Precision Climate<br />
            <span className="text-cyan-400">Systems Engineering.</span>
          </h2>

          <p className="text-[16px] text-stone-400 mb-6 max-w-md leading-relaxed">
            We deploy, calibrate, and maintain commercial-grade HVAC infrastructure with sub-2-hour emergency response across Ontario.
          </p>

          {/* Grit Scenario */}
          <div className="bg-red-600/10 border border-red-500/20 rounded-sm p-4 mb-8 max-w-md">
            <p className="text-[14px] text-red-300/90 leading-relaxed font-medium">
              When it's 35°C and your AC dies at 2&nbsp;AM, you don't need a contact form. You need a technician dispatched in under two hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#deploy" className="bg-cyan-400 text-[#0e0d0c] px-8 min-h-[52px] flex items-center justify-center text-[13px] font-bold uppercase tracking-widest hover:bg-cyan-300 transition-colors">
              Request Emergency Triage
            </a>
            <a href="tel:+15195550199" className="border border-red-500/30 text-red-300 px-8 min-h-[52px] flex items-center justify-center text-[13px] font-bold uppercase tracking-widest hover:border-red-400/50 transition-colors">
              Call: (519) 555-0199
            </a>
          </div>
        </div>

        {/* Right: Technical Schematic */}
        <div className="hidden lg:block">
          <div className="border border-white/5 bg-[#111110] p-8 relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-mono text-cyan-400/60 uppercase tracking-widest">Live System</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Supply Temp', value: '72°F', status: 'optimal' },
                { label: 'Return Temp', value: '68°F', status: 'optimal' },
                { label: 'Airflow CFM', value: '1,200', status: 'optimal' },
                { label: 'Humidity', value: '45%', status: 'optimal' },
              ].map((m, i) => (
                <div key={i} className="border border-white/5 bg-[#0e0d0c] p-4">
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
            <div className="border border-white/5 bg-[#0e0d0c] p-4">
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

/* ─── System Diagnostics Grid ─── */
const DiagnosticsGrid: React.FC = () => (
  <section id="diagnostics" className="py-24 px-4 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
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

        {/* Service cards — rigid 3-column grid */}
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-[1px] bg-white/5">
          {[
            { id: 'HX-01', title: 'Furnace Systems', desc: 'High-efficiency forced-air heating deployment. Variable-speed blower calibration and combustion analysis.', metric: '98% AFUE' },
            { id: 'CL-02', title: 'Cooling Infrastructure', desc: 'Precision-sized AC systems with zoned airflow mapping. SEER 21+ rated equipment standard.', metric: 'SEER 21+' },
            { id: 'VN-03', title: 'Ventilation', desc: 'ERV/HRV balanced ventilation. Indoor air quality monitoring with particulate filtration.', metric: 'MERV-16' },
            { id: 'HP-04', title: 'Heat Pumps', desc: 'Cold-climate heat pump deployment rated to -30°C. Ground-source and air-source configurations.', metric: 'COP 4.2' },
            { id: 'CT-05', title: 'Controls & IoT', desc: 'Smart thermostat integration with building automation systems. Remote diagnostics capability.', metric: '24/7 Link' },
            { id: 'DT-06', title: 'Duct Engineering', desc: 'Manual J/D load calculations. Static pressure testing and leak sealing to <4% loss.', metric: '<4% Loss' },
          ].map((s, i) => (
            <div key={i} className="bg-[#111110] p-6 group hover:bg-[#161514] transition-colors">
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

/* ─── Maintenance Schedule Matrix (UNIQUE COMPONENT) ─── */
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
    <section id="maintenance" className="py-24 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
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
            <div className="border border-white/5 overflow-hidden">
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
                { name: 'Essential', price: '$149/season', includes: '2 visits/year' },
                { name: 'Precision', price: '$299/season', includes: '4 visits/year' },
                { name: 'Enterprise', price: '$599/season', includes: 'Unlimited + Priority' },
              ].map((plan, i) => (
                <div key={i} className={`p-6 ${i === 2 ? 'bg-cyan-400/5 border border-cyan-400/10' : 'bg-[#111110]'}`}>
                  <div className="text-[10px] font-mono text-stone-600 uppercase tracking-widest mb-1">{plan.name}</div>
                  <div className="text-[22px] font-bold text-white tracking-tight mb-1">{plan.price}</div>
                  <div className="text-[11px] text-stone-500">{plan.includes}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Emergency Triage Form (Multi-Step) ─── */
const TriageForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [triage, setTriage] = useState({ status: '', systemType: '', systemAge: '', urgency: '', name: '', phone: '', address: '' });

  const statusOptions = ['Complete Failure', 'Making Noise', 'Leaking', 'Poor Airflow'];
  const typeOptions = ['AC / Central Air', 'Furnace', 'Heat Pump', 'Boiler / Radiant'];
  const ageOptions = ['Under 5 years', '5–10 years', 'Over 10 years', 'Unknown'];

  const OptionButton = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
    <button type="button" onClick={onClick} className={`w-full text-left p-4 border transition-colors min-h-[52px] text-[14px] font-medium ${selected ? 'border-cyan-400/40 bg-cyan-400/10 text-white' : 'border-white/5 bg-[#0e0d0c] text-stone-400 hover:border-white/15'
      }`}>{label}</button>
  );

  return (
    <section id="deploy" className="py-24 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
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
              <div className="border border-cyan-400/20 bg-cyan-400/5 p-16 text-center">
                <div className="w-12 h-12 border border-cyan-400/30 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-white font-semibold text-xl mb-2">Triage Complete — Dispatch Queued.</h4>
                <p className="text-stone-500 text-[14px]">A technician matched to your system type will confirm within 2 hours.</p>
              </div>
            ) : (
              <div className="border border-white/5 bg-[#111110]">
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
                        <span className="block text-[14px] font-semibold">🚨 Emergency Dispatch Required</span>
                        <span className="block text-[12px] text-stone-500 mt-1">Technician dispatched within 2 hours</span>
                      </button>
                      <button type="button" onClick={() => { setTriage({ ...triage, urgency: 'maintenance' }); setTimeout(() => setStep(4), 200); }}
                        className={`w-full text-left p-5 border transition-colors min-h-[52px] ${triage.urgency === 'maintenance' ? 'border-cyan-400/40 bg-cyan-400/10 text-white' : 'border-white/5 bg-[#0e0d0c] text-stone-400 hover:border-white/15'
                          }`}>
                        <span className="block text-[14px] font-semibold">🔧 Schedule Maintenance</span>
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
                      <button type="submit" className="w-full bg-cyan-400 text-[#0e0d0c] min-h-[52px] text-[13px] font-bold uppercase tracking-widest hover:bg-cyan-300 transition-colors">
                        {triage.urgency === 'emergency' ? 'Dispatch Emergency Technician' : 'Schedule Service Visit'}
                      </button>
                    </div>
                  </form>
                )}

                {/* Back button (steps 2-4) */}
                {step > 1 && !submitted && (
                  <div className="px-6 pb-4">
                    <button type="button" onClick={() => setStep(step - 1)} className="text-[11px] font-mono text-stone-600 uppercase tracking-widest hover:text-stone-400 transition-colors min-h-[48px]">
                      ← Back
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

/* ─── Footer ─── */
const Footer: React.FC = () => (
  <footer className="py-10 px-4 border-t border-white/5 mb-14">
    <div className="max-w-7xl mx-auto flex flex-col gap-6">
      {/* Trust Badges */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[
          { badge: 'TSSA Certified', icon: '🛡️' },
          { badge: 'WSIB Insured', icon: '✅' },
          { badge: '24/7 Dispatch', icon: '🚨' },
        ].map((item) => (
          <div key={item.badge} className="flex items-center gap-2 border border-white/5 bg-[#111110] px-4 py-2">
            <span className="text-[12px]">{item.icon}</span>
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">{item.badge}</span>
          </div>
        ))}
      </div>

      {/* Info row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[10px] font-mono text-stone-600 uppercase tracking-widest">
          <span>Apex Climate Systems</span>
          <span>LIC# 8492021</span>
          <a href="tel:+15195550199" className="hover:text-stone-400 transition-colors min-h-[48px] inline-flex items-center">(519) 555-0199</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6 text-[10px] font-mono text-stone-600 uppercase tracking-widest">
          <a href="#" className="hover:text-stone-400 transition-colors min-h-[48px] inline-flex items-center">Privacy Policy</a>
          <a href="#" className="hover:text-stone-400 transition-colors min-h-[48px] inline-flex items-center">Terms of Service</a>
        </div>
      </div>

      {/* Status */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
        <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">All systems operational</span>
      </div>
    </div>
  </footer>
);

/* ─── App ─── */
const App: React.FC = () => (
  <div className="min-h-screen bg-[#0e0d0c] flex flex-col font-sans text-stone-200">
    <Header />
    <main className="flex-1">
      <Hero />
      <DiagnosticsGrid />
      <MaintenanceMatrix />
      <TriageForm />
    </main>
    <Footer />
    <DispatchBanner />
  </div>
);

export default App;
