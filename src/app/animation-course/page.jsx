import Link from "next/link";
import SEOPageWrapper from "@/components/SEOPageWrapper";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title:
    "Animation Course Online | Learn 3D & 2D Animation | MSA Club Academy",
  description:
    "Enroll in MSA Club animation course. Learn 3D animation with Blender, 2D animation with After Effects, character animation, and anime-style animation. Beginner friendly with certificates.",
  keywords: [
    "animation course",
    "animation course online",
    "3D animation course",
    "2D animation course",
    "character animation course Blender",
    "character animation course After Effects",
    "animation course for beginners",
    "anime animation course",
    "animation courses in Dubai",
    "best online animation courses",
    "free online animation courses with certificates",
    "MSA animation course",
    "MSA Club animation",
    "learn animation",
    "Blender animation tutorial",
  ].join(", "),
  alternates: {
    canonical: "https://msa-club.com/animation-course",
  },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Animation Course Online | MSA Club Academy",
    description:
      "Learn 3D and 2D animation from the MSA team. Master Blender, After Effects, and professional animation techniques.",
    url: "https://msa-club.com/animation-course",
    images: [
      {
        url: "https://msa-club.com/hero_banner.png",
        width: 1800,
        height: 1600,
        alt: "MSA Club Animation Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animation Course Online | MSA Club",
    description:
      "Learn 3D and 2D animation from the MSA team. Blender, After Effects, and more.",
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

export default function AnimationCoursePage() {
  return (
    <SEOPageWrapper>
    <main className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-28">
        <h1 className="font-primary text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">
          Animation Course — Learn 3D & 2D Animation
        </h1>
        <p className="font-eastroman-trial-demibold text-gray-400 text-lg mb-12 max-w-2xl">
          Master professional animation skills with MSA Club. Our animation
          course covers everything from 3D modeling in Blender to 2D motion in
          After Effects — taught by the team behind My Story Animated.
        </p>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Why Learn Animation?
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed mb-4">
            Animation is one of the fastest-growing creative industries in the
            world. From YouTube content creation to feature films, video games,
            advertising, and social media — animators are in demand everywhere.
            Whether you want to start a career in animation or create your own
            animated content, the skills you learn in this course will open
            countless doors.
          </p>
          <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed">
            The animation industry in the Middle East is booming, with studios in
            Dubai, Abu Dhabi, and Riyadh actively hiring skilled animators. MSA
            Club prepares you with the exact skills these studios look for.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-6 text-purple-300">
            Course Modules
          </h2>
          <div className="space-y-6">
            {[
              {
                module: "Module 1",
                title: "Animation Fundamentals",
                desc: "Understand the 12 principles of animation, timing, spacing, and how to plan your animations before touching any software. This foundation applies to both 2D and 3D animation.",
              },
              {
                module: "Module 2",
                title: "3D Animation with Blender",
                desc: "Learn Blender from scratch — 3D modeling, UV mapping, rigging characters with armatures, keyframe animation, walk cycles, lip sync, and final rendering. Blender is free and used by professionals worldwide.",
              },
              {
                module: "Module 3",
                title: "2D Animation with After Effects",
                desc: "Create smooth 2D animations using Adobe After Effects. Learn character rigging with Duik Bassel, puppet animation, expression controls, motion graphics, and exporting for YouTube.",
              },
              {
                module: "Module 4",
                title: "Anime-Style Animation",
                desc: "Bring anime aesthetics into your animations. Learn anime-style movement, dramatic camera angles, speed lines, impact frames, and the unique timing that makes anime feel dynamic.",
              },
              {
                module: "Module 5",
                title: "Animation for YouTube & Social Media",
                desc: "Learn the complete production pipeline for creating animated content for YouTube — from storyboard to final export. Understand formats, aspect ratios, and optimization for different platforms.",
              },
            ].map((mod, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <span className="text-xs text-pink-400 uppercase tracking-wider font-semibold">
                  {mod.module}
                </span>
                <h3 className="font-primary text-xl font-semibold mt-1 mb-2 text-white">
                  {mod.title}
                </h3>
                <p className="font-eastroman-trial-demibold text-gray-400 text-sm leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            What Tools Will You Learn?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Blender",
                desc: "Free, open-source 3D creation suite used by studios worldwide",
              },
              {
                name: "Adobe After Effects",
                desc: "Industry-standard motion graphics and 2D animation software",
              },
              {
                name: "Adobe Photoshop",
                desc: "Create textures, concept art, and storyboard frames",
              },
              {
                name: "Duik Bassel",
                desc: "Free After Effects plugin for professional character rigging",
              },
            ].map((tool, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="font-primary font-semibold text-pink-400">{tool.name}</h3>
                <p className="font-eastroman-trial-demibold text-gray-400 text-sm mt-1">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Who Is This Course For?
          </h2>
          <ul className="font-eastroman-trial-demibold space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">&#9654;</span>
              <span>
                <strong>Complete beginners</strong> who have never animated
                before but want to learn from scratch
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">&#9654;</span>
              <span>
                <strong>Artists and illustrators</strong> who want to bring their
                drawings to life through animation
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">&#9654;</span>
              <span>
                <strong>YouTube creators</strong> who want to produce animated
                content for their channels
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">&#9654;</span>
              <span>
                <strong>Students looking for animation jobs</strong> in Dubai,
                the Middle East, or anywhere in the world
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">&#9654;</span>
              <span>
                <strong>MSA fans</strong> who want to learn how My Story Animated
                creates their iconic animations
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Do I need any prior experience to take this animation course?",
                a: "No. This course starts from the basics and progressively builds to advanced techniques. Complete beginners are welcome.",
              },
              {
                q: "Is the course entirely online?",
                a: "Yes. All lessons are online and you can learn at your own pace from anywhere in the world.",
              },
              {
                q: "Do I get a certificate after completing the course?",
                a: "Yes. Upon completion, you receive a certificate from MSA Club that you can add to your portfolio and resume.",
              },
              {
                q: "What software do I need?",
                a: "Blender is completely free. You will also need Adobe After Effects (available through Adobe Creative Cloud). We guide you through setting up everything.",
              },
              {
                q: "How long does the course take to complete?",
                a: "The course is self-paced. Most students complete it in 4-8 weeks depending on how much time they dedicate each week.",
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
            Start Your Animation Career Today
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-300 mb-6">
            Join MSA Club and learn animation from the team behind one of
            YouTube&apos;s biggest animated channels.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Enroll Now
          </Link>
        </section>
      </div>
    </main>
    </SEOPageWrapper>
  );
}
