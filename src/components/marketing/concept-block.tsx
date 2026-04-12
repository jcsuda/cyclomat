"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ConceptBlockProps {
  title: string;
  subtitle: string;
  description: string;
  index?: number;
  className?: string;
}

export function ConceptBlock({
  title,
  subtitle,
  description,
  index = 0,
  className,
}: ConceptBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "relative rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm",
        className
      )}
    >
      <div className="mb-1 text-sm font-medium uppercase tracking-wider text-primary/80">
        {subtitle}
      </div>
      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
