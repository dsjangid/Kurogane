import React, { useState } from 'react';
import { weaponsData } from '../data/kuroganeData';
import ChamferCard from './ChamferCard';
import ScrollReveal from './ScrollReveal';

export default function ArsenalSection() {
  const [activeWeapon, setActiveWeapon] = useState(weaponsData[0].id);

  return (
    <section id="sec-04" className="min-h-[calc(100vh-3rem)] bg-[#070709] text-white p-6 md:p-12 lg:p-14 flex flex-col justify-between relative border-b border-white/10">
      {/* Top Section Header */}
      <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3.5 mb-8 text-white/50">
        <div className="flex items-center gap-2">
          <span className="text-[#e53e3e] font-bold">▶</span>
          <span className="font-bold text-white tracking-wider">04 // ARSENAL</span>
        </div>
        <div className="text-[11px] tracking-wider uppercase">
          TIER II CLEARANCE REQUIRED
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column: Big Forged Weapons Visual Card */}
        <div className="lg:col-span-6">
          <ScrollReveal delay={0.15} y={40}>
            <ChamferCard cutSize={32} bgClass="bg-[#0d0d11] p-3 shadow-xl overflow-hidden">
              <div className="relative aspect-[4/3] w-full bg-black overflow-hidden border border-white/5 [clip-path:polygon(24px_0,100%_0,100%_100%,0_100%,0_24px)]">
                <img
                  src="/assets/arsenal_blades.png"
                  alt="Forged Arsenal Blades"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Laser line overlay */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#e53e3e]/80" />

                <div className="absolute top-3 right-3 text-[10px] font-mono text-white/60 px-2 py-0.5 bg-black/80 border border-white/10">
                  FORGED MATRIX // 04
                </div>
              </div>
            </ChamferCard>
          </ScrollReveal>
        </div>

        {/* Right Column: Title, Subtext & Clean Rectangular Weapon Rows */}
        <div className="lg:col-span-6 space-y-5">
          <ScrollReveal delay={0.05}>
            <div>
              <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-2">
                EVERY BLADE IS A LIABILITY
              </h2>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed font-sans max-w-xl">
                Nothing in the arsenal is free. Heavier ordnance slows the frame, draws attention and costs you the extraction window. Choose what you can afford to carry back.
              </p>
            </div>
          </ScrollReveal>

          {/* Clean Rectangular Weapon List Rows with Staggered Upward Reveal */}
          <div className="space-y-2.5 pt-2">
            {weaponsData.map((weapon, idx) => {
              const isSelected = activeWeapon === weapon.id;
              return (
                <ScrollReveal key={weapon.id} delay={0.15 + idx * 0.08} y={20}>
                  <div
                    onMouseEnter={() => setActiveWeapon(weapon.id)}
                    className={`p-3.5 border transition-colors duration-150 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#14141c] border-[#e53e3e]'
                        : 'bg-[#0d0d11] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="pl-1">
                      <h3 className="font-mono font-bold text-xs md:text-sm text-white tracking-wider mb-0.5">
                        {weapon.name}
                      </h3>
                      <p className="text-white/50 text-[11px] font-sans">
                        {weapon.description}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1.5 font-mono text-right flex-shrink-0 pl-4">
                      <span className="text-[10px] text-white/40">DMG</span>
                      <span className={`text-sm md:text-base font-extrabold ${isSelected ? 'text-[#e53e3e]' : 'text-white'}`}>
                        {weapon.damage}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
