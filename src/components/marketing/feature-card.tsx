"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Waves, Layers, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  waves: Waves,
  layers: Layers,
  sparkles: Sparkles,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  index = 0,
  className,
}: FeatureCardProps) {
  const Icon = iconMap[icon] ?? Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card/80",
        className
      )}
    >
      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
        <Icon className="size-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
