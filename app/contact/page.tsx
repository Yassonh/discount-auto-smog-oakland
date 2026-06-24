import Link from 'next/link';

export const metadata = {
  title: 'Contact & Directions | Discount Auto Smog & Tire Oakland',
  description: 'Get directions to Discount Auto Smog & Tire at 5443 Shattuck Ave, Oakland, CA. Call (510) 655-2729 to speak with a mechanic today.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Located right off Telegraph Ave in the Temescal neighborhood. Drop by for a fast smog check or call ahead for master mechanic availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Details Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-8">
              <div>
                <span className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Direct Line</span>
                <a href="tel:5106552729" className="text-3xl font-black text-blue-400 hover:text-blue-300 transition-colors">
                  (510) 655-2729
                </a>
              </div>
              
              <div>
                <span className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Garage Location</span>
                <p className="text-xl text-slate-200 font-medium">
                  5443 Shattuck Ave.<br />
                  Oakland, CA 94609
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <span className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">Business Hours</span>
                <ul className="text-slate-300 space-y-3 text-sm">
                  <li className="flex justify-between items-center bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                    <span className="font-semibold">Monday - Friday</span> 
                    <span className="text-white">8:30 AM – 5:30 PM</span>
                  </li>
                  <li className="flex justify-between items-center bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                    <span className="font-semibold">Saturday</span> 
                    <span className="text-white">8:30 AM – 4:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center px-4 py-2 text-slate-500">
                    <span>Sunday</span> 
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Interactive Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 h-full min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center p-6 text-center z-10 backdrop-blur-sm">
              <span className="text-5xl mb-4">📍</span>
              <h4 className="text-2xl font-bold text-white mb-2">Shattuck Ave Garage</h4>
              <p className="text-sm text-slate-400 mb-6 max-w-xs">Tap below to open native navigation on your device.</p>
              <a
                href="https://maps.google.com/?cid=13720011192268644098"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30"
              >
                Open Google Maps &nearr;
              </a>
            </div>
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] bg-[size:24px_24px]" />
          </div>

        </div>
      </div>
    </div>
  );
}