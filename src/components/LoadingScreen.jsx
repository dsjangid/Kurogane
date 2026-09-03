import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING PROTOCOL');

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current > 30 && current < 70) {
        setStatusText('CONNECTING NODE 74');
      } else if (current >= 70 && current < 100) {
        setStatusText('PILOT CLEARANCE OK');
      } else if (current >= 100) {
        setStatusText('SYSTEM ONLINE');
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 100);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] bg-[#08080b] flex flex-col justify-between p-8 md:p-12 select-none font-mono pointer-events-auto"
    >
      {/* Top Header Tag */}
      <div className="flex items-center justify-between text-[11px] text-[#e53e3e]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#e53e3e] rounded-full animate-ping" />
          <span className="tracking-widest uppercase">KUROGANE // 黑鉄</span>
        </div>
        <div className="text-white/40 tracking-wider">
          BUILD 0.8.4.4
        </div>
      </div>

      {/* Center Minimal Short Loading Line & Status */}
      <div className="max-w-[260px] w-full mx-auto space-y-3 text-center">
        <div className="flex items-center justify-between text-[11px] tracking-widest text-[#e53e3e] font-semibold">
          <span>{statusText}</span>
          <span>{String(progress).padStart(3, '0')}%</span>
        </div>

        <div className="w-full h-[1.5px] bg-white/10 relative overflow-hidden">
          <div
            className="h-full bg-[#e53e3e] transition-all duration-75 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[2.5px] bg-white shadow-[0_0_4px_#ffffff]" />
          </div>
        </div>

        <div className="text-[9px] text-white/30 tracking-widest uppercase">
          35.6762°N · SECTOR 07
        </div>
      </div>

      {/* Bottom Technical Line */}
      <div className="flex items-center justify-between text-[10px] text-white/40">
        <span>SECURITY ENCRYPTED // SHA-256</span>
        <span className="text-[#e53e3e]">STANDBY FOR DEPLOYMENT</span>
      </div>
    </motion.div>
  );
}
