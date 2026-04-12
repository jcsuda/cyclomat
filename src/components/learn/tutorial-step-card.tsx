"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface TutorialStepCardProps {
  step: number;
  title: string;
  description: string;
  tip?: string;
  index?: number;
  className?: string;
}

export function TutorialStepCard({
  step,
  title,
  description,
  tip,
  index = 0,
  className,
}: TutorialStepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("relative flex gap-6", className)}
    >
      <div className="flex flex-col items-center">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
          {step}
        </div>
        <div className="mt-2 h-full w-px bg-border/50" />
      </div>
      <div className="pb-10">
        <h4 className="mb-2 text-lg font-semibold">{title}</h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        {tip && (
          <div className="mt-3 flex items-start gap-2 rounded-lg bg-primary/5 px-4 py-3 text-sm">
            <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
            <span className="text-muted-foreground">{tip}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
