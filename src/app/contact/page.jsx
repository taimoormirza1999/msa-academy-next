import SEOPageWrapper from "@/components/SEOPageWrapper";
import ContactClient from "@/components/ContactClient";

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
    title: "Contact MSA Club | MSA Academy",
    description:
      "Get in touch with the MSA Club team for questions about courses, enrollment, or partnerships.",
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

export default function ContactPage() {
  return (
    <SEOPageWrapper>
      <ContactClient />
    </SEOPageWrapper>
  );
}
