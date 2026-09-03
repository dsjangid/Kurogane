import React, { useState } from 'react';
import { chassisData } from '../data/kuroganeData';
import ChamferCard from './ChamferCard';
import ScrollReveal from './ScrollReveal';

export default function ChassisSection({ onSelectChassis }) {
  const [hoveredId, setHoveredId] = useState('tsubaki');

  return (
    <section id="sec-03" className="min-h-[calc(100vh-3rem)] bg-[#070709] text-white p-6 md:p-12 lg:p-14 flex flex-col justify-between relative border-b border-white/10">
      {/* Top Section Header */}
      <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3.5 mb-8 text-white/50">
        <div className="flex items-center gap-2">
          <span className="text-[#e53e3e] font-bold">▶</span>
          <span className="font-bold text-white tracking-wider">03 // FRAMES</span>
        </div>
        <div className="text-[11px] tracking-wider uppercase">
          18 CHASSIS // 3 CLASSES
        </div>
      </div>

      {/* Title & Description */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <ScrollReveal delay={0.05}>
          <div>
            <h2 className="font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-2">
              SELECT YOUR CHASSIS
            </h2>
            <p className="text-white/40 font-mono text-[11px]">CHASSIS SPECIFICATIONS & LOAD CAPACITY</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="max-w-md text-white/60 text-xs md:text-sm leading-relaxed font-sans">
            Every chassis is a different problem to solve. Weight decides what you can carry out of the zone. Silhouette decides whether anyone sees you go in.
          </p>
        </ScrollReveal>
      </div>

      {/* 3 Chassis Cards Grid with Staggered Upward Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {chassisData.map((chassis, idx) => {
          const isSelected = hoveredId === chassis.id;
          return (
            <ScrollReveal key={chassis.id} delay={0.15 + idx * 0.1} y={40}>
              <ChamferCard
                cutSize={32}
                isActive={isSelected}
                bgClass="bg-[#0d0d11] p-6 flex flex-col justify-between cursor-pointer"
                onMouseEnter={() => setHoveredId(chassis.id)}
                onClick={() => onSelectChassis && onSelectChassis(chassis)}
              >
                <div>
                  {/* Header Tag */}
                  <div className="flex items-center justify-between mb-4 pl-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isSelected ? 'bg-[#e53e3e] text-white' : 'bg-white/5 text-white/60 border border-white/10'
                    }`}>
                      {chassis.class}
                    </span>
                    <span className="font-jp text-sm text-white/40 font-bold">{chassis.kanji}</span>
                  </div>

                  {/* Character Frame Graphic */}
                  <div className="aspect-[4/3] w-full bg-black overflow-hidden border border-white/5 mb-6 [clip-path:polygon(20px_0,100%_0,100%_100%,0_100%,0_20px)]">
                    <img
                      src={chassis.image}
                      alt={chassis.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <div className="mb-5">
                    <h3 className="font-orbitron font-bold text-2xl text-white tracking-wider">
                      {chassis.name}
                    </h3>
                    <div className="font-mono text-[10px] text-white/40 tracking-widest mt-0.5">
                      FRAME_ID // {chassis.id.toUpperCase()}
                    </div>
                  </div>

                  {/* 10-Segment HUD Stat Bars */}
                  <div className="space-y-3 font-mono text-xs pb-5 border-b border-white/10">
                    {/* SPEED */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-1.5">
                        <span className="text-white/50">SPEED</span>
                        <span className="text-white font-bold">{String(chassis.speed).padStart(2, '0')}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, i) => (
                          <span
                            key={i}
                            className={`stat-segment ${i < chassis.speed ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* ARMOR */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-1.5">
                        <span className="text-white/50">ARMOR</span>
                        <span className="text-white font-bold">{String(chassis.armor).padStart(2, '0')}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, i) => (
                          <span
                            key={i}
                            className={`stat-segment ${i < chassis.armor ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* RANGE */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-1.5">
                        <span className="text-white/50">RANGE</span>
                        <span className="text-white font-bold">{String(chassis.range).padStart(2, '0')}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, i) => (
                          <span
                            key={i}
                            className={`stat-segment ${i < chassis.range ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 flex items-center justify-between text-xs font-mono text-white/50 hover:text-[#e53e3e] transition-colors">
                  <span>VIEW DOSSIER →</span>
                  <span className="text-[10px]">AUTH_OK</span>
                </div>
              </ChamferCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
