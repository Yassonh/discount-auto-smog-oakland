"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Tires & Wheels', href: '/services/tires' },
  { name: 'Auto Repair', href: '/services/auto-repair' },
  { name: 'Smog Check', href: '/services/smog-check' },
  { name: 'All Services', href: '/services' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Brand / Logo */}
          <Link 
            href="/" 
            className="flex flex-col shrink-0 focus:outline-none group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              DISCOUNT AUTO
            </span>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-blue-600 uppercase font-semibold -mt-1">
              Tires & Smog • Oakland
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
                      ? 'bg-blue-50 text-blue-700 border border-blue-100' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* 3. Persistent Call Action */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right hidden xl:block">
              <span className="block text-[10px] font-mono text-emerald-600 uppercase tracking-widest font-bold">
                ✓ Drive-ups Welcome
              </span>
              <span className="text-xs text-slate-500 font-medium">
                5443 Shattuck Ave.
              </span>
            </div>
            <a
              href="tel:5106552729"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all transform active:scale-95"
            >
              <span>📞 (510) 655-2729</span>
            </a>
          </div>

          {/* Mobile Phone Icon + Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="tel:5106552729"
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-sm transition-all"
              aria-label="Call Garage"
            >
              📞
            </a>
            
            <button
              type="button"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 focus:outline-none transition-colors"
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-8 space-y-3 shadow-lg">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 px-3 pt-2">
            Navigation
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
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
            <div className="px-3 text-xs text-slate-500">
              📍 <strong className="text-slate-900">Location:</strong> 5443 Shattuck Ave, Oakland
            </div>
            
            <a
              href="tel:5106552729"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-md"
            >
              <span>Call Garage Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}