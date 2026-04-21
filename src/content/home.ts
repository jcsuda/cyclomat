import { FeatureCardData } from "@/lib/types";

export const heroContent = {
  headline: "Draw with harmony, motion, and time",
  subtext:
    "Cyclomat transforms simple rotations into intricate geometric artwork. No equations needed — just curiosity and a sense of play.",
  cta: {
    primary: { label: "Create your first shape", href: "/learn" },
    secondary: { label: "Learn how it works", href: "/how-it-works" },
  },
};

export const introContent = {
  heading: "What is Cyclomat?",
  description:
    "Cyclomat is a creative tool that generates complex, beautiful geometric artwork through harmonic motion. Rotating arms trace paths that become spirograph-like patterns — from elegant curves to densely layered compositions.",
};

export const features: FeatureCardData[] = [
  {
    title: "Harmonic Frequencies",
    description:
      "Shape families emerge from the relationship between rotation speeds. Whole-number ratios produce closed, symmetric forms.",
    icon: "waves",
  },
  {
    title: "Layered Composition",
    description:
      "Stack multiple shapes with different colors, blend modes, and opacities to create rich, complex artwork.",
    icon: "layers",
  },
  {
    title: "Mathematical Beauty",
    description:
      "Explore the intersection of math and art. Every parameter change reveals a new visual possibility.",
    icon: "sparkles",
  },
];

export const whyDifferent = {
  heading: "Why Cyclomat",
  points: [
    {
      title: "Frequency shapes the form",
      description:
        "Unlike random generators, Cyclomat's output is grounded in harmonic relationships. The math creates the beauty.",
    },
    {
      title: "Layers create depth",
      description:
        "Combine multiple shapes, each with their own character, into compositions that feel both structured and organic.",
    },
    {
      title: "No equations required",
      description:
        "You don't need to understand the math to create something beautiful. The controls are intuitive, the results are immediate.",
    },
  ],
};
