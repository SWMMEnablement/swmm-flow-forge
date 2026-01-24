import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  delay: number;
}

const WaterParticles = () => {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.3 + 0.1,
    }))
  );

  const [ripples] = useState<Ripple[]>(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      delay: i * 1.5,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating water droplets */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 blur-[1px]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
          }}
        >
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
            style={{
              animation: `ripple 4s ease-out ${ripple.delay}s infinite`,
            }}
          />
        </div>
      ))}

      {/* Flowing wave lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q25,30 50,50 T100,50"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          className="animate-wave"
          style={{
            vectorEffect: 'non-scaling-stroke',
          }}
        />
        <path
          d="M0,70 Q25,50 50,70 T100,70"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="1.5"
          className="animate-wave-slow"
          style={{
            vectorEffect: 'non-scaling-stroke',
            animationDelay: '1s',
          }}
        />
      </svg>
    </div>
  );
};

export default WaterParticles;
