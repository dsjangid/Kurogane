import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function CtaSection({ onDeployClick, onWatchTrailerClick }) {
  return (
    <section id="sec-06" className="min-h-[calc(100vh-3rem)] bg-[#070709] text-white p-6 md:p-12 lg:p-14 flex flex-col justify-between relative border-b border-white/10 overflow-hidden">
      {/* Top Section Header */}
      <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3.5 mb-8 text-white/50 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-[#e53e3e] font-bold">▶</span>
          <span className="font-bold text-white tracking-wider">06 // ACCESS</span>
        </div>
        <div className="text-[11px] tracking-wider uppercase">
          ASHFALL CLOSED BETA PHASE 01
        </div>
      </div>

      {/* Center Cinematic Card */}
      <ScrollReveal delay={0.1} y={40} className="my-auto max-w-5xl mx-auto w-full">
        <div className="relative bg-[#0d0d11] border border-white/15 p-8 md:p-14 shadow-xl text-center w-full overflow-hidden">
          {/* Torii Gate Background */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <img
              src="/assets/arena_torii.png"
              alt="Torii Gate Arena"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-transparent to-[#0d0d11]/70" />
          </div>

          <div className="relative z-10 space-y-5 max-w-2xl mx-auto">
            {/* Phase Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e53e3e]/15 border border-[#e53e3e]/50 text-[#e53e3e] font-mono text-[10px] font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-[#e53e3e] rounded-full animate-ping" />
              <span>PHASE 01 // OPEN</span>
            </div>

            <h2 className="font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
              THE ASH IS OPEN
            </h2>

            <p className="text-white/80 text-xs md:text-sm leading-relaxed font-sans max-w-xl mx-auto">
              Closed beta is live on PC, PlayStation 5 and Xbox Series X|S. Bond a frame, take a contract, and try to walk back out.
            </p>

            {/* Clean Flat Rectangular Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onDeployClick}
                className="px-8 py-3 bg-[#e53e3e] hover:bg-[#ff2a2a] text-white font-mono font-bold text-xs tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer border border-[#e53e3e] rounded-none"
              >
                <span>▶</span>
                <span>DEPLOY NOW</span>
              </button>

              <button
                onClick={onWatchTrailerClick}
                className="px-6 py-3 bg-[#111116] hover:bg-[#181822] text-white border border-white/15 hover:border-white/30 font-mono text-xs tracking-wider transition-colors cursor-pointer rounded-none"
              >
                WATCH THE TRAILER
              </button>
            </div>

            {/* Platform Strip */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-white/50">
              <span>PC</span>
              <span>·</span>
              <span>PLAYSTATION 5</span>
              <span>·</span>
              <span>XBOX SERIES X|S</span>
              <span>·</span>
              <span className="text-[#e53e3e] font-bold">FREE TO ENTER</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
