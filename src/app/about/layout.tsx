import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The philosophy behind Cyclomat — where geometric play meets creative discovery.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
