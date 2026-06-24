import Link from 'next/link';

export const metadata = {
  title: 'Full-Service Auto Repair & Engine Diagnostics Oakland | Mechanic',
  description: 'Expert mechanical repair in North Oakland. Check engine light diagnostics, brake pad & rotor service, oil changes, suspension, electrical, and A/C repair.',
};

const repairPillars = [
  {
    id: 'diagnostics',
    title: 'Computerized Engine Diagnostics',
    subtitle: 'Check Engine Light & Electrical',
    desc: 'Don’t guess what’s wrong. We plug modern OBD-II diagnostic scanners directly into your vehicle’s ECU to read the exact error codes, check live data streams, and inspect wiring, alternators, and dead batteries.',
    tags: ['Check Engine Light', 'Electrical', 'Battery Swap', 'Tune-Ups'],
    badge: 'Stop Here First'
  },
  {
    id: 'brakes',
    title: 'Complete Brake Services',
    subtitle: 'Pads, Rotors, & Fluid',
    desc: 'Navigating the steep hills of Berkeley and Oakland requires absolute stopping power. We inspect pad thickness, machine or replace warped rotors, flush degraded brake fluid, and service sticking calipers.',
    tags: ['Brake Services', 'Rotors', 'Fluid Exchange', 'Squeaking Fix'],
    badge: 'Safety Critical'
  },
  {
    id: 'oil',
    title: 'Oil Changes & Maintenance',
    subtitle: 'Point Inspections & Filters',
    desc: 'The single best investment for your engine’s longevity. We drain old contaminated oil, install premium synthetic or conventional blends, swap engine/cabin filters, and perform a multi-point safety check.',
    tags: ['Point Oil Change', 'Air & Cabin Filters', 'Wiper Blades', 'Tune-Ups'],
    badge: 'Fast Drop-In'
  },
  {
    id: 'suspension',
    title: 'Steering & Suspension',
    subtitle: 'Shocks, Struts, & Axles',
    desc: 'East Bay roads are notoriously rough. If your ride feels bouncy, clunky over bumps, or handles loosely, we repair damaged tie rods, ball joints, control arms, and worn-out shock absorbers.',
    tags: ['Steering & Suspension', 'Wheel Alignment', 'Axles & CV Joints'],
    badge: null
  },
  {
    id: 'hvac',
    title: 'A/C & Radiator Services',
    subtitle: 'Heating & Engine Cooling',
    desc: 'An overheating engine will warp a cylinder head in minutes. We pressure-test radiators, replace failing water pumps, repair coolant leaks, and recharge your air conditioning so it blows ice cold.',
    tags: ['A/C Services', 'Radiator Services', 'Coolant Flush', 'Water Pump'],
    badge: null
  },
  {
    id: 'drivetrain',
    title: 'Transmission & Drivetrain',
    subtitle: 'Fluid Services & Mechanical Repair',
    desc: 'Slipping gears, delayed shifting, or deep grinding noises? We perform manufacturer-specified transmission fluid exchanges, clutch inspections, and complete drivetrain troubleshooting.',
    tags: ['Transmission', 'Fluid Exchange', 'Manufacturer Maintenance'],
    badge: 'Advanced Upkeep'
  }
];

const dealershipComparison = [
  { feature: "Diagnostic Speed", shop: "Same-day / Drop-ins welcome", dealer: "2 to 4 weeks out by appointment" },
  { feature: "Price Transparency", shop: "We show you the worn part before billing", dealer: "Flat-rate corporate service menus" },
  { feature: "Mechanic Access", shop: "Talk directly to the guy turning the wrench", dealer: "Filtered through commissioned service advisors" },
  { feature: "Part Sourcing", shop: "OEM or budget-friendly options available", dealer: "Strictly high-markup branded boxes only" },
];

export default function AutoRepairPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 pb-20">
      
      {/* 1. Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950 pt-16 pb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href="/services" className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
              &larr; All Services
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-xs uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
              Master Workshop & Mechanical Bay
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
                Honest Auto Repair & <br />
                <span className="text-blue-500">Master Diagnostics</span>
              </h1>
              <p className="mt-4 text-lg text-slate-300 max-w-2xl">
                From basic synthetic oil changes to resolving complex electrical misfires. Get your car repaired locally on Shattuck Avenue without dealership delays.
              </p>
            </div>

            {/* Emergency / Tow-In Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950/50 border-2 border-blue-500/40 rounded-2xl p-6 shadow-2xl">
              <div className="inline-block px-2.5 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider mb-3">
                Is the car undrivable?
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Have your tow truck drop it here:</h3>
              <p className="text-sm font-mono text-slate-300 bg-slate-950/80 p-3 rounded-lg border border-slate-800 mb-4 select-all">
                Discount Auto Smog & Tire<br />
                5443 Shattuck Ave.<br />
                Oakland, CA 94609
              </p>
              <a 
                href="tel:5106552729"
                className="w-full block text-center py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg shadow-blue-600/30 transition-all"
              >
                Notify the Garage &rarr; (510) 655-2729
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Trust Interstitial */}
      <div className="bg-slate-900/60 border-y border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-2xl">🛡️</span>
            <span className="text-sm text-slate-300"><strong>No Surprise Bills:</strong> We never perform unauthorized mechanical work without your explicit phone approval.</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div className="flex items-center gap-3">
            <span className="text-emerald-500 text-2xl font-bold">✓</span>
            <span className="text-sm text-slate-300"><strong>All Makes & Models:</strong> Domestic, Japanese, Korean, and European diagnostic capability.</span>
          </div>
        </div>
      </div>

      {/* 3. The 6 Mechanical Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Our Mechanical Repair Capabilities</h2>
          <p className="text-slate-400 mt-2">Every system in your car works together. We isolate the exact component failure to keep your repair costs strictly to what's broken:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repairPillars.map((pillar) => (
            <div key={pillar.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all relative overflow-hidden group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-blue-400 font-semibold">{pillar.subtitle}</span>
                  {pillar.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {pillar.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              <div>
                {/* Specific Keyword Tags for Google Local Indexing */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-6">
                  {pillar.tags.map((tag, tidx) => (
                    <span key={tidx} className="text-[11px] bg-slate-950 text-slate-400 px-2.5 py-1 rounded-md border border-slate-800/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="tel:5106552729"
                  className="w-full block text-center py-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Schedule Inspection
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 4. The "Why Skip the Dealership" Takeaway Table */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/30 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-1">Local Value Advantage</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Why Oakland Drivers Switch from Dealership Service Bays</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase font-mono tracking-wider">
                  <th className="pb-4 w-1/3">Service Factor</th>
                  <th className="pb-4 w-1/3 text-blue-400">Discount Auto Smog & Tire</th>
                  <th className="pb-4 w-1/3 text-slate-500">Standard Dealership</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {dealershipComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 font-semibold text-white">{row.feature}</td>
                    <td className="py-4 text-emerald-400 font-medium pr-4">✓ {row.shop}</td>
                    <td className="py-4 text-slate-400 pl-2">✗ {row.dealer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-slate-300">Keep your manufacturer's maintenance warranty completely intact while paying local rates.</span>
            <a href="tel:5106552729" className="shrink-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/20">
              Call for a Second Opinion
            </a>
          </div>
        </div>
      </div>

      {/* Comprehensive Repair Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Discount Auto Smog & Tire",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mechanical Repair Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auto engine diagnostic" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brakes replacement and repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oil change and filter replacement" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Steering and suspension repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transmission service" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "A/C Services and recharging" } }
              ]
            }
          })
        }}
      />

    </div>
  );
}