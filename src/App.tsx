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
      <a href="tel:1-800-555-0199" className="bg-white text-red-600 px-6 min-h-[40px] flex items-center text-[12px] font-bold uppercase tracking-widest hover:bg-red-50 transition-colors rounded-sm">
        Call Now: 1-800-555-0199
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
        <a href="#deploy" className="px-5 py-4 hover:text-cyan-400 transition-colors">Deploy</a>
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

          <p className="text-[16px] text-stone-400 mb-10 max-w-md leading-relaxed">
            We deploy, calibrate, and maintain commercial-grade HVAC infrastructure with sub-2-hour emergency response across Ontario.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#deploy" className="bg-cyan-400 text-[#0e0d0c] px-8 min-h-[52px] flex items-center justify-center text-[13px] font-bold uppercase tracking-widest hover:bg-cyan-300 transition-colors">
              Deploy Service Team
            </a>
            <a href="#diagnostics" className="border border-white/10 text-white px-8 min-h-[52px] flex items-center justify-center text-[13px] font-bold uppercase tracking-widest hover:border-cyan-400/30 transition-colors">
              Run Diagnostics
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

/* ─── Deployment Request Form ─── */
const DeploymentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

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
              <h3 className="text-[28px] font-bold text-white tracking-tight leading-tight mb-3">Deploy<br />Service</h3>
              <p className="text-stone-500 text-[13px] leading-relaxed">Submit a service request. Our dispatch team will confirm within 2 hours.</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            {submitted ? (
              <div className="border border-cyan-400/20 bg-cyan-400/5 p-16 text-center">
                <div className="w-12 h-12 border border-cyan-400/30 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-white font-semibold text-xl mb-2">Service Request Logged.</h4>
                <p className="text-stone-500 text-[14px]">Dispatch confirmation within 2 hours. Reference will be sent to your email.</p>
              </div>
            ) : (
              <form className="border border-white/5 bg-[#111110]" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="p-6 border-b border-r border-white/5">
                    <label className="text-[10px] font-mono text-stone-600 uppercase tracking-widest block mb-3">Full Name</label>
                    <input type="text" required className="w-full bg-transparent border-b border-white/10 pb-2 text-white text-[15px] focus:border-cyan-400/40 outline-none transition-colors" />
                  </div>
                  <div className="p-6 border-b border-white/5">
                    <label className="text-[10px] font-mono text-stone-600 uppercase tracking-widest block mb-3">Phone</label>
                    <input type="tel" required className="w-full bg-transparent border-b border-white/10 pb-2 text-white text-[15px] focus:border-cyan-400/40 outline-none transition-colors" />
                  </div>
                  <div className="p-6 border-b border-r border-white/5">
                    <label className="text-[10px] font-mono text-stone-600 uppercase tracking-widest block mb-3">Service Address</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/10 pb-2 text-white text-[15px] focus:border-cyan-400/40 outline-none transition-colors" />
                  </div>
                  <div className="p-6 border-b border-white/5">
                    <label className="text-[10px] font-mono text-stone-600 uppercase tracking-widest block mb-3">System Type</label>
                    <select className="w-full bg-transparent border-b border-white/10 pb-2 text-white text-[15px] focus:border-cyan-400/40 outline-none transition-colors">
                      <option className="bg-[#111110]" value="">Select...</option>
                      <option className="bg-[#111110]" value="furnace">Furnace</option>
                      <option className="bg-[#111110]" value="ac">Air Conditioning</option>
                      <option className="bg-[#111110]" value="heatpump">Heat Pump</option>
                      <option className="bg-[#111110]" value="commercial">Commercial System</option>
                    </select>
                  </div>
                  <div className="p-6 sm:col-span-2">
                    <label className="text-[10px] font-mono text-stone-600 uppercase tracking-widest block mb-3">Issue Description</label>
                    <textarea rows={3} required className="w-full bg-transparent border-b border-white/10 pb-2 text-white text-[15px] focus:border-cyan-400/40 outline-none transition-colors resize-none"></textarea>
                  </div>
                </div>
                <div className="p-6 border-t border-white/5">
                  <button type="submit" className="w-full bg-cyan-400 text-[#0e0d0c] min-h-[52px] text-[13px] font-bold uppercase tracking-widest hover:bg-cyan-300 transition-colors">
                    Submit Service Request
                  </button>
                </div>
              </form>
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
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6 text-[10px] font-mono text-stone-600 uppercase tracking-widest">
        <span>Apex Climate Systems</span>
        <span>LIC# 8492021</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
      <div className="flex items-center gap-2 border border-white/5 px-3 py-1.5">
        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
        <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Performance: Optimized</span>
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
      <DeploymentForm />
    </main>
    <Footer />
    <DispatchBanner />
  </div>
);

export default App;
