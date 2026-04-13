'use client';
import Link from "next/link";
import Image from "next/image";
import Bubble from "@/assets/msa-club-academy-bubble-background.webp";
import LeftEllipse from "@/assets/msa-club-academy-left-ellipse-background.webp";
import ElipseDown from "@/assets/msa-club-academy-ellipse-down-background.webp";
import Button from "@/components/utils/Button";
import useScrollHandler from "@/store/useScrollHandler";

const learnItems = [
  { title: "Anatomy and Proportions for Animation", desc: "Learn how to draw the human figure in animation-friendly proportions. Understand how to stylize anatomy for different animation styles." },
  { title: "Facial Expressions and Emotions", desc: "Master the art of drawing expressive faces. Learn how eyebrows, eyes, mouth, and head tilt work together to convey every emotion." },
  { title: "Designing Character Silhouettes", desc: "Great characters are recognizable from their silhouette alone. Learn how to create distinct, readable character shapes." },
  { title: "Clothing and Costume Design", desc: "Design outfits that tell a story. Learn how clothing choice, accessories, and fabric folds add personality and depth." },
  { title: "Color Theory for Characters", desc: "Choose color palettes that reinforce your character's personality. Learn warm vs cool colors and complementary schemes." },
  { title: "Character Turnarounds and Model Sheets", desc: "Create professional model sheets that allow any animator to draw your character consistently from any angle." },
  { title: "Anime and Cartoon Character Styles", desc: "Explore different animation styles including anime, western cartoon, semi-realistic, and the MSA style." },
];

const faqs = [
  { q: "Do I need to know how to draw to take this course?", a: "No prior drawing experience is required. We start from the fundamentals and guide you step by step." },
  { q: "What tools or software do I need?", a: "You can use any drawing tool — a tablet with software like Procreate, Photoshop, or Clip Studio Paint. Even pencil and paper works for the early modules." },
  { q: "Will I learn to design characters in the MSA style?", a: "Yes. Our instructors are the actual MSA artists and they teach the same techniques and style used in My Story Animated productions." },
  { q: "Can I use these skills for game character design too?", a: "Absolutely. The character design principles taught here apply to animation, games, comics, and any visual medium." },
];

export default function CharacterDesignClient() {
  const handleScroll = useScrollHandler();

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <Image src={LeftEllipse} quality={50} alt="" loading="lazy" className="absolute top-0 left-0 w-[30rem] h-auto opacity-60 pointer-events-none" />
      <Image src={ElipseDown} quality={50} alt="" loading="lazy" className="absolute top-[30rem] -right-40 w-[30rem] h-auto opacity-60 pointer-events-none" />
      <Image src={LeftEllipse} quality={50} alt="" loading="lazy" className="absolute bottom-0 left-0 w-[30rem] h-auto opacity-40 pointer-events-none" />
      <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute top-20 right-10 w-12 md:w-20 h-auto animate-pulse pointer-events-none" />
      <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute top-[40rem] left-5 w-10 md:w-16 h-auto animate-pulse pointer-events-none" />
      <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute bottom-40 right-20 w-8 md:w-14 h-auto animate-pulse pointer-events-none" />

      <div className="w-[90%] max-w-5xl font-eastroman-trial-bold p-6 lg:p-8 mt-28 mx-auto mb-5 relative z-10">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 font-primary">
          Character <span className="bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">Design Course</span>
        </h1>
        <p className="text-gray-50 text-lg mb-12 max-w-2xl">
          Learn how to create memorable animated characters from concept to completion. Taught by the artists behind My Story Animated (MSA).
        </p>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          What is Character Design?
        </h2>
        <p className="text-gray-50 mt-2">
          Character design is the art of creating original characters for animation, games, comics, and visual storytelling. A great character design communicates personality, background, and emotion through visual choices — from body proportions and facial features to clothing, color palette, and posture.
        </p>
        <p className="text-gray-50 mt-3">
          At MSA Club, you will learn the exact character design process used to create the characters in My Story Animated — the YouTube channel with millions of subscribers. This is not theory — it is the real production pipeline used by working animators.
        </p>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-8 font-primary">
          What You Will Learn
        </h2>
        <div className="space-y-4 mt-4">
          {learnItems.map((item, i) => (
            <div key={i} className="custom-border bg-black p-5 lg:p-6">
              <h3 className="font-primary text-base lg:text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-50 text-sm lg:text-base mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-8 font-primary">
          The MSA Character Design Process
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { step: "01", title: "Concept", desc: "Define personality, backstory, and visual direction" },
            { step: "02", title: "Sketch", desc: "Explore shapes, poses, and expressions" },
            { step: "03", title: "Refine", desc: "Clean up linework, finalize proportions" },
            { step: "04", title: "Color", desc: "Apply color palette, shading, and polish" },
          ].map((s, i) => (
            <div key={i} className="custom-border bg-black p-4 flex flex-col items-center justify-center text-center">
              <span className="font-primary text-2xl font-bold text-purple">{s.step}</span>
              <h3 className="font-primary font-semibold text-white text-base mt-1">{s.title}</h3>
              <p className="text-gray-50 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-8 font-primary">
          Career Opportunities
        </h2>
        <p className="text-gray-50 mt-2">
          Character designers are in high demand. With the skills you learn in this course, you can pursue careers in:
        </p>
        <ul className="list-disc list-inside text-gray-50 mt-3">
          <li>Animation studios</li>
          <li>Game development companies</li>
          <li>YouTube animation channels</li>
          <li>Freelance character design</li>
          <li>Comic book and graphic novel illustration</li>
          <li>Advertising and marketing agencies</li>
        </ul>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-8 font-primary">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mt-4">
          {faqs.map((faq, i) => (
            <div key={i} className="custom-border bg-black p-5 lg:p-6">
              <h3 className="font-primary text-base lg:text-xl font-semibold text-white">{faq.q}</h3>
              <p className="text-gray-50 text-sm lg:text-base mt-2">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center py-10">
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white font-primary mb-4">
            Ready to Design Your First Character?
          </h2>
          <p className="text-gray-50 mb-6">
            Join MSA Club and start creating original animated characters today.
          </p>
          <Link href="/">
            <Button width={250} height={70} text="Start Learning" textSize="text-xl" navButton={true} />
          </Link>
        </div>
      </div>
    </main>
  );
}
