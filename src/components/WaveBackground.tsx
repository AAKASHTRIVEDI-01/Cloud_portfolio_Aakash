import React from 'react';
import waveImage from '../assets/azure-waves.png';

export default function WaveBackground() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Soft Ambient Azure Highlights - Extremely subtle for professional look */}
      <div 
        className="absolute -top-24 right-[-5%] h-[550px] w-[650px] rounded-full bg-azure-400/5 blur-[100px] animate-wave-pulse"
      />
      <div 
        className="absolute top-[40%] -left-[10%] h-[500px] w-[600px] rounded-full bg-cyan-400/5 blur-[100px] animate-wave-reverse"
      />

      {/* Layer 1: Elegant SVG Wave Ribbons */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-25">
        <svg
          className="absolute w-[160%] lg:w-[125%] h-auto top-[4%] -left-[10%] animate-wave-slow mix-blend-multiply"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0078D4" stopOpacity="0.22" />
              <stop offset="40%" stopColor="#3D91CB" stopOpacity="0.28" />
              <stop offset="75%" stopColor="#005A9E" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#84BBE0" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00A4EF" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#005A9E" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#3D91CB" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="waveGrad3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#0078D4" stopOpacity="0.10" />
              <stop offset="35%" stopColor="#005A9E" stopOpacity="0.20" />
              <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Ribbon Path 1 */}
          <path
            d="M-50 220 C 220 100, 480 320, 780 180 C 1080 50, 1320 260, 1550 150 L 1550 380 C 1320 460, 1060 290, 760 370 C 460 450, 190 280, -50 390 Z"
            fill="url(#waveGrad1)"
          />

          {/* Ribbon Path 2 */}
          <path
            d="M-50 300 C 260 190, 520 390, 840 260 C 1140 120, 1360 320, 1550 230 L 1550 450 C 1340 520, 1090 350, 800 430 C 510 510, 220 350, -50 460 Z"
            fill="url(#waveGrad2)"
          />

          {/* Ribbon Path 3 (Delicate highlight veil) */}
          <path
            d="M-50 160 C 300 70, 600 260, 920 140 C 1220 20, 1400 200, 1550 110 L 1550 290 C 1380 350, 1180 210, 880 290 C 580 380, 260 220, -50 310 Z"
            fill="url(#waveGrad3)"
          />
        </svg>
      </div>

      {/* Layer 2: The User's Exact Wave Ribbon Graphic */}
      <div className="absolute top-[2%] left-0 right-0 w-full flex justify-center items-center opacity-35 mix-blend-multiply pointer-events-none">
        <div className="relative w-full max-w-[1700px] animate-wave-drift">
          <img
            src={waveImage}
            alt=""
            className="w-full h-auto object-cover max-h-[560px] select-none filter blur-[0.5px]"
            style={{
              maskImage: 'radial-gradient(ellipse 95% 80% at 50% 50%, black 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 95% 80% at 50% 50%, black 60%, transparent 100%)'
            }}
          />
        </div>
      </div>

      {/* Layer 3: Secondary Counter-Wave */}
      <div className="absolute top-[52%] left-0 right-0 w-full flex justify-center items-center opacity-20 mix-blend-multiply pointer-events-none">
        <div className="relative w-full max-w-[1800px] animate-wave-reverse">
          <img
            src={waveImage}
            alt=""
            className="w-full h-auto object-cover max-h-[440px] select-none transform -scale-x-100 filter blur-[0.8px]"
            style={{
              maskImage: 'radial-gradient(ellipse 90% 75% at 50% 50%, black 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 50% 50%, black 50%, transparent 100%)'
            }}
          />
        </div>
      </div>
    </div>
  );
}
