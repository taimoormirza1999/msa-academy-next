import Link from "next/link";
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import SEOPageWrapper from "@/components/SEOPageWrapper";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "Contact MSA Club | Get in Touch | MSA Academy Support",
  description:
    "Contact MSA Club for questions about animation courses, enrollment, partnerships, or support. Reach the MSA Academy team via email or social media.",
  keywords: [
    "contact MSA Club",
    "MSA Academy contact",
    "MSA Club support",
    "MSA animation help",
    "reach MSA Club",
    "MSA Club email",
  ].join(", "),
  alternates: {
    canonical: "https://msa-club.com/contact",
  },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Contact MSA Club | MSA Academy",
    description:
      "Get in touch with the MSA Club team for questions about courses, enrollment, or partnerships.",
    url: "https://msa-club.com/contact",
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

export default function ContactPage() {
  return (
    <SEOPageWrapper>
    <main className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-28">
        <h1 className="font-primary text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">
          Contact MSA Club
        </h1>
        <p className="font-eastroman-trial-demibold text-gray-400 text-lg mb-12 max-w-2xl">
          Have questions about our animation courses, need help with enrollment,
          or want to explore a partnership? We would love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h2 className="font-primary text-xl font-semibold text-purple-300 mb-4">
              General Inquiries
            </h2>
            <p className="font-eastroman-trial-demibold text-gray-400 text-sm mb-4">
              For questions about courses, enrollment, certificates, or anything
              else related to MSA Club.
            </p>
            <a
              href="mailto:info@msa-club.com"
              className="text-pink-400 hover:text-pink-300 font-medium transition"
            >
              info@msa-club.com
            </a>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h2 className="font-primary text-xl font-semibold text-purple-300 mb-4">
              Partnerships & Business
            </h2>
            <p className="font-eastroman-trial-demibold text-gray-400 text-sm mb-4">
              Interested in collaborating with MSA Club? Reach out for
              sponsorships, brand partnerships, or business opportunities.
            </p>
            <a
              href="mailto:info@msa-club.com"
              className="text-pink-400 hover:text-pink-300 font-medium transition"
            >
              info@msa-club.com
            </a>
          </div>
        </div>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-6 text-purple-300">
            Follow MSA on Social Media
          </h2>
          <p className="font-eastroman-trial-demibold text-gray-400 mb-6">
            Stay updated with the latest courses, animation tips, and community
            highlights.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.youtube.com/@MSAOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 rounded-xl p-5 border border-white/10 hover:border-red-500/30 transition"
            >
              <FaYoutube className="text-red-500 text-3xl" />
              <div>
                <p className="font-semibold text-white">YouTube</p>
                <p className="font-eastroman-trial-demibold text-gray-400 text-sm">
                  Watch MSA animated stories and tutorials
                </p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/maboroshi.studio.art/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 rounded-xl p-5 border border-white/10 hover:border-pink-500/30 transition"
            >
              <FaInstagram className="text-pink-500 text-3xl" />
              <div>
                <p className="font-semibold text-white">Instagram</p>
                <p className="font-eastroman-trial-demibold text-gray-400 text-sm">
                  Behind the scenes and character art
                </p>
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@maboroshi.studio.art"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition"
            >
              <FaTiktok className="text-purple-400 text-3xl" />
              <div>
                <p className="font-semibold text-white">TikTok</p>
                <p className="font-eastroman-trial-demibold text-gray-400 text-sm">
                  Quick animation tips and clips
                </p>
              </div>
            </a>
            <a
              href="https://www.facebook.com/MSAOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 rounded-xl p-5 border border-white/10 hover:border-blue-500/30 transition"
            >
              <FaFacebook className="text-blue-500 text-3xl" />
              <div>
                <p className="font-semibold text-white">Facebook</p>
                <p className="font-eastroman-trial-demibold text-gray-400 text-sm">
                  Join the MSA community
                </p>
              </div>
            </a>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-primary text-2xl font-semibold mb-4 text-purple-300">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How quickly will I get a response?",
                a: "We typically respond within 24-48 hours on business days.",
              },
              {
                q: "I'm having trouble with my account or course access. What should I do?",
                a: "Email us at info@msa-club.com with your account email and a description of the issue. We will get you sorted out.",
              },
              {
                q: "Can I request a refund?",
                a: "Please review our refund policy or email us directly. We handle each case individually to ensure fairness.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-lg p-5 border border-white/10"
              >
                <h3 className="font-primary font-semibold text-white mb-2">{faq.q}</h3>
                <p className="font-eastroman-trial-demibold text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-8">
          <p className="font-eastroman-trial-demibold text-gray-300 mb-6">
            Want to explore our courses before reaching out?
          </p>
          <Link
            href="/courses"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            View All Courses
          </Link>
        </section>
      </div>
    </main>
    </SEOPageWrapper>
  );
}
