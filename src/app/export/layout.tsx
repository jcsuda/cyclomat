import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export & Share",
  description:
    "Export your Cyclomat artwork as high-resolution images, vector PDFs, or transparent PNGs for print and digital use.",
};

export default function ExportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
