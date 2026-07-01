import Link from 'next/link';

// Live status
import ShopStatusBadge from '@/app/components/ShopStatusBadge';

export const metadata = {
  title: 'Discount Auto Smog & Tire | Premium Tire Shop & Auto Repair Oakland',
  description: 'Oakland\'s premier tire replacement and laser wheel alignment center. Complete auto repair and STAR-certified DMV smog checks at 5443 Shattuck Ave.',
};

// Hybrid Review Data (Hand-curated Yelp highlights + Google Trust)
const featuredReviews = [
  {
    name: "Sarah L.",
    platform: "Google",
    rating: 5,
    date: "A month ago",
    text: "Hit a massive Oakland pothole and my steering wheel started shaking. They got me in immediately, did a full laser wheel alignment, and showed me exactly where the camber was off. Honest, fast, and very fair pricing.",
    url: "https://maps.google.com/?cid=13720011192268644098"
  },
  {
    name: "Marcus V.",
    platform: "Yelp",
    rating: 5,
    date: "Two weeks ago",
    text: "My check engine light came on right before I needed my DMV smog renewal. Brought it to Discount Auto on Shattuck—they diagnosed a bad O2 sensor, replaced it same-day, and passed my smog instantly. Total lifesavers.",
    url: "https://www.yelp.com/biz/discount-auto-and-smog-center-oakland-5"
  },
  {
    name: "David K.",
    platform: "Yelp",
    rating: 5,
    date: "Three months ago",
    text: "Best tire buying experience in the East Bay. Called in for a set of Michelins, they gave me a quote over the phone, and had them mounted and balanced perfectly the next morning.",
    url: "https://www.yelp.com/biz/discount-auto-and-smog-center-oakland-5"
  }
];

// REORDERED: Tires are now the absolute priority.
const pillars = [
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
    title: "Official Smog Inspection",
    desc: "STAR-certified DMV renewals, change of ownership, out-of-state transfers, and diesel emissions testing.",
    href: "/services/smog-check",
    badge: "15-Min Turnaround",
    icon: "💨"
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
    <div className="bg-white min-h-screen text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden border-b border-slate-200 bg-slate-50">
        {/* Light theme subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Live Open Status Bar - Light Theme */}
           <ShopStatusBadge />

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Oakland’s Premier <br />
              <span className="text-blue-600">Tire & Auto Center.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Top-tier tire sales, precision wheel alignment, honest mechanical diagnostics, and fast DMV smog testing at <strong>5443 Shattuck Ave</strong>. Get the right grip for East Bay roads.
            </p>

            {/* High-Converting Mobile Action Row */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:5106552729"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-600/20 transition-all transform active:scale-98"
              >
                <span className="text-2xl">📞</span>
                <span>Call (510) 655-2729</span>
              </a>
              <Link
                href="#location"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-lg transition-all shadow-sm"
              >
                <span>📍 Get Directions</span>
              </Link>
            </div>

            {/* Quick Guarantees */}
            <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-xs sm:text-sm text-slate-500">
              <div><strong className="text-slate-900 block">✓ Huge Selection</strong> All major tire brands</div>
              <div><strong className="text-slate-900 block">✓ No Appt Needed</strong> Same-day drive-ups</div>
              <div><strong className="text-slate-900 block">✓ STAR Certified</strong> Fast CA smog testing</div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4 CORE PILLARS MENU ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">Our Departments</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Everything Your Car Needs</h2>
          </div>
          <Link href="/services" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0">
            View All 38 Services &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-3 rounded-xl bg-slate-50 border border-slate-100 inline-block">{p.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link href={p.href} className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  <span>Learn More</span> &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= THE NEW POTHOLE/ALIGNMENT ADVISORY ================= */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl shrink-0">⚠️</span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Pothole Alert: Don't ruin a brand new set of tires!</h3>
              <p className="text-slate-700 text-sm mt-1">Oakland roads are notoriously rough. A bad alignment will grind the inside of new tires to the steel belts in months. We mount, high-speed balance, and laser-align your car in one trip.</p>
            </div>
          </div>
          <Link href="/services/tires" className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-sm transition-colors shadow-sm">
            Check My Wheel Alignment &rarr;
          </Link>
        </div>
      </section>

      {/* ================= HYBRID REVIEWS (YELP + GOOGLE) ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-1">Real Customer Proof</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Loved by North Oakland Drivers</h2>
          <p className="text-slate-600 text-sm mt-2">We pull our reputation directly from verified local Yelp and Google Maps reviews:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredReviews.map((rev, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-sm gap-0.5">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    rev.platform === 'Yelp' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-blue-50 text-blue-700 border border-blue-100'
                  }`}>
                    Verified {rev.platform}
                  </span>
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">"{rev.text}"</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="font-bold text-slate-900">{rev.name}</span>
            <a href={rev.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 underline">
              Read on {rev.platform} ↗
            </a>
          </div>
                      </div>
          ))}
        </div>
      </section>

      {/* ================= LOCATION & CONTACT FOOTER ================= */}
      <section id="location" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">Visit Our Lot</span>
                <h2 className="text-3xl font-bold text-slate-900">Discount Auto Smog & Tire</h2>
                <p className="text-slate-600 text-sm mt-2">5443 Shattuck Ave., Oakland, CA 94609</p>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Mon – Fri:</span>
                  <span className="text-slate-900 font-semibold">8:30 AM – 5:30 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Saturday:</span>
                  <span className="text-slate-900 font-semibold">8:30 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 text-slate-400">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>

              <a
                href="tel:5106552729"
                className="w-full block text-center py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-600/20 transition-all"
              >
                Call Garage: (510) 655-2729
              </a>
            </div>

            {/* Google Map Mock/Embed container */}
            <div className="lg:col-span-7 bg-slate-100 border border-slate-200 rounded-2xl p-3 shadow-sm h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10">
                <span className="text-4xl mb-2">📍</span>
                <h4 className="text-lg font-bold text-slate-900">5443 Shattuck Ave, Oakland, CA</h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mb-4">Located in Temescal, directly accessible off Telegraph Ave or Highway 24.</p>
                <a
                  href="https://maps.google.com/?cid=13720011192268644098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center gap-2"
                >
                  Open in Google Maps App
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
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