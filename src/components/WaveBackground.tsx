import React from 'react';

export default function WaveBackground() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Atmospheric Ambient Azure Glows - Ultra-clean radial falloffs */}
      <div 
        className="absolute -top-32 right-[-5%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-azure-400/12 via-azure-500/8 to-transparent blur-[120px] transform-gpu pointer-events-none"
      />
      <div 
        className="absolute top-[35%] -left-[10%] h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-cyan-400/10 via-azure-600/6 to-transparent blur-[120px] transform-gpu pointer-events-none"
      />
      <div 
        className="absolute bottom-[5%] right-[5%] h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-azure-500/10 via-blue-400/5 to-transparent blur-[100px] transform-gpu pointer-events-none"
      />

      {/* 2. Modern Architectural Blueprint Dot Grid */}
      <svg 
        className="absolute inset-0 h-full w-full opacity-[0.45]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="tech-blueprint-grid" 
            width="48" 
            height="48" 
            patternUnits="userSpaceOnUse"
          >
            {/* Subtle dot at intersection */}
            <circle cx="24" cy="24" r="1" fill="#0078D4" fillOpacity="0.25" />
            {/* Fine crosshair accents at major intervals */}
            <path 
              d="M 24 21 L 24 27 M 21 24 L 27 24" 
              stroke="#0078D4" 
              strokeWidth="0.5" 
              strokeOpacity="0.18" 
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-blueprint-grid)" />
      </svg>

      {/* 3. Modern Cloud Network Topology & Circuit Routing Traces (Crisp SVG) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1600 1200"
      >
        <defs>
          <linearGradient id="cloudPulseGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0078D4" stopOpacity="0" />
            <stop offset="50%" stopColor="#0078D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cloudPulseGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#005A9E" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#0078D4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Network Trunk 1: Top-Right to Center-Left */}
        <g className="transition-opacity duration-1000">
          <path
            d="M 1600 180 L 1150 180 L 980 320 L 620 320 L 520 420 L 100 420"
            fill="none"
            stroke="#0078D4"
            strokeWidth="1.2"
            strokeOpacity="0.16"
            strokeDasharray="6 6"
          />
          {/* Animated Flowing Packet */}
          <path
            d="M 1600 180 L 1150 180 L 980 320 L 620 320 L 520 420 L 100 420"
            fill="none"
            stroke="url(#cloudPulseGrad1)"
            strokeWidth="2.5"
            strokeDasharray="80 800"
            className="animate-dash"
          />
          {/* Topology Node Junctions */}
          <circle cx="1150" cy="180" r="3.5" fill="#0078D4" fillOpacity="0.3" stroke="#0078D4" strokeWidth="1" />
          <circle cx="980" cy="320" r="3.5" fill="#0078D4" fillOpacity="0.3" stroke="#0078D4" strokeWidth="1" />
          <circle cx="620" cy="320" r="3.5" fill="#0078D4" fillOpacity="0.3" stroke="#0078D4" strokeWidth="1" />
          <circle cx="520" cy="420" r="4" fill="#005A9E" fillOpacity="0.4" stroke="#0078D4" strokeWidth="1.5" />
        </g>

        {/* Network Trunk 2: Left Side Cloud Routing Bus */}
        <g>
          <path
            d="M 0 680 L 280 680 L 420 800 L 780 800 L 920 940 L 1600 940"
            fill="none"
            stroke="#005A9E"
            strokeWidth="1.2"
            strokeOpacity="0.14"
            strokeDasharray="4 8"
          />
          {/* Animated Flowing Packet */}
          <path
            d="M 0 680 L 280 680 L 420 800 L 780 800 L 920 940 L 1600 940"
            fill="none"
            stroke="url(#cloudPulseGrad1)"
            strokeWidth="2.5"
            strokeDasharray="100 1000"
            className="animate-dash-reverse"
          />
          {/* Topology Node Junctions */}
          <circle cx="280" cy="680" r="3.5" fill="#0078D4" fillOpacity="0.3" stroke="#0078D4" strokeWidth="1" />
          <circle cx="420" cy="800" r="3.5" fill="#0078D4" fillOpacity="0.3" stroke="#0078D4" strokeWidth="1" />
          <circle cx="780" cy="800" r="4" fill="#0078D4" fillOpacity="0.4" stroke="#0078D4" strokeWidth="1.5" />
          <circle cx="920" cy="940" r="3.5" fill="#0078D4" fillOpacity="0.3" stroke="#0078D4" strokeWidth="1" />
        </g>

        {/* Secondary Delicate Circuit Accents */}
        <path
          d="M 1250 0 L 1250 140 L 1380 270 L 1600 270"
          fill="none"
          stroke="#0078D4"
          strokeWidth="1"
          strokeOpacity="0.12"
        />
        <circle cx="1250" cy="140" r="2.5" fill="#0078D4" fillOpacity="0.35" />
        <circle cx="1380" cy="270" r="2.5" fill="#0078D4" fillOpacity="0.35" />

        <path
          d="M 180 1200 L 180 1050 L 320 910 L 480 910"
          fill="none"
          stroke="#0078D4"
          strokeWidth="1"
          strokeOpacity="0.12"
        />
        <circle cx="180" cy="1050" r="2.5" fill="#0078D4" fillOpacity="0.35" />
        <circle cx="320" cy="910" r="2.5" fill="#0078D4" fillOpacity="0.35" />
      </svg>

      {/* 4. Fine Horizon Tech Grid Floor Accent (Extremely subtle) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-azure-50/50 via-transparent to-transparent pointer-events-none"
      />
    </div>
  );
}
