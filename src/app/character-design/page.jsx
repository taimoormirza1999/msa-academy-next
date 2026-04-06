import Link from "next/link";
import SEOPageWrapper from "@/components/SEOPageWrapper";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title:
    "Character Design Course | Learn Animation Character Drawing | MSA Club",
  description:
    "Learn character design with MSA Club. Master animation character drawing, anime character design, cartoon character creation, and professional character art for animation studios.",
  keywords: [
    "character design course",
    "animation character design course",
    "character design",
    "animation character drawing",
    "anime character drawing course",
    "cartoon character course",
    "character art course",
    "MSA character design",
    "learn character design online",
    "character design for animation",
    "character design for beginners",
    "how to design animation characters",
  ].join(", "),
  alternates: {
    canonical: "https://msa-club.com/character-design",
  },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Character Design Course | MSA Club",
    description:
      "Master animation character design with MSA Club. Learn from the artists behind My Story Animated.",
    url: "https://msa-club.com/character-design",
    images: [
      {
        url: "https://msa-club.com/hero_banner.png",
        width: 1800,
        height: 1600,
        alt: "MSA Club Character Design Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Character Design Course | MSA Club",
    description:
      "Master animation character design from the team behind My Story Animated.",
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

export default function CharacterDesignPage() {
  return (
    <SEOPageWrapper>
    <main className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-28">
        <h1 className="font-primary text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">
          Character Design Course
        </h1>
        <p className="font-eastroman-trial-demibold text-gray-400 text-lg mb-12 max-w-2xl">
          Learn how to create memorable animated characters from concept to
          completion. Taught by the artists behind My Story Animated (MSA).
        </p>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            What is Character Design?
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed mb-4">
            Character design is the art of creating original characters for
            animation, games, comics, and visual storytelling. A great character
            design communicates personality, background, and emotion through
            visual choices — from body proportions and facial features to
            clothing, color palette, and posture.
          </p>
          <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed">
            At MSA Club, you will learn the exact character design process used
            to create the characters in My Story Animated — the YouTube channel
            with millions of subscribers. This is not theory — it is the real
            production pipeline used by working animators.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-6 text-purple-300">
            What You Will Learn
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Anatomy and Proportions for Animation",
                desc: "Learn how to draw the human figure in animation-friendly proportions. Understand how to stylize anatomy for different animation styles — from realistic to chibi to anime.",
              },
              {
                title: "Facial Expressions and Emotions",
                desc: "Master the art of drawing expressive faces. Learn how eyebrows, eyes, mouth, and head tilt work together to convey every emotion your character needs.",
              },
              {
                title: "Designing Character Silhouettes",
                desc: "Great characters are recognizable from their silhouette alone. Learn how to create distinct, readable character shapes that stand out in any scene.",
              },
              {
                title: "Clothing and Costume Design",
                desc: "Design outfits that tell a story. Learn how clothing choice, accessories, and fabric folds add personality and depth to your character designs.",
              },
              {
                title: "Color Theory for Characters",
                desc: "Choose color palettes that reinforce your character's personality. Learn warm vs cool colors, complementary schemes, and how color affects audience perception.",
              },
              {
                title: "Character Turnarounds and Model Sheets",
                desc: "Create professional model sheets that allow any animator to draw your character consistently from any angle. This is essential for production animation.",
              },
              {
                title: "Anime and Cartoon Character Styles",
                desc: "Explore different animation styles including anime, western cartoon, semi-realistic, and the MSA style. Learn how to adapt your designs to different aesthetics.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <h3 className="font-primary text-lg font-semibold text-pink-400 mb-2">
                  {item.title}
                </h3>
                <p className="font-eastroman-trial-demibold text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            The MSA Character Design Process
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Concept", desc: "Define personality, backstory, and visual direction" },
              { step: "02", title: "Sketch", desc: "Explore shapes, poses, and expressions in rough sketches" },
              { step: "03", title: "Refine", desc: "Clean up linework, finalize proportions and details" },
              { step: "04", title: "Color", desc: "Apply color palette, shading, and final polish" },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10 text-center">
                <span className="font-primary text-3xl font-bold text-purple-500/40">{s.step}</span>
                <h3 className="font-primary font-semibold text-white mt-2">{s.title}</h3>
                <p className="font-eastroman-trial-demibold text-gray-400 text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Career Opportunities in Character Design
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed mb-4">
            Character designers are in high demand across multiple industries.
            With the skills you learn in this course, you can pursue careers in:
          </p>
          <ul className="font-eastroman-trial-demibold grid sm:grid-cols-2 gap-3 text-gray-300">
            {[
              "Animation studios",
              "Game development companies",
              "YouTube animation channels",
              "Freelance character design",
              "Comic book and graphic novel illustration",
              "Advertising and marketing agencies",
              "Children's book illustration",
              "NFT and digital art",
            ].map((career, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-pink-400">&#10003;</span>
                {career}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Do I need to know how to draw to take this course?",
                a: "No prior drawing experience is required. We start from the fundamentals and guide you step by step.",
              },
              {
                q: "What tools or software do I need?",
                a: "You can use any drawing tool — a tablet with software like Procreate, Photoshop, or Clip Studio Paint. Even pencil and paper works for the early modules.",
              },
              {
                q: "Will I learn to design characters in the MSA style?",
                a: "Yes. Our instructors are the actual MSA artists and they teach the same techniques and style used in My Story Animated productions.",
              },
              {
                q: "Can I use these skills for game character design too?",
                a: "Absolutely. The character design principles taught here apply to animation, games, comics, and any visual medium.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="font-primary font-semibold text-white mb-2">{faq.q}</h3>
                <p className="font-eastroman-trial-demibold text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-8">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Ready to Design Your First Character?
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 mb-6">
            Join MSA Club and start creating original animated characters today.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Start Learning
          </Link>
        </section>
      </div>
    </main>
    </SEOPageWrapper>
  );
}
