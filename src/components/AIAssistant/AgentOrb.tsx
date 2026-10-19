import React from 'react';

interface AgentOrbProps {
  isSpeaking?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const AgentOrb: React.FC<AgentOrbProps> = ({
  isSpeaking = false,
  size = 'md',
  className = '',
  onClick,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  return (
    <div
      onClick={onClick}
      className={`relative select-none cursor-pointer group flex items-center justify-center ${sizeMap[size]} ${className}`}
      style={{ perspective: '800px' }}
      title="3D AI Career Agent"
      aria-label="3D AI Career Guide"
    >
      {/* Outer Ambient Glow Aura */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-700 pointer-events-none ${
          isSpeaking
            ? 'bg-gradient-to-r from-cyan-500/40 via-sky-500/30 to-purple-600/40 blur-xl scale-125 animate-pulse'
            : 'bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-md group-hover:scale-110 group-hover:blur-lg'
        }`}
      />

      {/* Floating 3D Container with bobbing animation */}
      <div className="relative w-full h-full flex items-center justify-center animate-agent-float">
        
        {/* 3D Gyroscopic Orbital Ring 1 (Cyan/Sky) */}
        <div
          className="absolute inset-[-4px] rounded-full border border-cyan-400/50 pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'orbit-spin-x 6s linear infinite',
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.4)',
          }}
        >
          {/* Orbital Satellite Node */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#22d3ee]" />
        </div>

        {/* 3D Gyroscopic Orbital Ring 2 (Purple/Indigo) */}
        <div
          className="absolute inset-[-2px] rounded-full border border-purple-500/50 pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'orbit-spin-y 8s linear infinite reverse',
            boxShadow: '0 0 10px rgba(168, 85, 247, 0.35)',
          }}
        >
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-300 shadow-[0_0_6px_#c084fc]" />
        </div>

        {/* 3D Gyroscopic Orbital Ring 3 (Electric Blue Counter-Ring) */}
        <div
          className="absolute inset-[2px] rounded-full border border-dashed border-sky-400/40 pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'orbit-spin-z 12s linear infinite',
          }}
        />

        {/* Central Core Holographic Sphere */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center border border-white/20 backdrop-blur-md shadow-2xl transition-transform duration-300 group-hover:scale-105"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #38bdf8 0%, #0369a1 40%, #0f172a 75%, #020617 100%)',
            boxShadow: isSpeaking
              ? 'inset 0 0 16px rgba(56, 189, 248, 0.8), 0 0 24px rgba(56, 189, 248, 0.6)'
              : 'inset 0 0 12px rgba(56, 189, 248, 0.5), 0 0 18px rgba(14, 165, 233, 0.35)',
          }}
        >
          {/* Glass Sphere Surface Specular Highlight */}
          <div
            className="absolute top-1 left-2 w-1/2 h-1/3 rounded-full opacity-60 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 80%)',
            }}
          />

          {/* Futuristic Cyber Visor / Iris Eye */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Holographic Visor Screen */}
            <div
              className={`relative rounded-full transition-all duration-300 flex items-center justify-center overflow-hidden ${
                size === 'sm' ? 'w-5 h-2.5' : size === 'md' ? 'w-8 h-4' : 'w-10 h-5'
              }`}
              style={{
                background: 'rgba(2, 6, 23, 0.85)',
                border: '1px solid rgba(56, 189, 248, 0.6)',
                boxShadow: '0 0 8px rgba(56, 189, 248, 0.7)',
              }}
            >
              {/* Animated Scanline Laser across Visor */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-scanline pointer-events-none" />

              {/* Visor Pupil / Reactive Eye with natural blink */}
              <div
                className={`rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8] transition-all duration-150 animate-agent-blink ${
                  isSpeaking ? 'scale-y-125 bg-white' : ''
                } ${size === 'sm' ? 'w-2 h-1' : size === 'md' ? 'w-3 h-1.5' : 'w-4 h-2'}`}
              />
            </div>

            {/* Speaking Waveform / Activity Equalizer below Visor */}
            {isSpeaking && (
              <div className="flex items-center gap-0.5 mt-1">
                <span className="w-0.5 h-1.5 bg-cyan-300 rounded-full animate-wave-1" />
                <span className="w-0.5 h-2.5 bg-sky-200 rounded-full animate-wave-2" />
                <span className="w-0.5 h-3 bg-white rounded-full animate-wave-3" />
                <span className="w-0.5 h-2 bg-sky-200 rounded-full animate-wave-2" />
                <span className="w-0.5 h-1 bg-cyan-300 rounded-full animate-wave-1" />
              </div>
            )}
          </div>

          {/* Holographic Matrix Grid Subtle Layer */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
              backgroundSize: '6px 6px',
            }}
          />
        </div>

        {/* Live Status Indicator Badge (Green dot) */}
        <div
          className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-[0_0_6px_#34d399] z-10"
          title="AI Guide Online"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
        </div>
      </div>
    </div>
  );
};
