import React, { useState } from 'react';
import { chassisData } from '../data/kuroganeData';
import ChamferCard from './ChamferCard';
import ScrollReveal from './ScrollReveal';

export default function HeroSection({ onDeployClick, onReadDossierClick }) {
  const [selectedFrame, setSelectedFrame] = useState(chassisData[0]);

  return (
    <section id="sec-01" className="min-h-[calc(100vh-3rem)] bg-[#070709] text-white p-6 md:p-12 lg:p-14 flex flex-col justify-between relative border-b border-white/10">
      {/* Main Grid: Left Details & Right Live Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 my-auto">
        {/* Left Column: Headline, Specs & Clean Rectangular Buttons */}
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal delay={0.05}>
            <h1 className="font-orbitron font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none mb-4">
              KUROGANE
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl font-sans">
              Bond to a frame. Walk into the ash. Everything you carry out is yours — everything you leave behind belongs to whoever finds it first.
            </p>
          </ScrollReveal>

          {/* Specs Table */}
          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-white/10 text-xs font-mono">
              <div>
                <span className="text-white/40 block mb-1">GENRE</span>
                <span className="text-white font-semibold">TACTICAL EXTRACTION</span>
              </div>
              <div>
                <span className="text-white/40 block mb-1">SQUAD</span>
                <span className="text-white font-semibold">5 v 5</span>
              </div>
              <div>
                <span className="text-white/40 block mb-1">PLATFORMS</span>
                <span className="text-white font-semibold">PC / PS5 / XSX</span>
              </div>
              <div>
                <span className="text-white/40 block mb-1">DEPLOY</span>
                <span className="text-[#e53e3e] font-semibold">11 : 24 : 28</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Clean Flat Rectangular Action Buttons */}
          <ScrollReveal delay={0.35}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onDeployClick}
                className="px-8 py-3 bg-[#e53e3e] hover:bg-[#ff2a2a] text-white font-mono font-bold text-xs tracking-widest uppercase transition-colors flex items-center gap-2.5 cursor-pointer rounded-none border border-[#e53e3e]"
              >
                <span className="text-[10px]">▶</span>
                <span>DEPLOY</span>
              </button>

              <button
                onClick={onReadDossierClick}
                className="px-6 py-3 bg-[#111116] hover:bg-[#181822] text-white/90 hover:text-white border border-white/15 hover:border-white/30 font-mono text-xs tracking-wider transition-colors cursor-pointer rounded-none"
              >
                READ DOSSIER
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Major Big Card (Keeps Top-Left Chamfer Cut) */}
        <div className="lg:col-span-5">
          <ScrollReveal delay={0.25} y={45}>
            <ChamferCard cutSize={28} bgClass="bg-[#0e0e13] p-4 shadow-xl">
              {/* Monitor Header */}
              <div className="flex items-center justify-between text-[11px] font-mono mb-3 border-b border-white/10 pb-2 pl-4">
                <div className="flex items-center gap-2 text-[#e53e3e]">
                  <span className="w-2 h-2 bg-[#e53e3e] rounded-full animate-pulse" />
                  <span className="font-bold">LIVE FEED</span>
                </div>
                <div className="text-white/40">FRAME 18 // SERIAL 07</div>
              </div>

              {/* Monitor Image Screen */}
              <div className="relative aspect-square w-full bg-black overflow-hidden border border-white/5 mb-3 [clip-path:polygon(20px_0,100%_0,100%_100%,0_100%,0_20px)]">
                <img
                  src={selectedFrame.image || '/assets/hero_ronin.png'}
                  alt="Ashfall Sector 07"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Info Inset */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between font-mono text-xs">
                  <div>
                    <div className="text-white font-bold tracking-wide">ASHFALL SECTOR 07</div>
                    <div className="text-[#e53e3e] text-[10px]">17:22:04 // SECTOR OPEN</div>
                  </div>
                  <div className="text-white/50 text-[10px]">
                    31.5204°N · 130.5571°E
                  </div>
                </div>
              </div>
            </ChamferCard>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Frame Select Carousel Dock */}
      <ScrollReveal delay={0.4} y={20}>
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs relative z-10">
          <div className="flex items-center gap-2 text-white/40">
            <span>FRAME SELECT</span>
            <span className="text-white font-bold">03 / 18</span>
          </div>

          {/* Chassis Selector Buttons */}
          <div className="flex items-center gap-3">
            {chassisData.map((chassis) => {
              const isSelected = selectedFrame.id === chassis.id;
              return (
                <button
                  key={chassis.id}
                  onClick={() => setSelectedFrame(chassis)}
                  className={`flex items-center gap-3 px-3.5 py-1.5 border transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#181822] border-[#e53e3e] text-white'
                      : 'bg-black/60 border-white/10 hover:border-white/20 text-white/60 hover:text-white'
                  }`}
                >
                  <div className="w-5 h-5 overflow-hidden bg-white/10 flex-shrink-0">
                    <img src={chassis.thumb} alt={chassis.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[11px] leading-tight">{chassis.name}</div>
                    <div className="text-[9px] text-white/40">{chassis.class}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <a href="#sec-03" className="text-white/50 hover:text-[#e53e3e] transition-colors text-[11px] tracking-wider">
            VIEW ALL FRAMES →
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
