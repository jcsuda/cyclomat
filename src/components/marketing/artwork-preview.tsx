"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface ArtworkPreviewProps {
  colors: string[];
  title?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  seed?: number;
}

function generateSpiralPath(
  seed: number,
  size: number
): string {
  const cx = size / 2;
  const cy = size / 2;
  const arms = 2 + (seed % 3);
  const freq1 = 2 + (seed % 7);
  const freq2 = 3 + ((seed * 3) % 8);
  const r1 = size * 0.25;
  const r2 = size * 0.15;
  const steps = 360;
  const points: string[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2 * (arms > 2 ? 2 : 1);
    const x =
      cx +
      r1 * Math.cos(freq1 * t) +
      r2 * Math.cos(freq2 * t) * Math.cos(t * (seed % 3));
    const y =
      cy +
      r1 * Math.sin(freq1 * t) +
      r2 * Math.sin(freq2 * t) * Math.sin(t * (seed % 3));
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }

  return points.join(" ");
}

export function ArtworkPreview({
  colors,
  title,
  size = "md",
  className,
  seed = 42,
}: ArtworkPreviewProps) {
  const sizeMap = { sm: 200, md: 300, lg: 400 };
  const svgSize = sizeMap[size];

  const paths = useMemo(() => {
    return colors.map((color, i) => ({
      d: generateSpiralPath(seed + i * 7, svgSize),
      color,
    }));
  }, [colors, seed, svgSize]);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-black/40",
        className
      )}
    >
      <svg
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="h-full w-full"
        aria-label={title ?? "Cyclomat artwork preview"}
      >
        {paths.map((path, i) => (
          <path
            key={i}
            d={path.d}
            fill="none"
            stroke={path.color}
            strokeWidth={1.5}
            strokeLinecap="round"
            opacity={0.85 - i * 0.1}
          />
        ))}
      </svg>
      {title && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8 opacity-0 transition-opacity group-hover:opacity-100">
          <p className="text-sm font-medium text-white">{title}</p>
        </div>
      )}
    </motion.div>
  );
}
