import React from 'react';

export default function FooterSection() {
  return (
    <footer className="relative bg-[#050507] border-t border-white/10 pt-16 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Giant Typography Watermark Background */}
      <div className="absolute -bottom-10 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.06] text-center font-orbitron font-extrabold text-[16vw] leading-none text-white tracking-widest">
        KUROGANE
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-xs font-mono">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#e53e3e]/20 border border-[#e53e3e] flex items-center justify-center text-[#e53e3e]">
                <span className="w-1.5 h-1.5 bg-[#e53e3e]" />
              </div>
              <span className="font-orbitron font-bold text-base tracking-wider text-white">KUROGANE</span>
            </div>
            <div className="font-jp text-sm text-white/50 font-bold">黑鉄</div>
            <p className="text-white/40 text-xs leading-relaxed font-sans">
              Ashfall Studios · Tokyo / Vancouver.<br />
              Built for pilots who lose things and come back anyway.
            </p>
          </div>

          {/* Col 1: Game */}
          <div className="space-y-2">
            <div className="text-white/40 uppercase tracking-widest font-bold mb-3">GAME</div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#sec-01" className="hover:text-[#e53e3e] transition-colors">Overview</a></li>
              <li><a href="#sec-03" className="hover:text-[#e53e3e] transition-colors">Frames</a></li>
              <li><a href="#sec-04" className="hover:text-[#e53e3e] transition-colors">Arsenal</a></li>
              <li><a href="#sec-05" className="hover:text-[#e53e3e] transition-colors">Seasons</a></li>
            </ul>
          </div>

          {/* Col 2: Help */}
          <div className="space-y-2">
            <div className="text-white/40 uppercase tracking-widest font-bold mb-3">HELP</div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#e53e3e] transition-colors">Help Centre</a></li>
              <li><a href="#" className="hover:text-[#e53e3e] transition-colors">Server Status</a></li>
              <li><a href="#" className="hover:text-[#e53e3e] transition-colors">Report a Bug</a></li>
            </ul>
          </div>

          {/* Col 3: Studio */}
          <div className="space-y-2">
            <div className="text-white/40 uppercase tracking-widest font-bold mb-3">STUDIO</div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#sec-02" className="hover:text-[#e53e3e] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#e53e3e] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#e53e3e] transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40">
          <div>
            © 2026 MONOLITH STUDIOS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">PRIVACY</a>
            <span>·</span>
            <a href="#" className="hover:text-white/70 transition-colors">TERMS</a>
            <span>·</span>
            <a href="#" className="hover:text-white/70 transition-colors">EULA</a>
            <span>·</span>
            <span className="text-[#e53e3e]">PATCH 0.8.4 – 274</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
