import SEOLandingLayout, { buildFaqJsonLd } from "@/components/SEOLandingLayout";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "Learn Blender for Animation | 3D Character Course | MSA Club",
  description:
    "Learn Blender from scratch: modeling, rigging, animation, lighting, and rendering. A complete Blender 3D animation course taught by working pros at MSA Club.",
  keywords: [
    "learn Blender",
    "Blender course",
    "Blender 3D animation course",
    "Blender for beginners",
    "Blender character animation",
    "3D character animation course",
  ].join(", "),
  alternates: { canonical: "https://msa-club.com/learn-blender" },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Learn Blender for Animation | MSA Club",
    description:
      "A complete Blender course for animators — modeling, rigging, animating, lighting and rendering.",
    url: "https://msa-club.com/learn-blender",
    images: ["https://msa-club.com/hero_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Blender for Animation | MSA Club",
    description:
      "Master Blender for 3D character animation with MSA Club Academy.",
    images: ["https://msa-club.com/hero_banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const faqs = [
  {
    q: "Is Blender really free?",
    a: "Yes — Blender is completely free and open source. You can download it from blender.org and use it for personal or commercial work without any license fee.",
  },
  {
    q: "Is Blender hard to learn?",
    a: "Blender has a reputation for being intimidating because it has so many tools, but with a structured course like ours you can build a 3D character in your first week. The trick is learning the right shortcuts and workflow from day one.",
  },
  {
    q: "Can I get a job using Blender?",
    a: "Yes. Studios that previously used only Maya are now hiring Blender artists for animation, modeling, and rendering work. Big productions like Spider-Man: Across the Spider-Verse used Blender in their pipeline.",
  },
  {
    q: "What computer do I need for Blender?",
    a: "Any modern laptop with 8GB RAM works for learning. For faster renders, a dedicated GPU (NVIDIA RTX or AMD RX) speeds things up massively, but it's not required to follow along.",
  },
  {
    q: "Do I need to know how to draw before using Blender?",
    a: "No, but drawing fundamentals help you make better characters. We recommend starting with our Drawing Fundamentals course alongside the Blender course if you're a complete beginner.",
  },
];

const sections = [
  {
    heading: "Why Blender is the best 3D tool to learn in 2026",
    body: "Blender has gone from 'free alternative' to a serious industry tool used in feature films, games, ads, and YouTube animation. It's free forever, has the largest learner community, and updates faster than any paid alternative.",
    bullets: [
      "100% free, no subscription, no license",
      "Used in major studios and indie productions",
      "Huge community and free learning resources",
      "Updates every few months with new features",
      "Cycles + EEVEE rendering built in",
      "Works on Windows, Mac and Linux",
    ],
  },
  {
    heading: "What our Blender course covers",
    body: "We take you from zero to a fully animated 3D character, covering every part of the Blender pipeline. No filler — just the tools and workflows you'll actually use in production.",
    bullets: [
      "Blender interface and shortcuts mastery",
      "3D modeling characters and environments",
      "UV unwrapping and texturing",
      "Rigging with Rigify and custom controls",
      "Keyframe animation and the 12 principles",
      "Lighting, materials, and final rendering",
    ],
  },
  {
    heading: "Your first project",
    body: "By the end of week one, you will have modeled, rigged, and animated a basic 3D character. That single project alone is enough to start a portfolio. From there we add complexity — facial rigs, full-body animation, environments, and cinematic lighting.",
  },
];

export default function LearnBlenderPage() {
  return (
    <SEOLandingLayout
      eyebrow="3D Animation Course"
      title="Learn"
      highlight="Blender for Animation"
      intro="Blender is the most powerful free 3D software in the industry — and it's used everywhere from YouTube animation to Hollywood VFX. Our Blender course at MSA Club teaches you the full 3D pipeline: modeling, rigging, animating, lighting and rendering. No prior experience needed."
      sections={sections}
      faqs={faqs}
      ctaTitle="Start Learning Blender Today"
      ctaText="Free first lesson, structured curriculum, mentor feedback. Built for absolute beginners."
      ctaHref="/animation-course"
      ctaLabel="See the Blender Course"
      jsonLd={buildFaqJsonLd(faqs)}
    />
  );
}
