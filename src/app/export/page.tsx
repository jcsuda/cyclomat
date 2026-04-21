import type { ElementType } from "react";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CTASection } from "@/components/marketing/cta-section";
import { FadeIn } from "@/components/ui/fade-in";
import { exportIntro, exportFormats, useCases } from "@/content/export";
import {
  Image,
  FileText,
  SquareDashedBottom,
  Share2,
} from "lucide-react";

const iconMap: Record<string, ElementType> = {
  image: Image,
  "file-text": FileText,
  "square-dashed-bottom": SquareDashedBottom,
  "share-2": Share2,
};

export default function ExportPage() {
  return (
    <>
      <PageHero heading={exportIntro.heading} subtext={exportIntro.subtext} />

      <SectionWrapper>
        <SectionHeading heading="Export formats" />
        <div className="grid gap-6 md:grid-cols-2">
          {exportFormats.map((format, i) => {
            const Icon = iconMap[format.icon] ?? Image;
            return (
              <FadeIn key={format.title} index={i}>
                <div className="rounded-2xl border border-border/50 bg-card/30 p-8">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{format.title}</h3>
                  <p className="mb-4 text-muted-foreground">{format.description}</p>
                  <ul className="space-y-2">
                    {format.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary/60" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          heading="Use cases"
          subtext="Your Cyclomat artwork can go anywhere."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((useCase, i) => (
            <FadeIn key={useCase.title} index={i}>
              <div className="rounded-2xl border border-border/50 bg-card/20 p-8">
                <h3 className="mb-2 text-lg font-semibold">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        heading="Create artwork worth exporting"
        description="Learn the fundamentals and start building beautiful compositions."
        primaryCta={{ label: "Start learning", href: "/learn" }}
        secondaryCta={{ label: "See the gallery", href: "/gallery" }}
      />
    </>
  );
}
