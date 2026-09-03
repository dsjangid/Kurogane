import React from 'react';
import { telemetryStats } from '../data/kuroganeData';
import ChamferCard from './ChamferCard';
import ScrollReveal from './ScrollReveal';

export default function TelemetrySection() {
  return (
    <section id="sec-05" className="min-h-[calc(100vh-3rem)] bg-[#070709] text-white p-6 md:p-12 lg:p-14 flex flex-col justify-between relative border-b border-white/10">
      {/* Top Section Header */}
      <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3.5 mb-8 text-white/50">
        <div className="flex items-center gap-2">
          <span className="text-[#e53e3e] font-bold">▶</span>
          <span className="font-bold text-white tracking-wider">05 // TELEMETRY</span>
        </div>
        <div className="text-[11px] tracking-wider uppercase">
          ROLLING 30 DAYS
        </div>
      </div>

      {/* Main Title & Description */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <ScrollReveal delay={0.05}>
          <div>
            <h2 className="font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-2">
              FIELD DATA
            </h2>
            <p className="text-white/40 font-mono text-[11px]">ASHFALL CLOSED BETA TELEMETRY</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="max-w-md text-white/60 text-xs md:text-sm leading-relaxed font-sans">
            Pulled live from the Ashfall closed beta. Every duel, extraction and total loss is logged against the frame that walked in.
          </p>
        </ScrollReveal>
      </div>

      {/* Major Big Chart & Metrics Container */}
      <ScrollReveal delay={0.2} y={35}>
        <ChamferCard cutSize={36} bgClass="bg-[#0d0d11] p-6 md:p-8 shadow-xl my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Dynamic SVG Spline Chart */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/50 border-b border-white/10 pb-2.5 pl-6">
                <div className="flex items-center gap-2 text-[#e53e3e]">
                  <span className="w-1.5 h-1.5 bg-[#e53e3e] rounded-full animate-pulse" />
                  <span>SESSION TELEMETRY // STREAMS</span>
                </div>
                <span className="text-white/30">NODE 710.02</span>
              </div>

              {/* SVG Graph */}
              <div className="relative w-full h-44 sm:h-52 bg-black/70 border border-white/5 p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-4 opacity-10">
                  <div className="w-full h-[1px] bg-white" />
                  <div className="w-full h-[1px] bg-white" />
                  <div className="w-full h-[1px] bg-white" />
                </div>

                {/* Spline Wave */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="kuroRedGlowFlat" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e53e3e" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#e53e3e" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 0,110 C 60,115 100,50 160,85 C 220,120 280,30 350,45 C 420,60 460,20 500,25 L 500,150 L 0,150 Z"
                    fill="url(#kuroRedGlowFlat)"
                  />

                  <path
                    d="M 0,110 C 60,115 100,50 160,85 C 220,120 280,30 350,45 C 420,60 460,20 500,25"
                    fill="none"
                    stroke="#e53e3e"
                    strokeWidth="2.5"
                  />

                  <circle cx="350" cy="45" r="3.5" fill="#ffffff" stroke="#e53e3e" strokeWidth="2" />
                </svg>

                {/* X-Axis Labels */}
                <div className="flex justify-between text-[10px] font-mono text-white/30 pt-2 border-t border-white/5">
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                  <span>04</span>
                  <span className="text-[#e53e3e] font-bold">NOW</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Clean Rectangular Metric Boxes */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              {telemetryStats.map((stat, idx) => (
                <div key={idx} className="p-3.5 bg-black/50 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white/40">{stat.label}</span>
                    <span className={`text-[10px] font-mono font-bold ${stat.positive ? 'text-[#e53e3e]' : 'text-white/60'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="font-orbitron font-extrabold text-2xl text-white tracking-wide">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ChamferCard>
      </ScrollReveal>
    </section>
  );
}
