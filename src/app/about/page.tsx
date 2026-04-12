"use client";

import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { CTASection } from "@/components/marketing/cta-section";
import { aboutIntro, philosophy, invitation } from "@/content/about";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <PageHero heading={aboutIntro.heading} subtext={aboutIntro.subtext} />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl space-y-16">
          {philosophy.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                {section.heading}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        heading={invitation.heading}
        description={invitation.body}
        primaryCta={invitation.cta}
        secondaryCta={{ label: "Explore the gallery", href: "/gallery" }}
      />
    </>
  );
}
