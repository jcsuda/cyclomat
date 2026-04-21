import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { CTASection } from "@/components/marketing/cta-section";
import { FadeIn } from "@/components/ui/fade-in";
import { aboutIntro, philosophy, invitation } from "@/content/about";

export default function AboutPage() {
  return (
    <>
      <PageHero heading={aboutIntro.heading} subtext={aboutIntro.subtext} />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl space-y-16">
          {philosophy.map((section, i) => (
            <FadeIn key={section.heading} index={i}>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                {section.heading}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </FadeIn>
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
