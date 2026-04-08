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
        url: "https://msa-club.com/hero_banner.jpg",
        width: 1200,
        height: 630,
        alt: "MSA Club - Animation Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MSA Club | Animation Academy",
    description:
      "MSA Club is an online animation academy by My Story Animated. Learn character design, 3D animation, and more.",
    images: ["https://msa-club.com/hero_banner.jpg"],
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
    <div className="about-page -mt-14">
      <div className="w-90 max-w-5xl font-eastroman-trial-bold p-6 lg:p-8 mt-28 mx-auto mb-5">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 font-primary">
          About <span className="bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">MSA Club</span>
        </h1>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          What is MSA Club?
        </h2>
        <p className="text-gray-50">
          MSA Club is the official animation academy created by{" "}
          <strong>My Story Animated (MSA)</strong> — one of the most popular
          animated story channels on YouTube with millions of subscribers
          worldwide. MSA Club was built to share the knowledge, techniques, and
          creative process behind the animations that millions of fans love.
        </p>
        <p className="text-gray-50 mt-3">
          Whether you are a complete beginner or an experienced artist looking
          to level up, MSA Club offers structured courses that teach you
          real-world animation and character design skills used in professional
          studios.
        </p>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          Our Mission
        </h2>
        <p className="text-gray-50">
          At MSA Club, our mission is to make professional animation education
          accessible to everyone. We believe that creativity should not be
          limited by geography or expensive tuition fees. Through our online
          platform, students from Dubai, the Middle East, and all around the
          world can learn animation from the same professionals who create
          content watched by millions.
        </p>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          What You Will Learn at MSA Academy
        </h2>
        <ul className="list-disc list-inside text-gray-50">
          <li>
            <strong>Character Design</strong> — Learn to create original
            characters from concept sketches to fully rendered designs, the
            same way the MSA team creates characters for their stories.
          </li>
          <li>
            <strong>3D Animation with Blender</strong> — Master Blender, the
            industry-standard free 3D software, to model, rig, and animate
            characters.
          </li>
          <li>
            <strong>2D Animation with After Effects</strong> — Bring your
            characters to life with motion graphics and animation techniques
            in Adobe After Effects.
          </li>
          <li>
            <strong>Drawing Fundamentals</strong> — Build a strong
            foundation in drawing anatomy, expressions, poses, and dynamic
            compositions for animation.
          </li>
          <li>
            <strong>Storytelling & Storyboarding</strong> — Understand how to
            plan and visualize animated stories from script to screen.
          </li>
        </ul>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          Why Choose MSA Club?
        </h2>
        <ul className="list-disc list-inside text-gray-50">
          <li>
            <strong>Learn from the MSA Team</strong> — Our instructors are the
            actual animators and artists behind My Story Animated. You learn
            directly from professionals creating content for millions.
          </li>
          <li>
            <strong>Industry-Relevant Skills</strong> — Every course is designed
            around real production workflows — the same tools and techniques
            used in animation studios worldwide.
          </li>
          <li>
            <strong>Global Community</strong> — Join a community of aspiring
            animators from around the world. Get feedback, share your work, and
            grow together.
          </li>
          <li>
            <strong>Certificates & Portfolio</strong> — Complete courses and earn
            certificates. Build a professional portfolio that showcases your
            animation skills to employers.
          </li>
        </ul>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          The Story Behind MSA
        </h2>
        <p className="text-gray-50">
          My Story Animated started as a YouTube channel sharing animated
          stories that resonated with millions of viewers. Over time, the MSA
          community grew into something much bigger — fans did not just want to
          watch animations, they wanted to learn how to create them.
        </p>
        <p className="text-gray-50 mt-3">
          That is why MSA Club was born. We took the expertise behind one of
          YouTube&apos;s biggest animation channels and turned it into a
          learning platform where anyone can master the art of animation and
          character design.
        </p>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          Ready to Start Your Animation Journey?
        </h2>
        <p className="text-gray-50">
          Join thousands of students who are already learning animation with
          MSA Club.
        </p>
        <Link
          href="/"
          className="inline-block mt-4 bg-gradient-to-r from-purple to-pink200 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition font-primary"
        >
          Explore MSA Courses
        </Link>
      </div>
    </div>
    </SEOPageWrapper>
  );
}
