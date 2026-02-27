import React from 'react';

const DispatcherHeader: React.FC = () => (
  <header className="sticky top-0 z-50 w-full bg-steel-900/95 backdrop-blur-md border-b border-steel-800">
    <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Machinery-style logo mark */}
        <div className="w-8 h-8 bg-safetyBlue-600 rounded flex items-center justify-center border border-safetyBlue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <div>
          <h1 className="text-white font-bold text-lg tracking-tight leading-none uppercase">Apex Climate</h1>
          <span className="text-steel-500 text-[10px] font-mono tracking-widest uppercase">Dispatcher Active</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-steel-400">
        <a href="#services" className="hover:text-white transition-colors">Infrastructure</a>
        <a href="#maintenance" className="hover:text-white transition-colors">Maintenance</a>
        <a href="#contact" className="hover:text-white transition-colors">Command Center</a>
      </nav>

      <div className="flex items-center">
        {/* Emergency CTA */}
        <a href="tel:1-800-555-0199" className="flex items-center gap-2 bg-alertOrange-500 hover:bg-alertOrange-400 text-white px-5 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-95">
          <span className="relative flex h-3 w-3 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          Emergency Repair
        </a>
      </div>
    </div>
  </header>
);

const SpeedWidget: React.FC = () => (
  <div className="fixed bottom-4 right-4 z-50 bg-steel-900 border border-steel-700 p-3 rounded shadow-2xl flex items-center gap-4 text-[10px] font-mono text-steel-400 uppercase tracking-widest hidden md:flex">
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
      Edge-Deployed
    </div>
    <div className="w-px h-3 bg-steel-700"></div>
    <div className="flex items-center gap-2">
      Latency: &lt;50ms
    </div>
    <div className="w-px h-3 bg-steel-700"></div>
    <div className="flex items-center gap-2">
      Enterprise SSL
    </div>
  </div>
);

