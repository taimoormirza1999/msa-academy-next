import Link from "next/link";
import SEOPageWrapper from "@/components/SEOPageWrapper";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "About MSA Club | MSA Academy - Animation & Character Design School",
  description:
    "MSA Club is an online animation academy by My Story Animated (MSA). Learn character design, 3D animation, Blender, After Effects and more from industry professionals.",
  keywords: [
    "MSA",
    "MSA Club",
    "MSA Academy",
    "My Story Animated",
    "MSA animation",
    "about MSA Club",
    "animation school online",
    "MSA character design",
    "learn animation MSA",
  ].join(", "),
  alternates: {
    canonical: "https://msa-club.com/about",
  },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "About MSA Club | MSA Academy - Animation & Character Design School",
    description:
      "MSA Club is an online animation academy by My Story Animated. Learn character design, 3D animation, and more from industry experts.",
    url: "https://msa-club.com/about",
    images: [
      {
        url: "https://msa-club.com/hero_banner.png",
        width: 1800,
        height: 1600,
        alt: "MSA Club - Animation Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MSA Club | Animation Academy",
    description:
      "MSA Club is an online animation academy by My Story Animated. Learn character design, 3D animation, and more.",
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

export default function AboutPage() {
  return (
    <SEOPageWrapper>
    <main className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-28">
        <h1 className="font-primary text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">
          About MSA Club
        </h1>

        <section className="mb-12">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            What is MSA Club?
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed mb-4">
            MSA Club is the official animation academy created by{" "}
            <strong>My Story Animated (MSA)</strong> — one of the most popular
            animated story channels on YouTube with millions of subscribers
            worldwide. MSA Club was built to share the knowledge, techniques, and
            creative process behind the animations that millions of fans love.
          </p>
          <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed">
            Whether you are a complete beginner or an experienced artist looking
            to level up, MSA Club offers structured courses that teach you
            real-world animation and character design skills used in professional
            studios.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Our Mission
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed mb-4">
            At MSA Club, our mission is to make professional animation education
            accessible to everyone. We believe that creativity should not be
            limited by geography or expensive tuition fees. Through our online
            platform, students from Dubai, the Middle East, and all around the
            world can learn animation from the same professionals who create
            content watched by millions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            What You Will Learn at MSA Academy
          </h2>
          <ul className="font-eastroman-trial-demibold space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">&#9654;</span>
              <span>
                <strong>Character Design</strong> — Learn to create original
                characters from concept sketches to fully rendered designs, the
                same way the MSA team creates characters for their stories.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">&#9654;</span>
              <span>
                <strong>3D Animation with Blender</strong> — Master Blender, the
                industry-standard free 3D software, to model, rig, and animate
                characters.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">&#9654;</span>
              <span>
                <strong>2D Animation with After Effects</strong> — Bring your
                characters to life with motion graphics and animation techniques
                in Adobe After Effects.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">&#9654;</span>
              <span>
                <strong>Drawing Fundamentals</strong> — Build a strong
                foundation in drawing anatomy, expressions, poses, and dynamic
                compositions for animation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">&#9654;</span>
              <span>
                <strong>Storytelling & Storyboarding</strong> — Understand how to
                plan and visualize animated stories from script to screen.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Why Choose MSA Club?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-primary font-semibold text-lg mb-2 text-pink-400">
                Learn from the MSA Team
              </h3>
              <p className="font-eastroman-trial-demibold text-gray-400 text-sm">
                Our instructors are the actual animators and artists behind My
                Story Animated. You learn directly from professionals creating
                content for millions.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-primary font-semibold text-lg mb-2 text-pink-400">
                Industry-Relevant Skills
              </h3>
              <p className="font-eastroman-trial-demibold text-gray-400 text-sm">
                Every course is designed around real production workflows — the
                same tools and techniques used in animation studios worldwide.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-primary font-semibold text-lg mb-2 text-pink-400">
                Global Community
              </h3>
              <p className="font-eastroman-trial-demibold text-gray-400 text-sm">
                Join a community of aspiring animators from around the world. Get
                feedback, share your work, and grow together.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-primary font-semibold text-lg mb-2 text-pink-400">
                Certificates & Portfolio
              </h3>
              <p className="font-eastroman-trial-demibold text-gray-400 text-sm">
                Complete courses and earn certificates. Build a professional
                portfolio that showcases your animation skills to employers.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            The Story Behind MSA
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed mb-4">
            My Story Animated started as a YouTube channel sharing animated
            stories that resonated with millions of viewers. Over time, the MSA
            community grew into something much bigger — fans did not just want to
            watch animations, they wanted to learn how to create them.
          </p>
          <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed">
            That is why MSA Club was born. We took the expertise behind one of
            YouTube&apos;s biggest animation channels and turned it into a
            learning platform where anyone can master the art of animation and
            character design.
          </p>
        </section>

        <section className="text-center py-8">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Ready to Start Your Animation Journey?
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 mb-6">
            Join thousands of students who are already learning animation with
            MSA Club.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Explore MSA Courses
          </Link>
        </section>
      </div>
    </main>
    </SEOPageWrapper>
  );
}
