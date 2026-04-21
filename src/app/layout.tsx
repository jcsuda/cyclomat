import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MotionProvider } from "@/components/providers/motion-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Create complex, beautiful geometric artwork through harmonic motion. No equations needed — just curiosity and a sense of play.";

export const metadata: Metadata = {
  title: {
    default: "Cyclomat — Geometric Art Through Harmonic Motion",
    template: "%s | Cyclomat",
  },
  description: siteDescription,
  keywords: [
    "spirograph",
    "geometric art",
    "harmonic motion",
    "generative art",
    "cycloid",
    "parametric art",
  ],
  openGraph: {
    type: "website",
    siteName: "Cyclomat",
    title: "Cyclomat — Geometric Art Through Harmonic Motion",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyclomat — Geometric Art Through Harmonic Motion",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
