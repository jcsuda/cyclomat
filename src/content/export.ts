import { ExportFormat } from "@/lib/types";

export const exportIntro = {
  heading: "Export & Share",
  subtext:
    "Your artwork deserves to exist beyond the screen. Cyclomat supports high-resolution exports for print, digital media, and creative collaboration.",
};

export const exportFormats: ExportFormat[] = [
  {
    title: "Raster Image",
    description: "Export your artwork as a high-resolution PNG image.",
    details: [
      "Resolution from 1K to 8K pixels",
      "Perfect for digital media and social sharing",
      "Ideal for wallpapers, backgrounds, and web assets",
    ],
    icon: "image",
  },
  {
    title: "Vector PDF",
    description: "Export as a scalable vector PDF for infinite resolution.",
    details: [
      "Infinitely scalable without quality loss",
      "Perfect for large-format printing",
      "Compatible with design tools like Illustrator and Figma",
    ],
    icon: "file-text",
  },
  {
    title: "Transparent Background",
    description: "Export with no background for compositing and layering.",
    details: [
      "Clean alpha channel transparency",
      "Layer your artwork into other designs",
      "Ideal for overlays and design assets",
    ],
    icon: "square-dashed-bottom",
  },
  {
    title: "Project File",
    description: "Save and share your complete project with all parameters.",
    details: [
      "Preserves all layers, keyframes, and settings",
      "Share your work with other Cyclomat users",
      "Pick up exactly where you left off",
    ],
    icon: "share-2",
  },
];

export const useCases = [
  {
    title: "Fine Art Prints",
    description: "Print your generative artwork at gallery quality. Vector exports ensure crisp detail at any size.",
  },
  {
    title: "Posters & Wall Art",
    description: "Create striking geometric posters. Export at 8K for large-format printing with stunning clarity.",
  },
  {
    title: "Digital Design Assets",
    description: "Use transparent exports as design elements in presentations, websites, and digital media.",
  },
  {
    title: "Creative Collaboration",
    description: "Share project files with fellow artists. Let others explore and remix your parameter choices.",
  },
];
