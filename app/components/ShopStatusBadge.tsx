"use client";

import { useEffect, useState } from 'react';

export default function ShopStatusBadge() {
  const [status, setStatus] = useState({ text: "Checking...", color: "bg-gray-400" });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      // Force California Timezone
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });

      const parts = formatter.formatToParts(now);
      const findPart = (type: string) => parts.find(p => p.type === type)?.value || '';
      
      const day = findPart('weekday');
      const hour = parseInt(findPart('hour'), 10);
      const minute = parseInt(findPart('minute'), 10);
      const time = hour + minute / 60;

      // Business Hours
      let open = 8.5; // 8:30
      let close = 17.5; // 17:30 (5:30 PM)

      if (day === 'Sunday') {
        setStatus({ text: "CLOSED TODAY", color: "bg-red-500" });
        return;
      }
      if (day === 'Saturday') {
        close = 16.0; // 4:00 PM
      }

      const isClosingSoon = time >= close - 0.5 && time < close;
      const isOpen = time >= open && time < close;

      if (isOpen) {
        setStatus({ 
          text: isClosingSoon ? "CLOSING SOON" : "OPEN NOW", 
          color: isClosingSoon ? "bg-amber-500" : "bg-emerald-500" 
        });
      } else {
        setStatus({ text: "CLOSED NOW", color: "bg-red-500" });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
      <span className={`w-2.5 h-2.5 rounded-full ${status.color} animate-pulse shrink-0`} />
      <span className="text-slate-600">Shop Status:</span>
      <span className="text-slate-900 font-bold">{status.text}</span>
    </div>
  );
}