"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "rgba(167, 139, 250, 0.7)",
  "rgba(244, 114, 182, 0.5)",
  "rgba(96, 165, 250, 0.4)",
];

interface Arm {
  freq: number;
  radius: number;
  phase: number;
}

// Radii are expressed at a 500 px reference size and scaled to the actual canvas.
const ARM_SETS: Arm[][] = [
  [
    { freq: 3, radius: 100, phase: 0 },
    { freq: -5, radius: 60, phase: 0 },
  ],
  [
    { freq: 2, radius: 90, phase: Math.PI / 3 },
    { freq: -7, radius: 50, phase: Math.PI / 6 },
  ],
  [
    { freq: 5, radius: 80, phase: Math.PI / 4 },
    { freq: -3, radius: 70, phase: Math.PI / 2 },
  ],
];

const REFERENCE_SIZE = 500;

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    // Read the CSS-rendered size so the buffer matches the display box exactly.
    // CSS classes on the element control the display size; we never override them.
    const size = canvas.offsetWidth > 0 ? canvas.offsetWidth : REFERENCE_SIZE;
    const scale = size / REFERENCE_SIZE;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    let progress = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      ARM_SETS.forEach((arms, setIdx) => {
        ctx.beginPath();
        ctx.strokeStyle = COLORS[setIdx];
        ctx.lineWidth = 1.2;

        const steps = Math.floor(progress * 360);
        for (let i = 0; i <= steps; i++) {
          const t = (i / 360) * Math.PI * 2;
          let x = cx;
          let y = cy;
          for (const arm of arms) {
            x += arm.radius * scale * Math.cos(arm.freq * t + arm.phase);
            y += arm.radius * scale * Math.sin(arm.freq * t + arm.phase);
          }
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      if (progress < 1) {
        progress = Math.min(progress + 0.003, 1);
        // Only schedule the next frame while the animation is still running.
        animRef.current = requestAnimationFrame(draw);
      }
      // When progress reaches 1 the final frame has been drawn; no more frames needed.
    }

    animRef.current = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,oklch(0.75_0.12_270/0.08),transparent_60%)]" />
      <canvas
        ref={canvasRef}
        className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
        aria-label="Animated spirograph artwork being drawn"
        role="img"
      />
    </div>
  );
}
