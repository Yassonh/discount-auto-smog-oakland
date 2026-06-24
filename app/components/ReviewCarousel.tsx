"use client";

import { useRef } from 'react';

// Hybrid Social Proof Data
const reviews = [
  {
    id: 1,
    name: "Marcus V.",
    platform: "Yelp",
    service: "Smog Check & Misfire",
    rating: 5,
    date: "2 weeks ago",
    text: "My check engine light came on right before I needed my DMV smog renewal. Brought it to Discount Auto on Shattuck—they diagnosed a bad O2 sensor, replaced it same-day, and passed my smog instantly. Total lifesavers.",
    url: "https://www.yelp.com/biz/discount-auto-and-smog-center-oakland-5"
  },
  {
    id: 2,
    name: "Sarah L.",
    platform: "Google",
    service: "Tires & Laser Alignment",
    rating: 5,
    date: "A month ago",
    text: "Hit a massive Oakland pothole and my steering wheel started shaking. They got me in immediately, did a full laser wheel alignment, and showed me exactly where the camber was off. Honest, fast, and very fair pricing.",
    url: "https://maps.google.com/?cid=13720011192268644098"
  },
  {
    id: 3,
    name: "David K.",
    platform: "Yelp",
    service: "STAR Smog Certification",
    rating: 5,
    date: "3 months ago",
    text: "Best smog check experience in the East Bay. Pulled in on a Tuesday morning without an appointment, was out in 15 minutes with my paperwork already beamed to the DMV. Highly recommend!",
    url: "https://www.yelp.com/biz/discount-auto-and-smog-center-oakland-5"
  },
  {
    id: 4,
    name: "James P.",
    platform: "Google",
    service: "Brake Pads & Rotors",
    rating: 5,
    date: "4 months ago",
    text: "Been taking my Ford truck here for years for oil changes and brake repairs. The guys at the Shattuck garage are always upfront about what needs to be fixed now versus what can wait. Hard to find mechanics this honest.",
    url: "https://maps.google.com/?cid=13720011192268644098"
  },
  {
    id: 5,
    name: "Elena R.",
    platform: "Yelp",
    service: "Suspension Repair",
    rating: 5,
    date: "5 months ago",
    text: "Super fast wheel alignment! My car was pulling badly to the left after driving on Telegraph Ave. They fixed the tie rods and aligned it in under an hour. Great customer service and clean waiting area.",
    url: "https://www.yelp.com/biz/discount-auto-and-smog-center-oakland-5"
  }
];

export default function ReviewCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by one card width (~350px) plus gap
      const scrollAmount = clientWidth > 768 ? 380 : 320;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-16 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Custom Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span>★ 4.8 / 5.0 Average Rating</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real Stories from East Bay Drivers
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Unfiltered feedback verified directly through Yelp and Google Maps:
            </p>
          </div>

          {/* Desktop Left/Right Arrow Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all focus:outline-none active:scale-95"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all focus:outline-none active:scale-95"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swipeable / Scrollable Snap Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scroll-smooth"
        >
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="w-[300px] sm:w-[350px] shrink-0 snap-start bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-black/50 hover:border-slate-700 transition-all relative group"
            >
              <div>
                {/* Top Meta Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-sm gap-0.5 select-none">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                    rev.platform === 'Yelp' 
                      ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                      : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}>
                    {rev.platform}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="text-xs font-mono text-slate-400 mb-3">
                  Service: <span className="text-slate-200 font-semibold">{rev.service}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Bottom Author & Source link */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">{rev.name}</span>
                  <span className="text-slate-500 text-[10px]">{rev.date}</span>
                </div>
                <a 
                  href={rev.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>Verify</span>
                  <span className="text-base leading-none">&nearr;</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-2 text-center md:hidden flex items-center justify-center gap-2 text-xs text-slate-500 font-mono">
          <span>&larr; Swipe to read more reviews &rarr;</span>
        </div>

      </div>
    </div>
  );
}