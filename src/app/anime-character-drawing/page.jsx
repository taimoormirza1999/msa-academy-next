import SEOLandingLayout, { buildFaqJsonLd } from "@/components/SEOLandingLayout";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "Anime Character Drawing Course | Learn Anime Art | MSA Club",
  description:
    "Learn to draw anime characters from scratch. Anatomy, expressions, hair, clothing, dynamic poses — taught by professional artists at MSA Club Academy.",
  keywords: [
    "anime character drawing",
    "anime character drawing course",
    "anime animation course",
    "learn to draw anime",
    "anime art course",
    "character design course",
  ].join(", "),
  alternates: { canonical: "https://msa-club.com/anime-character-drawing" },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Anime Character Drawing Course | MSA Club",
    description:
      "Master anime character drawing from anatomy to dynamic poses with MSA Club.",
    url: "https://msa-club.com/anime-character-drawing",
    images: ["https://msa-club.com/hero_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anime Character Drawing Course | MSA Club",
    description:
      "Learn to draw anime characters from scratch with MSA Club Academy.",
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
    q: "Do I need to know how to draw before starting?",
    a: "No. We start from absolute basics: lines, shapes, and proportions. By the end of week one you'll be drawing simple anime heads from multiple angles.",
  },
  {
    q: "Can I learn anime drawing on a tablet or do I need paper?",
    a: "Both work. We teach the fundamentals on paper first because that builds stronger habits, then move to digital tools like Krita (free), Photoshop, or Procreate.",
  },
  {
    q: "How long does it take to learn anime character drawing?",
    a: "You can learn the fundamentals in 4-6 weeks of focused practice. Becoming great takes years of drawing — but you'll make visible progress every single week of our course.",
  },
  {
    q: "Will I learn animation too or just drawing?",
    a: "This course focuses on character drawing specifically. If you want to animate the characters you draw, our Blender or After Effects courses are the next step.",
  },
];

const sections = [
  {
    heading: "Why anime character drawing is the perfect starting point",
    body: "Anime is one of the most popular art styles in the world, with a strong global community and clear, learnable rules. It's an ideal entry point into character design because the fundamentals — anatomy, proportions, expressions — transfer to every other style.",
    bullets: [
      "Clear, learnable proportional rules",
      "Huge online community for feedback",
      "Strong foundation for other art styles",
      "In demand on YouTube, manga, and games",
      "Easy to monetize as commissions or merch",
      "Builds drawing fundamentals fast",
    ],
  },
  {
    heading: "What you will learn",
    body: "Our anime character drawing course is structured around the same skills professional manga and anime artists use every day.",
    bullets: [
      "Anime head construction from any angle",
      "Eye, hair and expression design",
      "Body proportions and anatomy",
      "Clothing folds and fabric flow",
      "Dynamic poses and gesture",
      "Inking, shading and clean line work",
    ],
  },
  {
    heading: "Practice, not just theory",
    body: "Each lesson ends with a drawing prompt. You upload your work, get mentor feedback, and apply notes in the next exercise. By the end of the course you have a portfolio of original anime characters and the skills to keep growing on your own.",
  },
];

export default function AnimeCharacterDrawingPage() {
  return (
    <SEOLandingLayout
      eyebrow="Character Design Course"
      title="Learn"
      highlight="Anime Character Drawing"
      intro="Want to draw anime characters but don't know where to start? MSA Club's anime drawing course teaches you everything from head construction to dynamic poses, taught by professional character artists. No experience needed — just a pen, paper or tablet, and some practice."
      sections={sections}
      faqs={faqs}
      ctaTitle="Start Drawing Anime Today"
      ctaText="Begin your anime drawing journey with structured lessons and personal feedback."
      ctaHref="/character-design"
      ctaLabel="See the Character Design Course"
      jsonLd={buildFaqJsonLd(faqs)}
    />
  );
}
