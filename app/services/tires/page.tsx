import Link from 'next/link';

export const metadata = {
  title: 'Tire Shop & Laser Wheel Alignment Oakland | Discount Auto Smog & Tire',
  description: 'New auto tire replacement, computerized wheel alignment, high-speed balancing, and tire rotations in North Oakland. We carry all major brands for East Bay roads.',
};

const tireServices = [
  {
    id: 'replacement',
    title: 'New Auto Tire Replacement',
    desc: 'From daily-driver all-seasons to high-performance summer rubber and heavy-duty truck tires. We source all major brands (Michelin, Goodyear, Continental, Pirelli, and budget-friendly options) to fit your exact wheel spec.',
    price: 'Call for exact spec pricing',
    badge: 'All Brands'
  },
  {
    id: 'alignment',
    title: 'Computerized Wheel Alignment',
    desc: 'East Bay potholes knock your suspension out of true, causing your car to drift to the side and literally shredding the inside of your tires. Our precision laser alignment restores your vehicle to factory geometry.',
    price: 'Recommended with new tires',
    badge: 'Crucial for Oakland Roads'
  },
  {
    id: 'rotation',
    title: 'Tire Rotation & High-Speed Balance',
    desc: 'Front tires carry the weight of the engine and do the steering; they wear out twice as fast as the rears. Rotating and balancing them every 5,000 to 7,000 miles literally doubles the lifespan of your set.',
    price: 'Fast Drop-in Service',
    badge: null
  },
  {
    id: 'repair',
    title: 'Flat Repair & TPMS Sensor Reset',
    desc: 'Picked up a nail on the highway? If the puncture is inside the safe central tread zone, we will professionally plug, patch, and seal it from the inside out, then reset your dashboard Tire Pressure warning light.',
    price: 'Safety Inspected',
    badge: null
  }
];

const roadHazards = [
  { symptom: "Steering wheel vibrates at 60+ MPH", diagnosis: "Your wheels are out of balance." },
  { symptom: "Car gently pulls to the left or right", diagnosis: "You need a Laser Wheel Alignment." },
  { symptom: "Squealing sound when taking tight corners", diagnosis: "Tires are under-inflated or tread is hardened." },
  { symptom: "The 'Inside' of the tire is bald, outside looks fine", diagnosis: "Severe negative camber (Alignment issue)." },
];

export default function TiresPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pb-20">
      
      {/* 1. Hero Section */}
      <div className="relative bg-slate-50 pt-16 pb-12 border-b border-slate-200">
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href="/services" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
              &larr; All Services
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-xs uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-100">
              Complete Wheel & Tire Department
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-none">
                East Bay Tire Sales & <br />
                <span className="text-blue-600">Precision Alignments</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                Don’t let bad alignment destroy a brand new set of rubber. We mount, high-speed balance, and laser-align your car in one trip at 5443 Shattuck Ave.
              </p>
            </div>

            {/* High-Converting CTA Box */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Need a quote on a set of 4?</h3>
              <p className="text-sm text-slate-600 mb-4">Because tire prices fluctuate daily by brand, call us directly with your size for today's lowest warehouse price.</p>
              
              <a 
                href="tel:5106552729"
                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-600/20 transition-all"
              >
                <span>Call for Tire Pricing &rarr;</span>
              </a>
              <div className="text-center text-xs text-slate-500 mt-3 font-mono">
                Direct Line: (510) 655-2729
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. THE MECHANIC'S SECRET WEAPON: The Sidewall Translator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
              Save time on the phone
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-3">How to find your exact tire size in 10 seconds:</h3>
            <p className="text-slate-600 text-sm mt-1">Walk over to your car and look at the side of your front tire. You will see raised rubber lettering that looks like this example:</p>
          </div>

          {/* Visual Sidewall Graphic */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 my-6 font-mono text-center overflow-x-auto shadow-sm">
            <div className="inline-flex items-center gap-2 sm:gap-4 text-xl sm:text-3xl font-black tracking-wider select-all py-2 px-4 rounded bg-slate-50 border border-slate-200 text-slate-800">
              <span className="underline decoration-blue-500">215</span>
              <span className="text-slate-400">/</span>
              <span className="underline decoration-emerald-500">55</span>
              <span className="text-slate-400">R</span>
              <span className="underline decoration-amber-500">17</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 max-w-md mx-auto mt-4 text-xs font-sans">
              <div className="text-blue-600 font-semibold">1. Width <span className="block text-[10px] text-slate-500">(e.g., 215)</span></div>
              <div className="text-emerald-600 font-semibold">2. Aspect <span className="block text-[10px] text-slate-500">(e.g., 55)</span></div>
              <div className="text-amber-600 font-semibold">3. Wheel Size <span className="block text-[10px] text-slate-500">(e.g., 17")</span></div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 text-center">
            💡 <strong className="text-slate-900">Just read us those three numbers</strong> when you call. We will instantly tell you what we have in stock and the exact out-the-door price.
          </p>
        </div>
      </div>

      {/* 3. Main Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Tire & Suspension Services</h2>
          <p className="text-slate-600 mt-2">Complete undercarriage maintenance to keep your vehicle gripping the asphalt safely:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tireServices.map((service) => (
            <div key={service.id} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-200 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{service.price}</span>
                  {service.badge && (
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">📍 Shattuck Ave Garage</span>
                <a href="tel:5106552729" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Schedule this &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Symptom Checker (Great for organic search keywords) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-1">Oakland Pothole Symptom Diagnostic</h3>
          <p className="text-xs text-slate-600 mb-6">Match what your car is doing right now to the likely mechanical fix:</p>

          <div className="divide-y divide-slate-100">
            {roadHazards.map((item, idx) => (
              <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                <span className="text-slate-700 font-medium">"{item.symptom}"</span>
                <span className="text-blue-600 font-mono font-semibold shrink-0">&rarr; {item.diagnosis}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product-specific JSON Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Discount Auto Smog & Tire",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tire and Wheel Department",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auto Tire Replacement" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computerized Wheel Alignment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tire Rotation and Balance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flat Tire Patch Repair" } }
              ]
            }
          })
        }}
      />

    </div>
  );
}