"use client";

import { useEffect, useState } from 'react';

export default function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 200px so it doesn't collide with the Hero CTA
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:hidden animate-bounce-short">
      <a
        href="tel:5106552729"
        className="flex items-center gap-2 px-5 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-base tracking-wide shadow-2xl shadow-blue-600/60 border-2 border-white/20 transform active:scale-95 transition-all"
        aria-label="Call Garage directly"
      >
        <span className="text-2xl leading-none">📞</span>
        <span>(510) 655-2729</span>
      </a>
    </div>
  );
}