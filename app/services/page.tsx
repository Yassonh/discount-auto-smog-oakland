import Link from 'next/link';

export const metadata = {
  title: 'Our Auto Repair & Smog Services | Discount Auto Smog & Tire Oakland',
  description: 'STAR-certified Oakland smog checks, tire replacement, wheel alignment, oil changes, and full mechanical check-engine diagnostics.',
};

const pillars = [
  {
    id: 'smog',
    title: 'Official Smog & Emissions',
    description: 'Licensed California DMV smog inspection station. Fast turnaround, electronic DMV paperwork submission, and STAR-certified capabilities.',
    href: '/services/smog-check',
    badge: 'Popular / Fast',
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    services: [
      'Annual DMV Renewal Smog Check',
      'Change of Ownership Smog',
      'Out-of-State Registration Smog',
      'Diesel Vehicle Smog Checks',
      'Heavy Duty Trucks & Vans',
      'RV Smog Certification'
    ]
  },
  {
    id: 'tires',
    title: 'Tires & Wheel Services',
    description: 'Don’t drive on bald rubber in the East Bay rain. We offer complete tire sales, computerized mounting, balancing, and precision alignment.',
    href: '/services/tires',
    badge: null,
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    services: [
      'New Auto Tire Replacement',
      'Computerized Wheel Alignment',
      'Routine Tire Rotations',
      'Tire Pressure (TPMS) Check',
      'Flat Patching & Inspection'
    ]
  },
  {
    id: 'repair',
    title: 'Diagnostics & Major Repair',
    description: 'Is your Check Engine Light blinking? Our diagnostic computers talk directly to your vehicle’s ECU to pinpoint the failure instantly.',
    href: '/services/auto-repair',
    badge: 'Master Mechanic',
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    services: [
      'Check Engine Light Diagnostics',
      'Complete Brake Pad & Rotor Repair',
      'Steering & Suspension Overhaul',
      'A/C & Heating System Recharge',
      'Transmission & Electrical',
      'Radiator & Cooling Systems'
    ]
  },
  {
    id: 'maintenance',
    title: 'Routine Maintenance',
    description: 'The secret to getting 250,000 miles out of your car is catching degraded fluids and clogged filters before they break a main component.',
    href: '/services/auto-repair', 
    badge: null,
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    services: [
      'Full-Point Oil Change',
      'Fluid Exchanges (Coolant/Brake)',
      'Battery Testing & Replacement',
      'Air & Cabin Filter Swaps',
      'Wiper Blade Fitting',
      'Manufacturer Scheduled Upkeep'
    ]
  }
];

export default function ServicesHubPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Complete Auto Care in <span className="text-blue-500">Oakland</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            From official California Smog Certifications to major mechanical diagnostics, we keep East Bay drivers safe and compliant. Select a department below:
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 group shadow-xl shadow-black/40 relative overflow-hidden"
            >
              {/* Subtle top light-bleed effect */}
              <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-900/50 inline-block">
                    {pillar.icon}
                  </div>
                  {pillar.badge && (
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {pillar.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h2>
                
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {pillar.description}
                </p>

                {/* Sub-services checklist */}
                <div className="mt-6 pt-6 border-t border-slate-800/80">
                  <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase block mb-3">
                    Included Services:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                    {pillar.services.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link 
                  href={pillar.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-blue-600 text-white text-sm font-semibold py-3 px-6 rounded-xl transition-colors group-hover:shadow-lg group-hover:shadow-blue-600/20"
                >
                  <span>View {pillar.title.split('&')[0]} Details</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Global Bottom Call-out */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/40 via-slate-900 to-slate-900 border border-blue-800/50 rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Need something fixed that isn't on this list?</h3>
            <p className="text-slate-300 text-sm mt-1">We service all domestic, Asian, and European makes at our Shattuck Ave garage.</p>
          </div>
          <a 
            href="tel:5106552729" 
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-600/30"
          >
            Speak to a Mechanic
          </a>
        </div>

      </div>
    </div>
  );
}