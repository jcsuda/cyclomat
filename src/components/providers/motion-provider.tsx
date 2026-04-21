"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app in Framer Motion's MotionConfig.
 * Setting reducedMotion="user" respects the OS-level
 * prefers-reduced-motion preference automatically.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
