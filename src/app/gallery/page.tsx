"use client";

import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { GalleryCard } from "@/components/gallery/gallery-card";
import { CTASection } from "@/components/marketing/cta-section";
import { galleryIntro, galleryItems } from "@/content/gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHero heading={galleryIntro.heading} subtext={galleryIntro.subtext} />

      <SectionWrapper>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        heading="Inspired to create your own?"
        description="Follow the guided tutorials and make your first shape in minutes."
        primaryCta={{ label: "Start creating", href: "/learn" }}
        secondaryCta={{ label: "How it works", href: "/how-it-works" }}
      />
    </>
  );
}
