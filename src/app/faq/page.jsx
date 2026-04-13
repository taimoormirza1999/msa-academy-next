import Image from "next/image";
import SEOPageWrapper from "@/components/SEOPageWrapper";
import { buildFaqJsonLd } from "@/components/SEOLandingLayout";
import Bubble from "@/assets/msa-club-academy-bubble-background.webp";
import LeftEllipse from "@/assets/msa-club-academy-left-ellipse-background.webp";
import ElipseDown from "@/assets/msa-club-academy-ellipse-down-background.webp";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "FAQ | MSA Club Animation Academy - Common Questions",
  description:
    "Frequently asked questions about MSA Club animation courses: enrollment, software, certificates, refunds, beginner questions, and more.",
  keywords: [
    "MSA Club FAQ",
    "animation course questions",
    "MSA Academy help",
    "animation school FAQ",
  ].join(", "),
  alternates: { canonical: "https://msa-club.com/faq" },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "FAQ | MSA Club Animation Academy",
    description:
      "Common questions about MSA Club courses, certificates, software and enrollment.",
    url: "https://msa-club.com/faq",
    images: ["https://msa-club.com/msa-club-academy-animation-character-design-dubai-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | MSA Club",
    description: "Common questions about MSA Club animation courses.",
    images: ["https://msa-club.com/msa-club-academy-animation-character-design-dubai-hero.jpg"],
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

const faqGroups = [
  {
    title: "General Animation Questions",
    items: [
      {
        q: "How can I learn animation from home?",
        a: "You can learn animation from home using free software like Blender (3D) and Krita (2D drawing). Online courses with mentor feedback — like those at MSA Club Academy — give you structured lessons, assignments, and professional guidance without needing to attend a physical school.",
      },
      {
        q: "How long does it take to learn 3D animation?",
        a: "Most beginners can create simple 3D animations in 4-8 weeks of consistent practice. To reach a professional, job-ready level typically takes 6-12 months of focused learning — covering modeling, rigging, animation principles, and rendering.",
      },
      {
        q: "Can I learn animation without drawing skills?",
        a: "Yes. 3D animation in software like Blender does not require traditional drawing skills — you use digital tools to pose and move characters. Drawing helps with understanding form and storytelling, but it is not a prerequisite to start.",
      },
      {
        q: "What software do animators use?",
        a: "Professional animators commonly use Blender or Autodesk Maya for 3D animation, Adobe After Effects for motion graphics and 2D animation, and Toon Boom Harmony for frame-by-frame 2D animation. Blender is free and industry-standard for indie and studio work alike.",
      },
      {
        q: "What is the difference between 2D and 3D animation?",
        a: "2D animation is created by drawing frames in a flat, two-dimensional space — think classic cartoons or After Effects motion graphics. 3D animation uses digital three-dimensional models in software like Blender, allowing realistic depth, lighting, and camera movement.",
      },
      {
        q: "Is animation a good career in 2026?",
        a: "Yes. Demand for animators continues to grow across film, gaming, advertising, social media, and e-learning. Character animators, motion graphics designers, and 3D generalists are all actively hired. Freelance animation is also a strong income path on platforms like Upwork.",
      },
      {
        q: "Is Blender free for commercial use?",
        a: "Yes. Blender is completely free and open-source under the GNU GPL license, which means you can use it for personal projects, client work, and commercial productions at no cost. Major studios and solo creators alike use it professionally.",
      },
      {
        q: "How much do animators earn in Dubai and the UAE?",
        a: "Junior animators in Dubai typically earn AED 5,000–9,000 per month, while mid-level and senior animators can earn AED 12,000–25,000 or more. Freelance rates vary widely. The UAE's growing media, advertising, and gaming sectors are increasing demand for local animation talent.",
      },
      {
        q: "Do I need a degree to become an animator?",
        a: "No. Animation studios and clients hire based on your portfolio and showreel, not your degree. A strong reel demonstrating character animation, timing, and polish will get you further than a diploma. Online courses and self-teaching are fully legitimate career paths.",
      },
      {
        q: "Where can I study animation in Dubai?",
        a: "MSA Club Academy offers online animation courses for students in Dubai and across the UAE, covering character design, 3D animation in Blender, drawing fundamentals, and After Effects. Classes are self-paced with mentor feedback, making it practical for working professionals and students.",
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        q: "What is MSA Club?",
        a: "MSA Club is the official online animation academy of My Story Animated (MSA), a YouTube channel with millions of subscribers. We teach character design, 3D animation, drawing, and motion graphics from working professionals.",
      },
      {
        q: "Who are the courses for?",
        a: "Anyone who wants to learn animation — from absolute beginners with zero drawing experience to working artists who want to add 3D or character animation to their toolkit.",
      },
      {
        q: "Do I need to know how to draw before I start?",
        a: "No. Our drawing fundamentals course starts at zero. You can also dive directly into 3D animation in Blender without any drawing skills.",
      },
      {
        q: "How do I sign up?",
        a: "Browse our courses page, pick the one that interests you, and click Enroll. You'll get instant access after checkout.",
      },
    ],
  },
  {
    title: "Courses & Curriculum",
    items: [
      {
        q: "Are the courses self-paced?",
        a: "Yes — all MSA Club courses are 100% self-paced. Watch lessons whenever you want and progress at your own speed.",
      },
      {
        q: "How long does each course take?",
        a: "Most courses take 4-8 weeks at a comfortable pace (2-3 hours per week). You can finish faster or slower depending on how much time you put in.",
      },
      {
        q: "Will I get feedback on my work?",
        a: "Yes. Every course has assignments and our mentors give written feedback on your submissions. This is what separates a real course from a YouTube playlist.",
      },
      {
        q: "Do you offer beginner courses?",
        a: "Most of our courses are designed for beginners. We also offer intermediate and advanced material for students who want to push further.",
      },
    ],
  },
  {
    title: "Software & Equipment",
    items: [
      {
        q: "What software do I need?",
        a: "Mostly free tools: Blender for 3D, Krita for digital drawing, and Adobe After Effects for 2D animation. We help you install everything in week one.",
      },
      {
        q: "Do I need a powerful computer?",
        a: "Any laptop from the last 5 years with 8GB RAM is enough to start. For heavy 3D rendering, a dedicated GPU helps but isn't required to learn.",
      },
      {
        q: "Do I need a drawing tablet?",
        a: "Not at first. Pen and paper is fine for the fundamentals. If you want to go digital, an entry-level Wacom or Huion tablet ($50-100) works perfectly.",
      },
    ],
  },
  {
    title: "Certificates & Career",
    items: [
      {
        q: "Do I get a certificate when I finish?",
        a: "Yes — every completed MSA Club course earns you a certificate of completion you can share on LinkedIn or in job applications.",
      },
      {
        q: "Will this help me get a job?",
        a: "Our courses focus on production-ready skills and portfolio pieces. Studios hire based on your reel, not your degree, and we help you build a reel that shows you can do the work.",
      },
      {
        q: "Can I become a freelance animator with these skills?",
        a: "Yes. After Effects animation and character design are some of the highest-demand freelance skills on platforms like Upwork and Fiverr. Many of our students start taking paid work before they finish a course.",
      },
    ],
  },
  {
    title: "Payment & Support",
    items: [
      {
        q: "How much do courses cost?",
        a: "Pricing varies by course. We aim to be far more affordable than traditional in-person schools while still offering live mentor feedback. Check the courses page for current pricing.",
      },
      {
        q: "Do you offer refunds?",
        a: "Yes — we offer a satisfaction guarantee. If you complete the first module and decide MSA Club isn't right for you, contact us for a refund.",
      },
      {
        q: "How do I get help during a course?",
        a: "Every course has a Q&A section where you can ask mentors directly. You can also reach our team through the Contact page.",
      },
    ],
  },
];

const flatFaqs = faqGroups.flatMap((g) => g.items);

export default function FAQPage() {
  return (
    <SEOPageWrapper>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(flatFaqs)),
        }}
      />
      <main className="min-h-screen text-white relative overflow-hidden">
        {/* Background decoration — bubbles & ellipses */}
        <Image src={LeftEllipse} quality={50} alt="" loading="lazy" className="absolute top-0 left-0 w-[28rem] h-auto opacity-60 pointer-events-none select-none" />
        <Image src={ElipseDown} quality={50} alt="" loading="lazy" className="absolute top-[32rem] -right-40 w-[28rem] h-auto opacity-50 pointer-events-none select-none" />
        <Image src={LeftEllipse} quality={50} alt="" loading="lazy" className="absolute bottom-0 left-0 w-[28rem] h-auto opacity-40 pointer-events-none select-none" />
        <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute top-20 right-10 w-12 md:w-20 h-auto animate-pulse pointer-events-none select-none" />
        <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute top-[36rem] left-4 w-10 md:w-14 h-auto animate-pulse pointer-events-none select-none" />
        <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute bottom-32 right-16 w-8 md:w-12 h-auto animate-pulse pointer-events-none select-none" />

        <div className="max-w-4xl mx-auto px-6 py-16 pt-28 relative z-10">
          <header className="mb-12">
            <p className="text-sm uppercase tracking-wider text-pink200 mb-2">
              Help Center
            </p>
            <h1 className="font-primary text-3xl lg:text-5xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="font-eastroman-trial-demibold text-gray-400 text-lg max-w-2xl">
              Everything you might want to know about MSA Club courses, software,
              enrollment, and getting started in animation.
            </p>
          </header>

          <div className="space-y-12">
            {faqGroups.map((group) => (
              <section key={group.title}>
                <h2 className="font-primary text-2xl font-semibold text-purple-300 mb-5">
                  {group.title}
                </h2>
                <div className="space-y-3">
                  {group.items.map((item, i) => (
                    <details
                      key={i}
                      className="custom-border bg-black p-5 group"
                    >
                      <summary className="font-primary text-white font-semibold cursor-pointer list-none flex justify-between items-center">
                        <span>{item.q}</span>
                        <span className="text-pink200 group-open:rotate-45 transition text-xl shrink-0 ml-3">
                          +
                        </span>
                      </summary>
                      <p className="font-eastroman-trial-demibold text-gray-400 mt-3 leading-relaxed">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </SEOPageWrapper>
  );
}
