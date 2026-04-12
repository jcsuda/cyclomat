import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  heading,
  subtext,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {subtext && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed mx-auto">
          {subtext}
        </p>
      )}
    </div>
  );
}
