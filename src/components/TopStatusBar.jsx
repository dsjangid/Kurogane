import React from 'react';

export default function TopStatusBar({ sectionTag = '01 // DEPLOYMENT' }) {
  return (
    <header className="h-12 bg-[#121218] border-b border-white/10 px-6 flex items-center justify-between font-mono text-xs select-none sticky top-0 z-30 flex-shrink-0">
      {/* Current Section Tag */}
      <div className="flex items-center gap-3 text-white/90">
        <span className="text-[#e53e3e] font-bold">▶</span>
        <span className="tracking-widest uppercase font-semibold">{sectionTag}</span>
      </div>

      {/* Right Server Status Badge */}
      <div className="flex items-center gap-4 text-[11px] text-white/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#80b82c] animate-pulse" />
          <span className="text-white/80 font-medium tracking-wider">SERVERS ONLINE</span>
        </div>
        <span className="text-white/20">|</span>
        <span className="text-white/40 tracking-wider">BUILD 0.8.4.4</span>
      </div>
    </header>
  );
}
// Mobile drawer optimization
