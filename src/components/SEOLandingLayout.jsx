import Link from "next/link";
import Image from "next/image";
import SEOPageWrapper from "@/components/SEOPageWrapper";
import Bubble from "@/assets/msa-club-academy-bubble-background.webp";
import LeftEllipse from "@/assets/msa-club-academy-left-ellipse-background.webp";
import ElipseDown from "@/assets/msa-club-academy-ellipse-down-background.webp";

// Generic layout used by all the new SEO landing pages
// (e.g. /animation-courses-dubai, /learn-blender). Keeps the visual rhythm of
// /courses (gradient title, white/5 cards, gradient CTA at bottom) so the new
// pages feel like part of the site rather than orphan landing pages.
export default function SEOLandingLayout({
  eyebrow,
  title,
  highlight,
  intro,
  sections = [],
  faqs = [],
  ctaTitle = "Start Learning Today",
  ctaText = "Join MSA Club and start building your animation skills with industry pros.",
  ctaHref = "/courses",
  ctaLabel = "Browse Courses",
  jsonLd,
}) {
  return (
    <SEOPageWrapper>
      {jsonLd ? (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <main className="min-h-screen text-white relative overflow-hidden">
        {/* Background decoration — bubbles & ellipses */}
        <Image src={LeftEllipse} quality={50} alt="" loading="lazy" className="absolute top-0 left-0 w-[28rem] h-auto opacity-60 pointer-events-none select-none" />
        <Image src={ElipseDown} quality={50} alt="" loading="lazy" className="absolute top-[32rem] -right-40 w-[28rem] h-auto opacity-50 pointer-events-none select-none" />
        <Image src={LeftEllipse} quality={50} alt="" loading="lazy" className="absolute bottom-0 left-0 w-[28rem] h-auto opacity-40 pointer-events-none select-none" />
        <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute top-20 right-10 w-12 md:w-20 h-auto animate-pulse pointer-events-none select-none" />
        <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute top-[36rem] left-4 w-10 md:w-14 h-auto animate-pulse pointer-events-none select-none" />
        <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute bottom-32 right-16 w-8 md:w-12 h-auto animate-pulse pointer-events-none select-none" />

        <div className="max-w-5xl mx-auto px-6 py-16 pt-28 relative z-10">
          {eyebrow ? (
            <p className="text-sm uppercase tracking-wider text-pink200 mb-3">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="font-primary text-3xl lg:text-5xl font-bold mb-5">
            {title}{" "}
            {highlight ? (
              <span className="bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">
                {highlight}
              </span>
            ) : null}
          </h1>

          {intro ? (
            <p className="font-eastroman-trial-demibold text-gray-300 text-lg mb-12 max-w-3xl leading-relaxed">
              {intro}
            </p>
          ) : null}

          <div className="space-y-8">
            {sections.map((section, i) => (
              <section
                key={i}
                className="custom-border bg-black p-8"
              >
                <h2 className="font-primary text-2xl font-semibold text-purple-300 mb-4">
                  {section.heading}
                </h2>
                {section.body ? (
                  <p className="font-eastroman-trial-demibold text-gray-300 leading-relaxed mb-4">
                    {section.body}
                  </p>
                ) : null}
                {section.bullets?.length ? (
                  <ul className="grid md:grid-cols-2 gap-2">
                    {section.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="font-eastroman-trial-demibold flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <span className="text-pink200 mt-0.5">&#10003;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {faqs.length > 0 && (
            <section className="mt-16">
              <h2 className="font-primary text-2xl font-semibold text-purple-300 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="custom-border bg-black p-5 group"
                  >
                    <summary className="font-primary text-white font-semibold cursor-pointer list-none flex justify-between items-center">
                      {faq.q}
                      <span className="text-pink200 group-open:rotate-45 transition">
                        +
                      </span>
                    </summary>
                    <p className="font-eastroman-trial-demibold text-gray-400 mt-3 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 text-center">
            <h2 className="font-primary text-2xl font-semibold mb-3 text-white">
              {ctaTitle}
            </h2>
            <p className="font-eastroman-trial-demibold text-gray-300 mb-6 max-w-2xl mx-auto">
              {ctaText}
            </p>
            <Link
              href={ctaHref}
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              {ctaLabel}
            </Link>
          </section>
        </div>
      </main>
    </SEOPageWrapper>
  );
}

// Helper to build a FAQPage JSON-LD blob from the same faqs array.
export function buildFaqJsonLd(faqs = []) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}
