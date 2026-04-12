"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  heading: string;
  subtext: string;
}

export function PageHero({ heading, subtext }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.75_0.12_270/0.08),transparent_70%)]" />
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          {subtext}
        </motion.p>
      </div>
    </section>
  );
}
