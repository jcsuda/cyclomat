"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  delay?: number;
  duration?: number;
  /** Initial vertical offset in CSS pixels. Pass 0 for a pure opacity fade. */
  y?: number;
}

export function FadeIn({
  children,
  className,
  index = 0,
  delay = 0,
  duration = 0.5,
  y = 20,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay: delay + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
