export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface ConceptBlock {
  title: string;
  subtitle: string;
  description: string;
  visual?: string;
}

export interface TutorialStep {
  step: number;
  title: string;
  description: string;
  tip?: string;
}

export interface Tutorial {
  id: string;
  title: string;
  subtitle: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  outcome: string;
  steps: TutorialStep[];
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  arms: number;
  layers: number;
  complexity: "simple" | "moderate" | "complex";
  colors: string[];
}

export interface ExportFormat {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
