"use client";

import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { ConceptBlock } from "@/components/marketing/concept-block";
import { CTASection } from "@/components/marketing/cta-section";
import { pageIntro, concepts, keyPrinciple } from "@/content/how-it-works";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
  return (
    <>
      <PageHero heading={pageIntro.heading} subtext={pageIntro.subtext} />

      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2">
          {concepts.map((concept, i) => (
            <ConceptBlock
              key={concept.title}
              title={concept.title}
              subtitle={concept.subtitle}
              description={concept.description}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center"
        >
          <blockquote className="text-2xl font-semibold tracking-tight md:text-3xl">
            &ldquo;{keyPrinciple.text}&rdquo;
          </blockquote>
          <p className="mt-4 text-muted-foreground">{keyPrinciple.subtext}</p>
        </motion.div>
      </SectionWrapper>

      <CTASection
        heading="Ready to try it yourself?"
        description="Follow the guided tutorials to create your first shape in minutes."
        primaryCta={{ label: "Start learning", href: "/learn" }}
        secondaryCta={{ label: "Browse the gallery", href: "/gallery" }}
      />
    </>
  );
}
