import SEOLandingLayout, { buildFaqJsonLd } from "@/components/SEOLandingLayout";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "Best Online Animation Courses (with Certificates) | MSA Club",
  description:
    "Online animation courses for beginners and pros. Learn 3D animation, Blender, After Effects, character design, and earn a certificate from MSA Club Academy.",
  keywords: [
    "animation courses online",
    "best online animation courses",
    "online animation course with certificate",
    "free online animation courses with certificates",
    "animation course for beginners",
    "learn animation online",
  ].join(", "),
  alternates: { canonical: "https://msa-club.com/animation-courses-online" },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Best Online Animation Courses with Certificates | MSA Club",
    description:
      "Self-paced online animation courses. 3D, 2D, character design and motion graphics from industry pros.",
    url: "https://msa-club.com/animation-courses-online",
    images: ["https://msa-club.com/hero_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Animation Courses | MSA Club",
    description:
      "Self-paced online animation courses with certificates from MSA Club Academy.",
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
    q: "Are the online animation courses self-paced?",
    a: "Yes. Every MSA Club course is self-paced. You can watch lessons whenever you want, replay anything, and take as long as you need to finish.",
  },
  {
    q: "Do I get a certificate after completing a course?",
    a: "Yes — every completed course earns you a certificate of completion you can share on LinkedIn or include in job applications.",
  },
  {
    q: "Are there any free online animation courses with certificates?",
    a: "We offer free intro lessons on YouTube and a free starter pack on the site. Full certificate-track courses are paid because they include mentor feedback and assignments.",
  },
  {
    q: "Is this good for total beginners?",
    a: "Absolutely. Most students join with zero animation experience. We start from the very basics — drawing fundamentals, software setup, and the 12 principles of animation.",
  },
  {
    q: "What computer do I need?",
    a: "A laptop or PC from the last 5 years works fine for 2D and most 3D work. For heavy Blender rendering, a dedicated GPU helps but isn't required to learn.",
  },
];

const sections = [
  {
    heading: "Built for online learners",
    body: "Most online animation courses are recorded once and forgotten. MSA Club is different — our lessons are updated as the industry changes, and you get assignments and mentor feedback so you actually improve, not just watch videos.",
    bullets: [
      "Lifetime access to course material",
      "Updated lessons as software changes",
      "Real assignments, not just lectures",
      "Mentor feedback on submitted work",
      "Active student community",
      "Certificate on completion",
    ],
  },
  {
    heading: "Pick your specialty",
    body: "MSA Club courses cover the full animation pipeline. Start with what excites you, then expand from there.",
    bullets: [
      "3D Animation with Blender",
      "Character Design Masterclass",
      "Drawing Fundamentals for Animators",
      "2D Animation in After Effects",
      "Storyboarding and Cinematography",
      "Lighting and Rendering",
    ],
  },
  {
    heading: "How online learning works at MSA Club",
    body: "Sign up, pick a course, watch the first module, do the assignment, and submit it. Mentors review your work and give detailed notes within a few days. You progress at your own speed and finish with a portfolio piece you can show employers.",
  },
];

export default function AnimationCoursesOnlinePage() {
  return (
    <SEOLandingLayout
      eyebrow="100% Online & Self-Paced"
      title="Best Online Animation Courses with"
      highlight="Certificates"
      intro="Learn animation online from working professionals. MSA Club offers self-paced courses in 3D animation, character design, Blender, After Effects, and more — all taught by the team behind My Story Animated. Join from anywhere in the world and build a real portfolio."
      sections={sections}
      faqs={faqs}
      ctaTitle="Start Learning Animation Online Today"
      ctaText="Pick a course, watch the first lesson free, and decide if MSA Club is for you."
      jsonLd={buildFaqJsonLd(faqs)}
    />
  );
}
