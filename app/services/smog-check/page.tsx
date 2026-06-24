import Link from 'next/link';

export const metadata = {
  title: 'Official DMV Smog Check Oakland CA | STAR Certified Station',
  description: 'Fast 15-minute DMV Smog Checks at 5443 Shattuck Ave. Electronic DMV paperwork transmission. We test Cars, Trucks, Diesels, Out-of-State, and RVs. No Appt Needed!',
};

const smogTypes = [
  {
    title: 'Annual DMV Renewal Smog',
    desc: 'Got your registration notice? Bring the paper with the barcode. We scan it, test the car, and beam the "PASS" certificate instantly to the Sacramento DMV server.',
    tags: ['Standard DMV', 'Most Popular']
  },
  {
    title: 'Change of Ownership Smog',
    desc: 'California law requires the seller to provide a passing smog certificate issued within 90 days of the sale. We make the transfer legal and headache-free.',
    tags: ['Title Transfer', 'Valid 90 Days']
  },
  {
    title: 'Out-of-State Registration',
    desc: 'Just moved to the Bay Area? Welcome! The CA DMV requires a strict emissions test for all vehicles crossing state lines before handing over your golden plates.',
    tags: ['New Residents', '49-State / 50-State']
  },
  {
    title: 'Diesel & Heavy Duty Smog',
    desc: 'Not every shop has the specialized OBD-II data scanners required for modern diesel rigs. We inspect Powerstrokes, Duramaxes, Cummins, and commercial vans.',
    tags: ['Cars & Trucks up to 14k lbs']
  },
  {
    title: 'Gross Polluters / STAR Directives',
    desc: 'Did your DMV notice say "STAR Station Required"? As a certified high-tier inspection station, we are authorized to clear strict state mandates.',
    tags: ['STAR Certified', 'State Mandated']
  },
  {
    title: 'RV & Motorhome Smog Checks',
    desc: 'Don’t try to squeeze a 28-foot Class C motorhome into a tiny lube shop. Our Shattuck Ave lot can accommodate standard recreational vehicles.',
    tags: ['Wide Bay Access']
  }
];

const faqs = [
  {
    q: "How long does a Smog Check actually take?",
    a: "For a standard post-2000 vehicle, the physical test takes about 15 to 20 minutes. If there is no line when you pull up, you will be back on Shattuck Ave in under half an hour."
  },
  {
    q: "My 'Check Engine Light' is on. Can I still pass?",
    a: "No. By California law, an illuminated Check Engine Light is an automatic failure, even if the tailpipe is blowing clean air. Do not pay for a smog test yet! Let our mechanics pull the diagnostic code first to fix the sensor."
  },
  {
    q: "What do I need to bring with me?",
    a: "Bring your vehicle, the keys, and your DMV Registration Renewal Notice (the paper with the barcode on it). If you lost the paper, don't panic—we can look up your VIN manually."
  },
  {
    q: "Do you send the paperwork to the DMV, or do I?",
    a: "We do it instantly. The moment our machine registers a 'PASS', the data is encrypted and sent directly to the California DMV database. You can go home and pay your tags online immediately."
  }
];

export default function SmogCheckPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 pb-20">
      
      {/* 1. Page Hero */}
      <div className="relative bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950 pt-16 pb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href="/services" className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
              &larr; All Services
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-xs uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
              Official CA Station #5443
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
                Oakland’s 15-Minute <br />
                <span className="text-blue-500">Smog Check Station</span>
              </h1>
              <p className="mt-4 text-lg text-slate-300 max-w-2xl">
                Official State of California Smog Testing for all makes, models, and years. Fast electronic DMV transmission so you can get your tags today.
              </p>
            </div>

            {/* Instant Action Box */}
            <div className="lg:col-span-4 bg-slate-900 border-2 border-blue-600/40 rounded-2xl p-6 shadow-2xl shadow-blue-950">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">Current Wait Time:</div>
              <div className="text-3xl font-black text-emerald-400">~10 Mins</div>
              <div className="text-xs text-slate-400 mt-1">Drive-ups prioritized • No appointment necessary</div>
              
              <hr className="border-slate-800 my-4" />
              
              <a 
                href="tel:5106552729"
                className="w-full block text-center py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg shadow-blue-600/30 transition-all"
              >
                Call (510) 655-2729
              </a>
              <div className="text-center text-xs text-slate-400 mt-3">
                📍 5443 Shattuck Ave, Oakland, CA
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. The "What to Bring" Alert banner */}
      <div className="bg-blue-950/60 border-y border-blue-800/60 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📄</span>
            <div>
              <strong className="text-white">Pro-Tip for fast service:</strong> Bring your DMV Renewal form (the page with the scannable barcodes).
            </div>
          </div>
          <span className="text-blue-300 font-medium shrink-0">Lost it? We can pull your VIN manually.</span>
        </div>
      </div>

      {/* 3. Smog Types Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Every Smog Check Classification</h2>
          <p className="text-slate-400 mt-2">Whether you're renewing a family Honda or registering an out-of-state F-250 Diesel, our Shattuck Avenue testing bays handle it all:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smogTypes.map((s, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {s.tags.map((t, tidx) => (
                    <span key={tidx} className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-blue-400 border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>✓ Same-day DMV upload</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. The Check Engine Light Warning (High Trust Element) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/40 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-500 text-8xl font-black select-none pointer-events-none">
            ⚠️
          </div>
          <div className="max-w-3xl relative z-10">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              Mechanic Advisory
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Is your Check Engine Light on right now?
            </h3>
            <p className="mt-2 text-slate-300 leading-relaxed">
              <strong>Do not pay anyone to smog test your car today.</strong> By California state regulations, any active Check Engine Light results in an instant, non-refundable failure. Bring your car to us first; our mechanics will run an ECU Engine Diagnostic to fix the underlying sensor before we put it on the smog machine.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/services/auto-repair" className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors">
                Learn about Engine Diagnostics &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 5. FAQs / SEO Rich Snippets */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-2xl font-bold text-center text-white mb-10">Frequently Asked Smog Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 sm:p-6">
              <h4 className="text-lg font-bold text-blue-400">{faq.q}</h4>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Page-Specific Schema for Google's local crawler */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Smog Check Station",
            "provider": {
              "@type": "AutoRepair",
              "name": "Discount Auto Smog & Tire",
              "address": {
                "streetAddress": "5443 Shattuck Ave",
                "addressLocality": "Oakland",
                "addressRegion": "CA",
                "postalCode": "94609"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Oakland"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Smog Inspection Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Annual DMV Renewal Smog Check" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Change of Ownership Smog" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Out of State Smog Check" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diesel Smog Inspection" } }
              ]
            }
          })
        }}
      />

    </div>
  );
}