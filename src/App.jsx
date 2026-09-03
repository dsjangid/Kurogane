import React, { useState, useEffect } from 'react';
import NavigationRail from './components/NavigationRail';
import TopStatusBar from './components/TopStatusBar';
import HeroSection from './components/HeroSection';
import ManifestSection from './components/ManifestSection';
import ChassisSection from './components/ChassisSection';
import ArsenalSection from './components/ArsenalSection';
import TelemetrySection from './components/TelemetrySection';
import CtaSection from './components/CtaSection';
import FooterSection from './components/FooterSection';
import LoadingScreen from './components/LoadingScreen';
import { kuroganeSections } from './data/kuroganeData';
import { X, Shield } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('01');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [modalType, setModalType] = useState(null); // 'deploy' | 'dossier' | null
  const [selectedChassisDossier, setSelectedChassisDossier] = useState(null);

  // Track active section and continuous scroll progress on scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? Math.min(1, Math.max(0, currentScroll / totalScroll)) : 0;
      setScrollProgress(progress);

      const sections = ['sec-01', 'sec-02', 'sec-03', 'sec-04', 'sec-05', 'sec-06'];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(kuroganeSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(`sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSectionData = kuroganeSections.find((s) => s.id === activeSection) || kuroganeSections[0];

  return (
    <div className="min-h-screen bg-black text-white flex font-grotesk selection:bg-[#e53e3e] selection:text-white relative">
      {/* Minimal Initial Loading Screen (Under 2 seconds) */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* RIGHT-SIDE CLEAN VERTICAL SCROLL TRACKER LINE (NO BOX / PURE STREAM) */}
      {/* ========================================================================= */}
      <div className="fixed top-0 right-0 bottom-0 w-[2px] z-50 pointer-events-none flex flex-col justify-start">
        {/* Background Vertical Guide Track */}
        <div className="absolute inset-0 bg-white/[0.08]" />

        {/* Active Clean Red Line stretching top to bottom as you scroll */}
        <div
          className="w-full bg-[#e53e3e] transition-all duration-75 ease-out"
          style={{ height: `${Math.max(0.5, scrollProgress * 100)}%` }}
        />
      </div>

      {/* 1. Full-Height Left Navigation Rail (Top to Bottom) */}
      <NavigationRail
        activeSection={activeSection}
        onSelectSection={scrollToSection}
        scrollProgress={scrollProgress}
      />

      {/* 2. Main Content Column with Sticky Top Bar */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Status Bar */}
        <TopStatusBar sectionTag={currentSectionData.fullTag} />

        {/* Core Scrolling Content */}
        <main className="flex-1 min-w-0">
          <HeroSection
            onDeployClick={() => setModalType('deploy')}
            onReadDossierClick={() => setModalType('dossier')}
          />

          <ManifestSection />

          <ChassisSection
            onSelectChassis={(chassis) => {
              setSelectedChassisDossier(chassis);
              setModalType('dossier');
            }}
          />

          <ArsenalSection />

          <TelemetrySection />

          <CtaSection
            onDeployClick={() => setModalType('deploy')}
            onWatchTrailerClick={() => setModalType('deploy')}
          />

          <FooterSection />
        </main>
      </div>

      {/* ========================================================================= */}
      {/* MODALS: PILOT DEPLOY TERMINAL & DOSSIER VIEWER */}
      {/* ========================================================================= */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0d0d11] border border-[#e53e3e] p-6 md:p-8 kuro-cut-card">
            <button
              onClick={() => { setModalType(null); setSelectedChassisDossier(null); }}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-[#e53e3e] border border-white/10 hover:border-[#e53e3e] bg-black/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'deploy' ? (
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#e53e3e]">
                  <span className="w-2 h-2 rounded-full bg-[#e53e3e] animate-ping" />
                  <span>ASHFALL EXTRACTION // RECRUITMENT TERMINAL</span>
                </div>

                <h2 className="font-orbitron font-extrabold text-2xl md:text-3xl text-white">
                  PILOT AUTHORIZATION
                </h2>

                <p className="text-white/70 text-xs md:text-sm font-sans leading-relaxed">
                  Closed beta recruitment is open. Register your pilot callsign to bond your chassis and receive deployment telemetry keys.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); alert('Pilot Callsign Verified! Access key transmitted to your terminal.'); setModalType(null); }} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-white/40 mb-1">CALLSIGN / PILOT HANDLE</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. RONIN_09"
                      className="w-full px-4 py-3 bg-black border border-white/20 focus:border-[#e53e3e] text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 mb-1">TERMINAL COMM LINK (EMAIL)</label>
                    <input
                      required
                      type="email"
                      placeholder="pilot@ashfall.net"
                      className="w-full px-4 py-3 bg-black border border-white/20 focus:border-[#e53e3e] text-white outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#e53e3e] hover:bg-[#ff2a2a] text-white font-bold tracking-widest uppercase transition-colors border border-[#e53e3e]"
                  >
                    SUBMIT PILOT REGISTRATION
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#e53e3e]">
                  <Shield className="w-4 h-4" />
                  <span>CLASSIFIED CHASSIS DOSSIER</span>
                </div>

                <h2 className="font-orbitron font-extrabold text-2xl md:text-3xl text-white">
                  {selectedChassisDossier ? selectedChassisDossier.name : 'ASHFALL FRAME DOSSIER'}
                </h2>

                <p className="text-white/70 text-xs md:text-sm font-sans leading-relaxed">
                  {selectedChassisDossier
                    ? selectedChassisDossier.description
                    : 'Tactical analysis logs: Every chassis features modular loadouts, kinetic shielding, and high-temperature thermal dampening designed for survival in the Ashfall zone.'}
                </p>

                {selectedChassisDossier && (
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/10 font-mono text-xs">
                    <div>
                      <span className="text-white/40 block">CLASS</span>
                      <span className="text-[#e53e3e] font-bold">{selectedChassisDossier.class}</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">SPEED</span>
                      <span className="text-white font-bold">{selectedChassisDossier.speed} / 10</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">ARMOR</span>
                      <span className="text-white font-bold">{selectedChassisDossier.armor} / 10</span>
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => { setModalType(null); setSelectedChassisDossier(null); }}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-wider"
                  >
                    CLOSE DOSSIER
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
