import Link from "next/link";
import SEOPageWrapper from "@/components/SEOPageWrapper";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title:
    "Animation Courses Online | MSA Club - Learn 3D Animation & Character Design",
  description:
    "Explore MSA Club animation courses. Learn character design, 3D animation in Blender, 2D animation in After Effects, drawing, and more. Online courses with certificates.",
  keywords: [
    "MSA courses",
    "animation courses online",
    "animation courses in Dubai",
    "best online animation courses",
    "free online animation courses with certificates",
    "3D animation course",
    "character design course",
    "Blender animation course",
    "After Effects animation course",
    "MSA Club courses",
    "learn animation online",
    "animation course for beginners",
  ].join(", "),
  alternates: {
    canonical: "https://msa-club.com/courses",
  },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Animation Courses Online | MSA Club",
    description:
      "Explore MSA Club animation courses. Learn character design, 3D animation, drawing, and more from the MSA team.",
    url: "https://msa-club.com/courses",
    images: [
      {
        url: "https://msa-club.com/msa-club-academy-animation-character-design-dubai-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MSA Club Animation Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animation Courses Online | MSA Club",
    description:
      "Learn animation, character design, Blender 3D, and more with MSA Club online courses.",
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

const courses = [
  {
    title: "Character Design Masterclass",
    description:
      "Learn to design original animated characters from scratch. This course covers anatomy, expressions, poses, clothing design, and color theory — everything you need to create characters that stand out.",
    topics: [
      "Character anatomy and proportions",
      "Facial expressions and emotions",
      "Costume and outfit design",
      "Color theory for characters",
      "Turning sketches into final designs",
    ],
    level: "Beginner to Intermediate",
    href: "/character-design",
  },
  {
    title: "3D Animation with Blender",
    description:
      "Master Blender — the most powerful free 3D software in the industry. Learn 3D modeling, rigging, animation, lighting, and rendering to create professional-quality animated content.",
    topics: [
      "Blender interface and navigation",
      "3D modeling characters and objects",
      "Rigging and skeletal animation",
      "Keyframe animation techniques",
      "Lighting, materials, and rendering",
    ],
    level: "Beginner to Advanced",
    href: "/animation-course",
  },
  {
    title: "2D Animation with After Effects",
    description:
      "Bring your characters and illustrations to life with Adobe After Effects. Learn motion graphics, character animation, and visual effects techniques used in professional studios.",
    topics: [
      "After Effects fundamentals",
      "Character rigging with Duik",
      "Lip sync and expression animation",
      "Motion graphics and transitions",
      "Exporting for YouTube and social media",
    ],
    level: "Beginner to Intermediate",
    href: "/animation-course",
  },
  {
    title: "Drawing Fundamentals for Animators",
    description:
      "Build a rock-solid drawing foundation. This course teaches you the essential drawing skills every animator needs — from basic shapes to dynamic poses and perspective.",
    topics: [
      "Basic shapes and construction",
      "Human anatomy for animation",
      "Dynamic poses and gestures",
      "Perspective drawing",
      "Inking and clean line work",
    ],
    level: "Beginner",
    href: "/character-design",
  },
];

export default function CoursesPage() {
  return (
    <SEOPageWrapper>
    <main className="min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 pt-28">
        <h1 className="font-primary text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
          MSA Club <span className="bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">Animation Courses</span>
        </h1>
        <p className="font-eastroman-trial-demibold text-gray-400 text-lg mb-12 max-w-2xl">
          Learn animation and character design from the team behind My Story
          Animated. Our courses are designed for beginners and experienced
          artists alike.
        </p>

        <div className="space-y-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h2 className="font-primary text-2xl font-semibold text-purple-300">
                  {course.title}
                </h2>
                <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full whitespace-nowrap">
                  {course.level}
                </span>
              </div>
              <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed mb-5">
                {course.description}
              </p>
              <div className="mb-5">
                <h3 className="font-primary text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  What You Will Learn
                </h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {course.topics.map((topic, j) => (
                    <li
                      key={j}
                      className="font-eastroman-trial-demibold flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="text-pink-400 mt-0.5">&#10003;</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={course.href}
                className="inline-block text-pink-400 hover:text-pink-300 font-medium text-sm transition"
              >
                Learn more &#8594;
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 text-center">
          <h2 className="font-primary text-2xl font-semibold mb-3 text-white">
            Why Learn Animation with MSA Club?
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 mb-6 max-w-2xl mx-auto">
            MSA Club courses are created by the same team that produces animated
            content watched by millions on YouTube. You get real industry
            knowledge, not generic tutorials.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center mt-8">
            <div>
              <p className="text-3xl font-bold text-pink-400">10M+</p>
              <p className="font-eastroman-trial-demibold text-gray-400 text-sm mt-1">YouTube Subscribers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-400">50+</p>
              <p className="font-eastroman-trial-demibold text-gray-400 text-sm mt-1">Expert-Led Lessons</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-400">Global</p>
              <p className="font-eastroman-trial-demibold text-gray-400 text-sm mt-1">Student Community</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-primary text-2xl font-semibold mb-6 text-purple-300 text-center">
            Explore More Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/learn-blender", title: "Learn Blender", desc: "Free 3D animation software, full course." },
              { href: "/learn-after-effects", title: "Learn After Effects", desc: "2D character animation with Duik." },
              { href: "/anime-character-drawing", title: "Anime Drawing", desc: "Draw anime characters from scratch." },
              { href: "/animation-courses-online", title: "Online Animation Courses", desc: "Self-paced with certificates." },
              { href: "/animation-courses-dubai", title: "Courses in Dubai", desc: "For students across the UAE." },
              { href: "/blog", title: "Animation Blog", desc: "Tutorials, tips and guides." },
              { href: "/faq", title: "FAQ", desc: "Common questions answered." },
              { href: "/glossary", title: "Animation Glossary", desc: "Animation terms explained." },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="block bg-white/5 border border-white/10 hover:border-purple-500/30 rounded-xl p-4 transition"
              >
                <div className="font-primary text-white font-semibold mb-1">{r.title}</div>
                <div className="font-eastroman-trial-demibold text-gray-400 text-sm">{r.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Start Learning Today
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 mb-6">
            Join MSA Club and begin your journey into professional animation.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </section>
      </div>
    </main>
    </SEOPageWrapper>
  );
}
