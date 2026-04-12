"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArtworkPreview } from "@/components/marketing/artwork-preview";
import { GalleryItem } from "@/lib/types";

interface GalleryCardProps {
  item: GalleryItem;
  index?: number;
  className?: string;
}

export function GalleryCard({ item, index = 0, className }: GalleryCardProps) {
  const complexityLabel: Record<string, string> = {
    simple: "Simple",
    moderate: "Moderate",
    complex: "Complex",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("group", className)}
    >
      <div className="overflow-hidden rounded-2xl border border-border/30 bg-black/20 transition-colors group-hover:border-primary/20">
        <div className="aspect-square">
          <ArtworkPreview
            colors={item.colors}
            title={item.title}
            seed={item.id.length * 7 + item.arms * 13}
            size="lg"
          />
        </div>
        <div className="p-5">
          <h3 className="mb-1 text-base font-semibold">{item.title}</h3>
          <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
              {item.arms} arms
            </span>
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
              {item.layers} {item.layers === 1 ? "layer" : "layers"}
            </span>
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
              {complexityLabel[item.complexity]}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
