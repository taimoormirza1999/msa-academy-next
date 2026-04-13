import SEOLandingLayout, { buildFaqJsonLd } from "@/components/SEOLandingLayout";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "Animation Courses in Dubai (Online) | MSA Club Academy",
  description:
    "Online animation courses for students in Dubai and the UAE. Learn 3D animation, character design, Blender and After Effects from the team behind My Story Animated.",
  keywords: [
    "animation courses in Dubai",
    "animation course Dubai",
    "online animation courses Dubai",
    "animation school Dubai",
    "learn animation UAE",
    "3D animation course Dubai",
    "animation jobs in Dubai",
  ].join(", "),
  alternates: { canonical: "https://msa-club.com/animation-courses-dubai" },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Animation Courses in Dubai (Online) | MSA Club",
    description:
      "Online animation training built for students in Dubai and the wider UAE. Learn 3D, 2D, character design and more from working pros.",
    url: "https://msa-club.com/animation-courses-dubai",
    images: ["https://msa-club.com/hero_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animation Courses in Dubai | MSA Club",
    description:
      "Online animation training built for students in Dubai and the UAE.",
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
    q: "Are MSA Club animation courses available in Dubai?",
    a: "Yes. MSA Club is a 100% online animation school, so students from Dubai, Abu Dhabi, Sharjah and the wider UAE can join from anywhere. All you need is a laptop and a stable internet connection.",
  },
  {
    q: "Do you offer in-person classes in Dubai?",
    a: "Currently we only offer online courses. This lets us keep prices low and give you direct access to mentors who actually work in animation production at My Story Animated.",
  },
  {
    q: "Will the course help me find animation jobs in Dubai?",
    a: "Our courses focus on production-ready skills: rigging, animation, character design, lighting and rendering. These are the same skills studios in Dubai look for. You also get a portfolio piece you can show to employers.",
  },
  {
    q: "Do I need to know drawing before I start?",
    a: "No. Our drawing fundamentals course starts from absolute zero. If you can hold a pen, you can begin learning character design with us.",
  },
  {
    q: "What software will I need?",
    a: "Mostly free tools: Blender for 3D, Krita or Photoshop for drawing, and Adobe After Effects for 2D animation. We help you set everything up in week one.",
  },
];

const sections = [
  {
    heading: "Why students in the UAE pick MSA Club",
    body: "Animation jobs in Dubai are growing fast — game studios, ad agencies, and YouTube channels all need animators. MSA Club gives you the exact skills these studios hire for, taught by people who animate professionally every day at My Story Animated.",
    bullets: [
      "100% online — learn from anywhere in the UAE",
      "Self-paced, replay any lesson anytime",
      "Industry-relevant tools (Blender, After Effects)",
      "Direct feedback from working animators",
      "Portfolio-ready projects on every course",
      "Affordable compared to in-person Dubai schools",
    ],
  },
  {
    heading: "What you will learn",
    body: "Our curriculum is built around what studios actually look for when hiring junior animators in the Middle East market. You will leave with both the technical skills and the demo work to back them up.",
    bullets: [
      "3D character modeling and rigging in Blender",
      "Keyframe and 12-principle animation",
      "Character design from sketch to final art",
      "Lighting, materials and rendering",
      "Motion graphics with After Effects",
      "How to package work into a hireable showreel",
    ],
  },
  {
    heading: "Animation career paths in Dubai",
    body: "Once you finish a course at MSA Club, you can pursue roles like junior 3D animator, character designer, motion graphics artist, storyboard artist, or freelance animator. Dubai's creative scene is booming and employers care more about your reel than your degree.",
  },
];

export default function AnimationCoursesDubaiPage() {
  return (
    <SEOLandingLayout
      eyebrow="For students in the UAE"
      title="Animation Courses in"
      highlight="Dubai (Online)"
      intro="Want to learn animation in Dubai but not sure where to start? MSA Club is an online animation academy by the team behind My Story Animated. Our courses are perfect for students across the UAE who want to learn 3D animation, character design, and motion graphics from working professionals — without the cost of an in-person school."
      sections={sections}
      faqs={faqs}
      ctaTitle="Start Your Animation Journey from Dubai"
      ctaText="Join hundreds of UAE students already learning with MSA Club. All courses are online and self-paced."
      jsonLd={buildFaqJsonLd(faqs)}
    />
  );
}
