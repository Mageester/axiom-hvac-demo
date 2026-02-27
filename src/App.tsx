import React from 'react';

const DispatcherHeader: React.FC = () => (
  <header className="sticky top-0 z-50 w-full bg-blue-700 backdrop-blur-md border-b border-blue-800 shadow-md">
    <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Machinery-style logo mark */}
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <div>
          <h1 className="text-white font-bold text-xl tracking-tight leading-none uppercase">Apex Climate</h1>
          <span className="text-blue-200 text-xs font-medium tracking-wide uppercase">Trusted Home Services</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-100">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#maintenance" className="hover:text-white transition-colors">Maintenance</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
      </nav>

      <div className="flex items-center">
        {/* Emergency CTA */}
        <a href="tel:1-800-555-0199" className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all shadow-[0_4px_14px_rgba(220,38,38,0.4)] active:scale-95 border border-red-500">
          <span className="relative flex h-3 w-3 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          24/7 Service
        </a>
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative pt-24 pb-32 px-4 shadow-sm overflow-hidden bg-slate-50">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80" alt="HVAC Professionals" className="w-full h-full object-cover origin-center" />
      <div className="absolute inset-0 bg-blue-900/85 mix-blend-multiply"></div>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <div className="inline-flex items-center gap-2 bg-blue-800/80 border border-blue-400/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6">
          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          Top Rated Local HVAC Experts
        </div>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
          Premium Heating & Cooling Services. <br /><span className="text-blue-200">24/7 Emergency Repair.</span>
        </h2>
        <p className="text-xl text-blue-50 mb-10 max-w-lg leading-relaxed drop-shadow">
          We install, repair, and maintain residential and commercial HVAC systems across Ontario. Fast, reliable service when you need it most.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#audit" className="w-full sm:w-auto text-center bg-red-600 text-white px-8 py-4 rounded text-base font-bold uppercase tracking-widest hover:bg-red-500 transition-colors shadow-lg border border-red-500">
            Get a Free Estimate
          </a>
          <a href="tel:1-800-555-0199" className="w-full sm:w-auto text-center bg-white border border-transparent text-blue-900 px-8 py-4 rounded text-base font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-lg">
            Call Now: 1-800-555-0199
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ConversionBlock: React.FC = () => (
  <section id="audit" className="py-24 px-4 bg-slate-50 border-t border-slate-200">
    <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-700"></div>

      <div className="text-center mb-10">
        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Get a Free Estimate</h3>
        <p className="text-slate-600 text-base">Provide your details below. One of our expert technicians will review your request and contact you shortly.</p>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
          <input type="text" className="bg-slate-50 border border-slate-300 p-4 rounded text-slate-900 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all shadow-inner" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number</label>
          <input type="tel" className="bg-slate-50 border border-slate-300 p-4 rounded text-slate-900 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all shadow-inner" required />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Service Address</label>
          <input type="text" placeholder="e.g. 100 Main St." className="bg-slate-50 border border-slate-300 p-4 rounded text-slate-900 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all shadow-inner" />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">How can we help? (Service Details)</label>
          <textarea rows={4} className="bg-slate-50 border border-slate-300 p-4 rounded text-slate-900 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all resize-none shadow-inner" required></textarea>
        </div>
        <div className="sm:col-span-2 mt-4">
          <button className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold text-base uppercase tracking-widest py-5 rounded shadow-lg transition-colors active:scale-[0.99]">
            Request Service
          </button>
        </div>
      </form>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <DispatcherHeader />
      <main className="flex-1">
        <Hero />

        {/* Core Capabilities */}
        <section id="services" className="py-24 px-4 bg-white border-b border-slate-200 shadow-sm z-10 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Our Premium Services</h3>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">We provide comprehensive heating and cooling solutions for ultimate home comfort.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Furnace Repair', desc: 'Fast, reliable heating repairs to keep your home warm and safe during the coldest winters.' },
                { title: 'AC Installation', desc: 'High-efficiency air conditioning installation expertly sized for your home.' },
                { title: 'Commercial Maintenance', desc: 'Routine tune-ups and large-scale commercial HVAC maintenance plans.' }
              ].map((service, i) => (
                <div key={i} className="bg-white shadow-md border border-slate-200 p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-blue-700 mb-6 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-full shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h4 className="text-slate-900 font-bold text-xl mb-3">{service.title}</h4>
                  <p className="text-slate-600 text-base leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ConversionBlock />
      </main>

      <footer className="py-12 px-4 border-t border-slate-200 bg-white text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h5 className="text-blue-900 font-bold uppercase tracking-widest mb-4">Apex Climate Heroes</h5>
          <p className="text-slate-600 text-sm mb-6">LIC# 8492021 | 100% Satisfaction Guaranteed</p>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">© {new Date().getFullYear()} Apex Climate. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
