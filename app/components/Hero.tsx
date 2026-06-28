import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-slate-50 overflow-hidden py-20 lg:py-32 border-b border-slate-200">
      {/* Subtle background grid pattern for a clean, modern aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Geolocation Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Serving North Oakland & the East Bay
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Premium Tires & <br />
            <span className="text-blue-600">Reliable Auto Care.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600">
            Top-tier tire sales, precision wheel alignment, and honest mechanical diagnostics at 5443 Shattuck Ave. Get the right grip for East Bay roads.
          </p>

          {/* High-Intent Action Row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:5106552729"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Call (510) 655-2729
            </a>
            <Link
              href="#directions"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-lg hover:bg-slate-50 transition-colors shadow-sm"
            >
              Get Directions & Hours
            </Link>
          </div>

          {/* Quick-Glance Info under buttons */}
          <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-500">
            <div>
              <strong className="text-slate-900 block">Today's Hours</strong>
              8:30 AM – 5:30 PM
            </div>
            <div>
              <strong className="text-slate-900 block">Tires & Alignment</strong>
              All Major Brands
            </div>
            <div>
              <strong className="text-slate-900 block">No Appt Needed</strong>
              Drop-ins welcome
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}