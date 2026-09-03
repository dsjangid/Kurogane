import React from 'react';
import { kuroganeSections } from '../data/kuroganeData';

export default function NavigationRail({ activeSection, onSelectSection, scrollProgress }) {
  return (
    <aside className="w-16 md:w-20 bg-[#0a0a0e] border-r border-white/10 flex flex-col justify-between items-center py-6 select-none h-screen sticky top-0 z-40 flex-shrink-0">
      {/* Top Red Logo Square */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 bg-[#181820] border border-[#e53e3e] flex items-center justify-center text-[#e53e3e] cursor-pointer">
          <div className="w-2 h-2 bg-[#e53e3e]" />
        </div>

        {/* Vertical Kanji */}
        <div className="font-jp text-[13px] tracking-widest text-white/80 font-bold py-2 [writing-mode:vertical-rl]">
          黒鉄
        </div>
      </div>

      {/* Center Section Numbers 01 - 06 with Dynamic Red Scroll Progress Line */}
      <div className="relative flex flex-col items-center justify-between h-72 py-2">
        {/* Background Vertical Guide Track Line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/10 left-1/2 -translate-x-1/2" />

        {/* Active Red Progress Line that grows downwards as you scroll */}
        <div
          className="absolute top-0 w-[2px] bg-[#e53e3e] left-1/2 -translate-x-1/2 transition-all duration-100 ease-out"
          style={{ height: `${Math.max(8, scrollProgress * 100)}%` }}
        />

        {/* Section Number Points */}
        {kuroganeSections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`relative z-10 w-7 h-7 flex items-center justify-center font-mono text-[11px] transition-colors duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#0a0a0e] text-[#e53e3e] font-bold border border-[#e53e3e]'
                  : 'bg-[#0a0a0e] text-white/40 hover:text-white border border-transparent'
              }`}
            >
              {sec.code}
            </button>
          );
        })}
      </div>

      {/* Bottom Coordinates */}
      <div className="font-mono text-[9px] text-white/30 tracking-widest [writing-mode:vertical-rl] rotate-180">
        35.6762°N · NODE 74
      </div>
    </aside>
  );
}
