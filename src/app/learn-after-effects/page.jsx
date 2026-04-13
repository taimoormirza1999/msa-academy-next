import SEOLandingLayout, { buildFaqJsonLd } from "@/components/SEOLandingLayout";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "Learn After Effects for Animation | 2D Character Course | MSA Club",
  description:
    "Learn Adobe After Effects from scratch. Animate characters with Duik, master motion graphics, and build a 2D animation portfolio with MSA Club Academy.",
  keywords: [
    "learn After Effects",
    "After Effects course",
    "After Effects animation",
    "character animation course After Effects",
    "Duik character rig",
    "motion graphics course",
  ].join(", "),
  alternates: { canonical: "https://msa-club.com/learn-after-effects" },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Learn After Effects for Animation | MSA Club",
    description:
      "After Effects character animation and motion graphics course from MSA Club.",
    url: "https://msa-club.com/learn-after-effects",
    images: ["https://msa-club.com/hero_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn After Effects | MSA Club",
    description:
      "Master After Effects for character animation and motion graphics.",
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
    q: "Is After Effects good for character animation?",
    a: "Yes — combined with the free Duik plugin, After Effects is one of the fastest tools to rig and animate 2D characters. Many YouTube animation channels use exactly this workflow.",
  },
  {
    q: "Do I need a subscription to follow the course?",
    a: "Adobe After Effects requires a Creative Cloud subscription. We help you set up a free trial during the first week so you can complete several lessons before deciding.",
  },
  {
    q: "What is Duik and is it free?",
    a: "Duik is a free rigging plugin for After Effects that lets you turn flat character art into a fully riggable, animatable puppet. We teach you how to install and use it from scratch.",
  },
  {
    q: "Can I make money animating in After Effects?",
    a: "Yes. After Effects animators are in demand for YouTube content, ads, explainer videos, and social media. It's one of the easiest animation skills to monetize as a freelancer.",
  },
];

const sections = [
  {
    heading: "Why After Effects is the fastest way into animation",
    body: "After Effects is the standard for 2D character animation, motion graphics, and visual effects. Compared to traditional frame-by-frame animation, AE lets you rig once and animate fast — perfect for YouTube creators, ad agencies, and freelancers.",
    bullets: [
      "Industry-standard motion graphics tool",
      "Fast rigging with Duik (free plugin)",
      "Massive freelance market on Upwork and Fiverr",
      "Used by top YouTube animation channels",
      "Integrates with Photoshop and Illustrator",
      "Easier learning curve than 3D",
    ],
  },
  {
    heading: "What you will learn",
    body: "Our After Effects course at MSA Club takes you from your first composition to a fully animated character scene with lip sync and expressions.",
    bullets: [
      "After Effects interface and timeline mastery",
      "Importing from Illustrator and Photoshop",
      "Character rigging with Duik Bassel/Angela",
      "Lip sync and facial expressions",
      "Walk cycles and body mechanics",
      "Exporting for YouTube and social media",
    ],
  },
  {
    heading: "Your portfolio outcome",
    body: "By the end of the course, you will have built and animated your own original character in After Effects, complete with lip sync and a short scene. That clip becomes a centerpiece in your animation reel.",
  },
];

export default function LearnAfterEffectsPage() {
  return (
    <SEOLandingLayout
      eyebrow="2D Animation Course"
      title="Learn"
      highlight="After Effects for Animation"
      intro="Adobe After Effects is the fastest way to start animating professionally. With the free Duik plugin you can rig and animate 2D characters in days, not months. Our After Effects course covers everything from interface basics to a finished character scene."
      sections={sections}
      faqs={faqs}
      ctaTitle="Start Learning After Effects Today"
      ctaText="Build your first 2D character animation in just one week of structured lessons."
      ctaHref="/animation-course"
      ctaLabel="See the Animation Course"
      jsonLd={buildFaqJsonLd(faqs)}
    />
  );
}