const Hero: React.FC = () => (
  <section className="relative pt-24 pb-32 px-4 border-b border-steel-800 overflow-hidden bg-[#0A1018]">
    {/* Grid Background */}
    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #1a202c 1px, transparent 1px), linear-gradient(to bottom, #1a202c 1px, transparent 1px)', backgroundSize: '4rem 4rem', opacity: 0.3 }}></div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <div className="inline-flex items-center gap-2 bg-safetyBlue-900/50 border border-safetyBlue-800 text-safetyBlue-400 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest mb-6">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Industrial-Grade Climate Control
        </div>
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
          Absolute Climate Control. <br /><span className="text-steel-500">Zero Downtime.</span>
        </h2>
        <p className="text-lg text-steel-400 mb-10 max-w-lg leading-relaxed">
          We engineer, deploy, and maintain commercial and residential HVAC infrastructure across Ontario. Precision technical repair deployed 24/7.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#audit" className="w-full sm:w-auto text-center bg-white text-steel-900 px-8 py-4 rounded text-sm font-bold uppercase tracking-widest hover:bg-steel-200 transition-colors">
            Request Technical Audit
          </a>
          <a href="tel:1-800-555-0199" className="w-full sm:w-auto text-center bg-steel-800 border border-steel-700 text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-widest hover:bg-steel-700 transition-colors">
            Call Dispatch: 1-800-555-0199
          </a>
        </div>
      </div>

      {/* Visual Placeholder for LCP */}
      <div className="relative">
        <div className="absolute inset-0 bg-safetyBlue-600 blur-[100px] opacity-20"></div>
        <div className="aspect-[4/3] bg-steel-800 border border-steel-700 rounded overflow-hidden relative shadow-2xl flex flex-col clip-diagonal">
          <div className="flex border-b border-steel-700 bg-steel-900 p-3 items-center justify-between">
            <div className="text-[10px] font-mono text-steel-500 uppercase tracking-widest">Diagnostic View // CH-53</div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-steel-700"></div>
              <div className="w-2 h-2 rounded-full bg-steel-700"></div>
              <div className="w-2 h-2 rounded-full bg-alertOrange-500/80"></div>
            </div>
          </div>
          <div className="flex-1 bg-steel-800/50 flex items-center justify-center p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(37,99,235,0.05) 0%, transparent 70%)' }}></div>
            <div className="text-steel-600 font-mono text-sm uppercase tracking-widest border border-steel-700/50 p-6 bg-steel-900/40 rounded">
              [ Optimized Technical Visual Placeholder ]<br />
              <span className="text-[10px] mt-2 block opacity-60">Width: 800px | Format: WebP | Priority: High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ConversionBlock: React.FC = () => (
  <section id="audit" className="py-24 px-4 bg-steel-900">
    <div className="max-w-4xl mx-auto bg-[#0d131b] border border-steel-800 rounded p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-safetyBlue-600"></div>

      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-white tracking-tight mb-4">Request Technical Audit</h3>
        <p className="text-steel-400 text-[15px]">Provide your system specifications below. A technical lead will review your architecture and contact you within 60 minutes during dispatch hours.</p>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-mono text-steel-500 uppercase tracking-widest">Facility / Contact Name</label>
          <input type="text" className="bg-steel-900 border border-steel-700 p-4 rounded text-white text-sm focus:border-safetyBlue-500 focus:ring-1 focus:ring-safetyBlue-500 outline-none transition-all" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-mono text-steel-500 uppercase tracking-widest">Dispatcher Callback Number</label>
          <input type="tel" className="bg-steel-900 border border-steel-700 p-4 rounded text-white text-sm focus:border-safetyBlue-500 focus:ring-1 focus:ring-safetyBlue-500 outline-none transition-all" required />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-[11px] font-mono text-steel-500 uppercase tracking-widest">System Architecture (Address & Type)</label>
          <input type="text" placeholder="e.g. 100 Main St. - Rooftop RTU / Furnace" className="bg-steel-900 border border-steel-700 p-4 rounded text-white text-sm focus:border-safetyBlue-500 focus:ring-1 focus:ring-safetyBlue-500 outline-none transition-all" />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-[11px] font-mono text-steel-500 uppercase tracking-widest">Diagnostic Report (Current Issues)</label>
          <textarea rows={4} className="bg-steel-900 border border-steel-700 p-4 rounded text-white text-sm focus:border-safetyBlue-500 focus:ring-1 focus:ring-safetyBlue-500 outline-none transition-all resize-none" required></textarea>
        </div>
        <div className="sm:col-span-2 mt-2">
          <button className="w-full bg-safetyBlue-600 hover:bg-safetyBlue-500 text-white font-bold text-sm uppercase tracking-widest py-5 rounded transition-colors active:scale-[0.99]">
            Submit Diagnostic Run
          </button>
        </div>
      </form>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-steel-900 flex flex-col">
      <DispatcherHeader />
      <main className="flex-1">
        <Hero />

        {/* Core Capabilities */}
        <section className="py-24 px-4 border-b border-steel-800 bg-steel-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Emergency Intervention', 'System Replacement', 'Preventative Governance'].map((feat, i) => (
                <div key={i} className="bg-steel-800/40 border border-steel-800 p-8 rounded hover:border-steel-600 transition-colors">
                  <div className="text-safetyBlue-500 mb-6 border border-safetyBlue-900 bg-safetyBlue-900/30 w-12 h-12 flex items-center justify-center rounded">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">{feat}</h4>
                  <p className="text-steel-400 text-sm leading-relaxed">Industrial-grade repairs and full architectural replacements backed by comprehensive telemetry and strict thermal standards.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ConversionBlock />
      </main>

      <footer className="py-12 px-4 border-t border-steel-800 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h5 className="text-steel-300 font-bold uppercase tracking-widest mb-4">Apex Climate Heroes</h5>
          <p className="text-steel-600 text-sm mb-6">LIC# 8492021 | TSSA Certified Infrastructure</p>
          <div className="text-[10px] uppercase font-mono text-steel-700 tracking-widest">© {new Date().getFullYear()} Engineered Digital Presence</div>
        </div>
      </footer>
      <SpeedWidget />
    </div>
  );
};

export default App;
