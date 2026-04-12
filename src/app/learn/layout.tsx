import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Follow guided tutorials to create your first shape, increase complexity, add layers and color, and explore motion keyframes.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
