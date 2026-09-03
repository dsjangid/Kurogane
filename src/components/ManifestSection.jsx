import React from 'react';
import { manifestoPillars } from '../data/kuroganeData';
import ScrollReveal from './ScrollReveal';

export default function ManifestSection() {
  return (
    <section
      id="sec-02"
      className="min-h-[calc(100vh-3rem)] w-full bg-[#eae8e3] text-[#141416] p-6 md:p-12 lg:p-14 flex flex-col justify-between relative border-b border-black/10 transition-colors duration-300"
    >
      {/* Top Section Header */}
      <div className="flex items-center justify-between text-xs font-mono border-b border-black/15 pb-3.5 mb-8 text-[#666562]">
        <div className="flex items-center gap-2">
          <span className="text-[#e53e3e] font-bold">▶</span>
          <span className="font-bold text-[#141416] tracking-wider">02 // MANIFEST</span>
        </div>
        <div className="text-[11px] tracking-widest uppercase">
          UNCLASSIFIED // ARCHIVAL RESEARCH
        </div>
      </div>

      {/* Main Grid: Left Typography & 4 Pillars, Right Ronin Character Plate */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto w-full">
        {/* Left Column: Headline + 4 Clean Numbered Rows */}
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal delay={0.05}>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#141416] tracking-tight leading-[1.15] mb-4">
              The Bushidō code was written for men. <span className="text-[#141416] font-black">KUROGANE</span> asks whether it still holds when the body is forged steel.
            </h2>
          </ScrollReveal>

          {/* 4 Clean Numbered Rows with Staggered Upward Reveal */}
          <div className="space-y-3 pt-2">
            {manifestoPillars.map((pillar, idx) => (
              <ScrollReveal key={pillar.number} delay={0.12 + idx * 0.08} y={24}>
                <div className="grid grid-cols-12 gap-4 py-3.5 border-t border-black/10 items-start">
                  <div className="col-span-1 font-mono text-xs font-bold text-[#e53e3e]">
                    {pillar.number}
                  </div>
                  <div className="col-span-11 space-y-0.5">
                    <h3 className="font-mono font-bold text-xs md:text-sm text-[#141416] uppercase tracking-wider">
                      {pillar.title}
                    </h3>
                    <p className="text-[#5a5855] text-xs leading-relaxed font-sans max-w-xl">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right Column: Full-Length Ronin Character Plate */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <ScrollReveal delay={0.25} y={40}>
            <div className="border border-black/20 bg-white/80 p-5 shadow-lg max-w-sm w-full relative">
              {/* Corner Ticks */}
              <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-black/40" />
              <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-black/40" />
              <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-black/40" />
              <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-black/40" />

              <div className="aspect-[3/4] w-full overflow-hidden flex items-center justify-center mb-3">
                <img
                  src="./assets/manifest_ronin.png"
                  alt="Chassis Ronin Ashfall Trials"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#666562] border-t border-black/10 pt-2.5">
                <span>PLATE 02 // CHASSIS "RONIN" ASHFALL TRIALS</span>
                <span className="text-[#e53e3e] font-bold">REF SUB-2</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Sub-tag */}
      <div className="pt-6 border-t border-black/10 flex items-center justify-between text-[10px] font-mono text-[#777572]">
        <span>ARCHIVE DECLASSIFIED // PILOT SYNC: 100%</span>
        <span>SCROLL TO ADVANCE // 03</span>
      </div>
    </section>
  );
}
