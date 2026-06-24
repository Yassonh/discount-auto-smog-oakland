import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-20 lg:py-32">
      {/* Subtle background grid pattern for an "industrial" feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Geolocation Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Serving North Oakland & the East Bay
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
            Fast Smog Checks & <br />
            <span className="text-blue-500">Reliable Auto Care.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300">
            Official CA Smog testing, tire replacement, and full-service diagnostics at 5443 Shattuck Ave. Get in, get fixed, get back on the road.
          </p>

          {/* High-Intent Action Row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:5106552729"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
            >
              Call (510) 655-2729
            </a>
            <Link
              href="#directions"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-lg hover:bg-slate-800 transition-colors"
            >
              Get Directions & Hours
            </Link>
          </div>

          {/* Quick-Glance Info under buttons */}
          <div className="mt-8 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-400">
            <div>
              <strong className="text-slate-200 block">Today's Hours</strong>
              8:30 AM – 5:30 PM
            </div>
            <div>
              <strong className="text-slate-200 block">DMV Smog</strong>
              All Vehicles & RVs
            </div>
            <div>
              <strong className="text-slate-200 block">No Appt Needed</strong>
              Drop-ins welcome
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}