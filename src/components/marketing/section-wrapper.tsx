import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  /** Anchor id for deep-linking. scroll-mt-20 compensates for the fixed header. */
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("px-6 py-20 md:py-28 scroll-mt-20", className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
