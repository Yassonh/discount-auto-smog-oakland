"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services Hub', href: '/services' },
  { name: 'Smog Check', href: '/services/smog-check' },
  { name: 'Tires & Wheels', href: '/services/tires' },
  { name: 'Auto Repair', href: '/services/auto-repair' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Brand / Logo */}
          <Link 
            href="/" 
            className="flex flex-col shrink-0 focus:outline-none group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
              DISCOUNT AUTO
            </span>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-blue-500 uppercase font-semibold -mt-1">
              Smog & Tire • Oakland
            </span>
          </Link>

          {/* 2. Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive 
                      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* 3. Persistent Emergency / Call Action (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right hidden xl:block">
              <span className="block text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                ✓ Drive-ups Welcome
              </span>
              <span className="text-xs text-slate-400 font-medium">
                5443 Shattuck Ave.
              </span>
            </div>
            <a
              href="tel:5106552729"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all transform active:scale-95"
            >
              <span>📞 (510) 655-2729</span>
            </a>
          </div>

          {/* Mobile Phone Icon + Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="tel:5106552729"
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-md shadow-blue-600/30 transition-all"
              aria-label="Call Garage"
            >
              📞
            </a>
            
            <button
              type="button"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 focus:outline-none transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-8 space-y-3 animate-fadeIn">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-500 px-3 pt-2">
            Navigation Menu
          </div>
          
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800/80 space-y-3">
            <div className="px-3 text-xs text-slate-400">
              📍 <strong className="text-slate-200">Location:</strong> 5443 Shattuck Ave, Oakland
            </div>
            <div className="px-3 text-xs text-slate-400">
              🕒 <strong className="text-slate-200">Hours:</strong> Mon-Fri 8:30-5:30 • Sat 8:30-4
            </div>
            
            <a
              href="tel:5106552729"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-600/30"
            >
              <span>Call Garage Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}