export function PageBackground() {
  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 1440 320"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bandGlowTR" cx="82%" cy="8%" r="60%">
          <stop offset="0%" stopColor="#9FD8EC" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#D9F0F7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bandGlowBL" cx="12%" cy="96%" r="55%">
          <stop offset="0%" stopColor="#BFE7F2" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#E8F5FA" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bandWaveTop" x1="100%" y1="0%" x2="10%" y2="100%">
          <stop offset="0%" stopColor="#9FD8EC" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#EAF6FA" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="bandWaveBottom" x1="0%" y1="100%" x2="90%" y2="0%">
          <stop offset="0%" stopColor="#BFE7F2" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#EAF6FA" stopOpacity="0.1" />
        </linearGradient>
        <filter id="bandSoftBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      <rect width="1440" height="320" fill="#FFFFFF" />
      <rect width="1440" height="320" fill="url(#bandGlowTR)" filter="url(#bandSoftBlur)" />
      <rect width="1440" height="320" fill="url(#bandGlowBL)" filter="url(#bandSoftBlur)" />

      <path
        d="M0,5 C200,10 350,18 500,24 C680,30 820,50 980,80 C1130,108 1250,95 1440,130 L1440,0 L0,0 Z"
        fill="url(#bandWaveTop)"
      />
      <path
        d="M0,320 L0,225 C180,245 300,215 480,232 C650,247 760,260 900,252 C1080,242 1220,265 1440,244 L1440,320 Z"
        fill="url(#bandWaveBottom)"
      />

      <path
        d="M0,5 C200,10 350,18 500,24 C680,30 820,50 980,80 C1130,108 1250,95 1440,130"
        fill="none"
        stroke="#BEE6F2"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M0,225 C180,245 300,215 480,232 C650,247 760,260 900,252 C1080,242 1220,265 1440,244"
        fill="none"
        stroke="#CDEEF6"
        strokeWidth="1.5"
        opacity="0.45"
      />
    </svg>
  );
}
