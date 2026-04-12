"use client";

import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { TutorialStepCard } from "@/components/learn/tutorial-step-card";
import { CTASection } from "@/components/marketing/cta-section";
import { learnIntro, tutorials } from "@/content/tutorials";
import { motion } from "framer-motion";
import { BookOpen, Layers, Palette, Play } from "lucide-react";

const difficultyIcon: Record<string, React.ElementType> = {
  beginner: BookOpen,
  intermediate: Palette,
  advanced: Play,
};

const difficultyColor: Record<string, string> = {
  beginner: "bg-green-500/10 text-green-400 border-green-500/20",
  intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  advanced: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

export default function LearnPage() {
  return (
    <>
      <PageHero heading={learnIntro.heading} subtext={learnIntro.subtext} />

      <SectionWrapper>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tutorials.map((tutorial, i) => {
            const Icon = difficultyIcon[tutorial.difficulty] ?? BookOpen;
            return (
              <motion.a
                key={tutorial.id}
                href={`#${tutorial.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-border/50 bg-card/30 p-6 transition-colors hover:border-primary/30 hover:bg-card/60"
              >
                <div className={`mb-3 inline-flex rounded-lg border p-2 ${difficultyColor[tutorial.difficulty]}`}>
                  <Icon className="size-5" />
                </div>
                <h3 className="mb-1 text-base font-semibold">{tutorial.title}</h3>
                <p className="text-sm text-muted-foreground">{tutorial.subtitle}</p>
                <div className="mt-3">
                  <span className="text-xs font-medium capitalize text-muted-foreground">
                    {tutorial.difficulty}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </SectionWrapper>

      {tutorials.map((tutorial) => (
        <SectionWrapper key={tutorial.id} id={tutorial.id}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="mb-2">
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${difficultyColor[tutorial.difficulty]}`}
              >
                {tutorial.difficulty}
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {tutorial.title}
            </h2>
            <p className="mt-2 text-muted-foreground">{tutorial.subtitle}</p>
          </motion.div>

          <div className="max-w-2xl">
            {tutorial.steps.map((step, i) => (
              <TutorialStepCard
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                tip={step.tip}
                index={i}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 max-w-2xl rounded-xl border border-primary/20 bg-primary/5 p-6"
          >
            <p className="text-sm font-medium text-primary">Outcome</p>
            <p className="mt-1 text-muted-foreground">{tutorial.outcome}</p>
          </motion.div>
        </SectionWrapper>
      ))}

      <CTASection
        heading="Ready to explore further?"
        description="The gallery showcases what's possible when you combine these techniques."
        primaryCta={{ label: "Browse the gallery", href: "/gallery" }}
        secondaryCta={{ label: "How it works", href: "/how-it-works" }}
      />
    </>
  );
}
