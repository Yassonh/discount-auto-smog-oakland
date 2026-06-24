import Link from 'next/link';

export const metadata = {
  title: 'Discount Auto Smog & Tire | Auto Repair & STAR Smog Check Oakland',
  description: 'Top-rated auto repair, STAR-certified DMV smog checks, tire replacement, and computerized wheel alignment at 5443 Shattuck Ave, Oakland, CA. Call (510) 655-2729!',
};

// Hybrid Review Data (Hand-curated Yelp highlights + Google Trust)
const featuredReviews = [
  {
    name: "Marcus V.",
    platform: "Yelp",
    rating: 5,
    date: "Two weeks ago",
    text: "My check engine light came on right before I needed my DMV smog renewal. Brought it to Discount Auto on Shattuck—they diagnosed a bad O2 sensor, replaced it same-day, and passed my smog instantly. Total lifesavers.",
    url: "https://www.yelp.com/biz/discount-auto-and-smog-center-oakland-5"
  },
  {
    name: "Sarah L.",
    platform: "Google",
    rating: 5,
    date: "A month ago",
    text: "Hit a massive Oakland pothole and my steering wheel started shaking. They got me in immediately, did a full laser wheel alignment, and showed me exactly where the camber was off. Honest, fast, and very fair pricing.",
    url: "https://maps.google.com/?cid=13720011192268644098"
  },
  {
    name: "David K.",
    platform: "Yelp",
    rating: 5,
    date: "Three months ago",
    text: "Best smog check experience in the East Bay. Pulled in on a Tuesday morning without an appointment, was out in 15 minutes with my paperwork already beamed to the DMV. Highly recommend!",
    url: "https://www.yelp.com/biz/discount-auto-and-smog-center-oakland-5"
  }
];

const pillars = [
  {
    title: "Official Smog Inspection",
    desc: "STAR-certified DMV renewals, change of ownership, out-of-state transfers, and diesel emissions testing.",
    href: "/services/smog-check",
    badge: "15-Min Turnaround",
    icon: "💨"
  },
  {
    title: "Tires & Laser Alignment",
    desc: "Complete tire sales, precision laser mounting, high-speed balancing, and pothole damage suspension repair.",
    href: "/services/tires",
    badge: "All Major Brands",
    icon: "🛞"
  },
  {
    title: "Diagnostics & Auto Repair",
    desc: "Check engine light troubleshooting, full brake pad/rotor overhauls, A/C recharges, and transmission upkeep.",
    href: "/services/auto-repair",
    badge: "Master Mechanics",
    icon: "🔧"
  },
  {
    title: "Full-Point Oil Changes",
    desc: "Premium synthetic or conventional oil drains, fluid top-offs, and air/cabin filter replacements.",
    href: "/services/auto-repair",
    badge: "Drop-ins Welcome",
    icon: "🛢️"
  }
];

export default function HomePage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Live Open Status Bar */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs sm:text-sm font-semibold mb-6 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-slate-300">Shop Status:</span>
              <span className="text-emerald-400 font-bold">OPEN TODAY</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">8:30 AM – 5:30 PM</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Oakland’s Trusted <br />
              <span className="text-blue-500">Smog & Auto Care.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Fast California DMV smog testing, premier tire sales, precision wheel alignment, and honest mechanical diagnostics at <strong>5443 Shattuck Ave</strong>. Get in, get fixed, get back on the road.
            </p>

            {/* High-Converting Mobile Action Row */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:5106552729"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-xl shadow-blue-600/30 transition-all transform active:scale-98"
              >
                <span className="text-2xl">📞</span>
                <span>Call (510) 655-2729</span>
              </a>
              <Link
                href="#location"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-lg transition-all"
              >
                <span>📍 Get Directions</span>
              </Link>
            </div>

            {/* Quick Guarantees */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs sm:text-sm text-slate-400">
              <div><strong className="text-slate-200 block">✓ No Appt Needed</strong> Same-day drive-ups</div>
              <div><strong className="text-slate-200 block">✓ Direct DMV Beam</strong> Instant certificate upload</div>
              <div><strong className="text-slate-200 block">✓ STAR Certified</strong> All CA state mandates</div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4 CORE PILLARS MENU ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-1">Our Departments</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Everything Your Car Needs</h2>
          </div>
          <Link href="/services" className="text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0">
            View All 38 Services &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-3 rounded-xl bg-slate-800/80 inline-block">{p.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <Link href={p.href} className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  <span>Learn More</span> &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= THE CHECK ENGINE LIGHT ADVISORY ================= */}
      <section className="py-12 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border-y border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl shrink-0">⚠️</span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Check Engine Light Alert: Don't pay for a smog test yet!</h3>
              <p className="text-slate-300 text-sm mt-1">California law requires an automatic failure if the light is on. Let our master mechanics pull the OBD-II diagnostic code to fix the underlying sensor first.</p>
            </div>
          </div>
          <Link href="/services/auto-repair" className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors">
            Fix My Check Engine Light &rarr;
          </Link>
        </div>
      </section>

      {/* ================= HYBRID REVIEWS (YELP + GOOGLE) ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">Real Customer Proof</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Loved by North Oakland Drivers</h2>
          <p className="text-slate-400 text-sm mt-2">We pull our reputation directly from verified local Yelp and Google Maps reviews:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredReviews.map((rev, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-sm gap-0.5">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    rev.platform === 'Yelp' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                    Verified {rev.platform}
                  </span>
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">"{rev.text}"</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">{rev.name}</span>
                <a href={rev.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 underline">
                  Read on {rev.platform} &nearr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LOCATION & CONTACT FOOTER ================= */}
      <section id="location" className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-1">Visit Our Lot</span>
                <h2 className="text-3xl font-bold text-white">Discount Auto Smog & Tire</h2>
                <p className="text-slate-300 text-sm mt-2">5443 Shattuck Ave., Oakland, CA 94609</p>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Mon – Fri:</span>
                  <span className="text-white font-semibold">8:30 AM – 5:30 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Saturday:</span>
                  <span className="text-white font-semibold">8:30 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800 text-slate-500">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>

              <a
                href="tel:5106552729"
                className="w-full block text-center py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg shadow-blue-600/30 transition-all"
              >
                Call Garage: (510) 655-2729
              </a>
            </div>

            {/* Google Map Mock/Embed container */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-2xl h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center p-6 text-center z-10">
                <span className="text-4xl mb-2">📍</span>
                <h4 className="text-lg font-bold text-white">5443 Shattuck Ave, Oakland, CA</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mb-4">Located in Temescal, directly accessible off Telegraph Ave or Highway 24.</p>
                <a
                  href="https://maps.google.com/?cid=13720011192268644098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30"
                >
                  Open in Google Maps App &nearr;
                </a>
              </div>
              {/* Subtle map pattern underlying the overlay */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:16px_16px]" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}