import { ConceptBlock } from "@/lib/types";

export const pageIntro = {
  heading: "How It Works",
  subtext:
    "Cyclomat creates art through rotating motion. Understanding a few core concepts unlocks endless creative possibilities.",
};

export const concepts: ConceptBlock[] = [
  {
    title: "Cycloid",
    subtitle: "The foundation of every shape",
    description:
      "A cycloid is a curve traced by a point on a rotating circle. In Cyclomat, multiple rotating elements combine to create complex curves that would be impossible to draw by hand.",
  },
  {
    title: "Arms",
    subtitle: "Independent contributors to the shape",
    description:
      "Each arm rotates at its own speed and distance. Think of them as invisible compass arms, each adding its own influence to the final path. Start with two arms and explore from there.",
  },
  {
    title: "Frequency",
    subtitle: "The character of the form",
    description:
      "Frequency controls how many rotations each arm makes. Whole-number frequencies create closed, symmetric shapes. Non-integer frequencies create spiraling, open forms. Frequency defines the family of the shape.",
  },
  {
    title: "Radius",
    subtitle: "The expression within the family",
    description:
      "Radius determines how far each arm reaches. It controls the visual weight and proportion of the shape. Changing the radius creates variation within the same frequency family.",
  },
  {
    title: "Phase",
    subtitle: "The starting angle",
    description:
      "Phase shifts where each arm begins its rotation. Small changes in phase can create dramatically different results — transforming a flower into a star, or a spiral into a web.",
  },
  {
    title: "Layers",
    subtitle: "Depth through composition",
    description:
      "A single shape is just the beginning. Layer multiple shapes with different colors, opacities, and blend modes to create compositions with visual depth and complexity.",
  },
  {
    title: "Keyframes",
    subtitle: "Shapes that evolve over time",
    description:
      "Define multiple states for your shape and Cyclomat will smoothly interpolate between them. Watch static geometry come alive as forms morph and transform.",
  },
];

export const keyPrinciple = {
  text: "Frequency defines the structure. Radius defines the expression.",
  subtext:
    "Once you internalize this, the entire system becomes intuitive.",
};
